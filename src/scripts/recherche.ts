// Pagefind est généré en post-build (voir le script npm "build") : ce module
// ne charge son runtime qu'à la première recherche effective, jamais au
// rendu de la page. En développement (astro dev), l'index n'existe pas
// encore : la recherche échoue silencieusement, c'est attendu.

export interface ResultatRecherche {
  url: string;
  titre: string;
  excerpt: string;
  chemin: string;
}

interface PagefindRuntime {
  init: () => Promise<void>;
  search: (requete: string) => Promise<{ results: { data: () => Promise<PagefindDonnees> }[] }>;
}

interface PagefindDonnees {
  url: string;
  excerpt: string;
  meta?: { title?: string };
}

let pagefindPromise: Promise<PagefindRuntime> | null = null;

async function obtenirPagefind(): Promise<PagefindRuntime> {
  if (!pagefindPromise) {
    pagefindPromise = import(/* @vite-ignore */ '/pagefind/pagefind.js').then(
      async (pagefind: PagefindRuntime) => {
        await pagefind.init();
        return pagefind;
      }
    );
  }
  return pagefindPromise;
}

function cheminLisible(url: string): string {
  return url
    .split('/')
    .filter(Boolean)
    .filter((segment) => segment !== 'fr')
    .map((segment) => segment.replace(/-/g, ' '))
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' › ');
}

export async function rechercher(requete: string): Promise<ResultatRecherche[]> {
  if (!requete.trim()) return [];
  try {
    const pagefind = await obtenirPagefind();
    const resultat = await pagefind.search(requete);
    const donnees = await Promise.all(resultat.results.slice(0, 10).map((r) => r.data()));
    return donnees.map((d) => ({
      url: d.url,
      titre: d.meta?.title ?? d.url,
      excerpt: d.excerpt,
      chemin: cheminLisible(d.url)
    }));
  } catch {
    // Index absent (dev) ou erreur réseau : pas de résultat plutôt qu'un plantage.
    return [];
  }
}
