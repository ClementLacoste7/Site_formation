// Gestion de la progression en localStorage (section 9.3 de SPEC.md).
// Toute lecture/écriture est défensive : le mode privé de Safari fait
// échouer setItem, et un contenu corrompu ou d'un schéma inconnu ne doit
// jamais casser l'affichage (au pire, la progression repart de zéro).

export interface EntreeChapitre {
  vu: boolean;
  quizReussi: boolean;
  meilleurScore: number;
  date: string;
}

export interface Progression {
  version: number;
  chapitres: Record<string, EntreeChapitre>;
}

const CLE_STOCKAGE = 'Cybercursus:progression';
const VERSION_ACTUELLE = 1;

function progressionParDefaut(): Progression {
  return { version: VERSION_ACTUELLE, chapitres: {} };
}

function estEntreeValide(valeur: unknown): valeur is EntreeChapitre {
  if (typeof valeur !== 'object' || valeur === null) return false;
  const e = valeur as Record<string, unknown>;
  return (
    typeof e.vu === 'boolean' &&
    typeof e.quizReussi === 'boolean' &&
    typeof e.meilleurScore === 'number' &&
    typeof e.date === 'string'
  );
}

function estProgressionValide(valeur: unknown): valeur is Progression {
  if (typeof valeur !== 'object' || valeur === null) return false;
  const p = valeur as Record<string, unknown>;
  // Le champ "version" existe pour permettre une migration future sans
  // perte (section 9.3). En V1 il n'y a rien à migrer : un schéma
  // différent est traité comme invalide, la progression repart de zéro
  // plutôt que de risquer un affichage cassé sur des données inattendues.
  if (p.version !== VERSION_ACTUELLE) return false;
  if (typeof p.chapitres !== 'object' || p.chapitres === null) return false;
  return Object.values(p.chapitres).every(estEntreeValide);
}

export function cleChapitre(coursSlug: string, chapitreSlug: string): string {
  return `${coursSlug}/${chapitreSlug}`;
}

export function lireProgression(): Progression {
  try {
    const brut = localStorage.getItem(CLE_STOCKAGE);
    if (!brut) return progressionParDefaut();
    const valeur = JSON.parse(brut);
    if (!estProgressionValide(valeur)) return progressionParDefaut();
    return valeur;
  } catch {
    return progressionParDefaut();
  }
}

function ecrireProgression(progression: Progression): void {
  try {
    localStorage.setItem(CLE_STOCKAGE, JSON.stringify(progression));
  } catch {
    // Navigation privée (Safari) ou quota dépassé : on continue sans
    // persister plutôt que de faire planter la page.
  }
}

export function marquerChapitreVu(cle: string): void {
  const progression = lireProgression();
  const existante = progression.chapitres[cle];
  progression.chapitres[cle] = {
    vu: true,
    quizReussi: existante?.quizReussi ?? false,
    meilleurScore: existante?.meilleurScore ?? 0,
    date: new Date().toISOString()
  };
  ecrireProgression(progression);
}

export function enregistrerResultatQuiz(cle: string, scorePourcentage: number): void {
  const progression = lireProgression();
  const existante = progression.chapitres[cle];
  progression.chapitres[cle] = {
    vu: true,
    quizReussi: existante?.quizReussi || scorePourcentage === 100,
    meilleurScore: Math.max(existante?.meilleurScore ?? 0, scorePourcentage),
    date: new Date().toISOString()
  };
  ecrireProgression(progression);
}

export function estChapitreTermine(cle: string): boolean {
  return lireProgression().chapitres[cle]?.quizReussi === true;
}

export function reinitialiserProgression(): void {
  ecrireProgression(progressionParDefaut());
}
