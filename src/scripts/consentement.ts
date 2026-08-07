// Consent Mode v2 (section 11.4 de SPEC.md) : tous les signaux sont
// "denied" par défaut, mis à jour uniquement au choix explicite de
// l'utilisateur. Le choix est stocké en localStorage (jamais un cookie) :
// c'est la seule trace laissée avant consentement, et ce n'est pas un
// mécanisme de suivi mais l'enregistrement du choix lui-même.

export interface Consentement {
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
  date: string;
}

const CLE_STOCKAGE = 'Cybercursus:consentement';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function consentementRefuse(): Omit<Consentement, 'date'> {
  return {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  };
}

function estConsentementValide(valeur: unknown): valeur is Consentement {
  if (typeof valeur !== 'object' || valeur === null) return false;
  const v = valeur as Record<string, unknown>;
  const estGrantedOuDenied = (x: unknown) => x === 'granted' || x === 'denied';
  return (
    estGrantedOuDenied(v.ad_storage) &&
    estGrantedOuDenied(v.ad_user_data) &&
    estGrantedOuDenied(v.ad_personalization) &&
    estGrantedOuDenied(v.analytics_storage) &&
    typeof v.date === 'string'
  );
}

export function lireConsentement(): Consentement | null {
  try {
    const brut = localStorage.getItem(CLE_STOCKAGE);
    if (!brut) return null;
    const valeur = JSON.parse(brut);
    return estConsentementValide(valeur) ? valeur : null;
  } catch {
    return null;
  }
}

function ecrireConsentement(consentement: Consentement): void {
  try {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(consentement));
  } catch {
    // Navigation privée ou quota dépassé : le choix s'applique quand même
    // pour cette session, simplement il ne sera pas mémorisé.
  }
}

function gtag(...args: unknown[]): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

/**
 * À appeler le plus tôt possible dans le <head>, avant tout autre script
 * Google : initialise le stub gtag et pose les signaux par défaut sur
 * "denied". N'effectue aucune requête réseau, ne dépose aucun cookie.
 */
export function initialiserConsentModeDefaut(): void {
  window.dataLayer = window.dataLayer || [];
  gtag('consent', 'default', { ...consentementRefuse(), wait_for_update: 500 });

  const stocke = lireConsentement();
  if (stocke) {
    appliquerConsentement(stocke, { persister: false });
  }
}

/**
 * Met à jour Consent Mode et déclenche le chargement des scripts
 * tiers concernés, jamais avant ce point.
 */
export function appliquerConsentement(
  choix: Omit<Consentement, 'date'>,
  options: { persister?: boolean } = {}
): void {
  const consentement: Consentement = { ...choix, date: new Date().toISOString() };
  gtag('consent', 'update', choix);

  if (options.persister !== false) {
    ecrireConsentement(consentement);
  }

  if (choix.analytics_storage === 'granted') {
    chargerGoogleAnalytics();
  }
  if (choix.ad_storage === 'granted') {
    chargerAdSense();
  }
}

function chargerScriptApresPeinture(creerScript: () => HTMLScriptElement): void {
  // Jamais avant que le contenu principal soit peint : on attend l'évènement
  // "load" (tout, y compris images/styles, est déjà affiché) plutôt que
  // d'injecter au moment du clic de consentement lui-même.
  const injecter = () => document.head.appendChild(creerScript());
  if (document.readyState === 'complete') {
    injecter();
  } else {
    window.addEventListener('load', injecter, { once: true });
  }
}

function chargerGoogleAnalytics(): void {
  const idMesure = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;
  if (!idMesure || document.querySelector(`script[data-ga="${idMesure}"]`)) return;

  chargerScriptApresPeinture(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${idMesure}`;
    script.dataset.ga = idMesure;
    return script;
  });
  gtag('js', new Date());
  gtag('config', idMesure);
}

function chargerAdSense(): void {
  const idClient = import.meta.env.PUBLIC_ADSENSE_CLIENT_ID;
  // Pas encore de compte AdSense validé (voir SlotPub.astro) : ce chemin
  // reste inerte tant que l'identifiant n'est pas configuré.
  if (!idClient || document.querySelector('script[data-adsbygoogle]')) return;

  chargerScriptApresPeinture(() => {
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${idClient}`;
    script.dataset.adsbygoogle = 'true';
    script.addEventListener('load', () => {
      document.dispatchEvent(new CustomEvent('adsense-pret'));
    });
    return script;
  });
}
