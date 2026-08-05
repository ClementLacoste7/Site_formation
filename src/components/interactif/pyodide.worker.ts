// @ts-nocheck -- contexte Worker : les types DOM globaux du projet entrent
// en conflit avec les types WebWorker, et ce fichier est trop petit pour
// justifier un tsconfig dédié.

// Pyodide est chargé depuis le CDN officiel jsDelivr (version figée) plutôt
// que self-hébergé : la distribution complète pèse plusieurs dizaines de Mo,
// bien au-delà de ce qui a sa place dans ce dépôt ou ce déploiement statique.
const VERSION_PYODIDE = '314.0.3';
const BASE_PYODIDE = `https://cdn.jsdelivr.net/pyodide/v${VERSION_PYODIDE}/full/`;
const CDN_PYODIDE = `${BASE_PYODIDE}pyodide.js`;

let pyodide = null;

async function initialiser() {
  // fetch() + eval global plutôt que importScripts() : certains runtimes
  // (dont le Chromium headless-shell utilisé pour les tests de ce projet)
  // échouent sur importScripts() vers une origine externe alors que fetch()
  // fonctionne normalement. Cette approche évite d'en dépendre.
  const reponse = await fetch(CDN_PYODIDE);
  if (!reponse.ok) {
    throw new Error(`Impossible de charger Pyodide (${reponse.status})`);
  }
  const texte = await reponse.text();
  (0, eval)(texte);
  // indexURL est indispensable ici : évalué comme une simple chaîne (pas un
  // <script src>/import réel), Pyodide ne peut pas déduire seul son origine
  // et chercherait sinon ses fichiers annexes (wasm, stdlib) sur notre propre
  // domaine au lieu du CDN.
  pyodide = await loadPyodide({ indexURL: BASE_PYODIDE });
  pyodide.setStdout({
    batched: (texte) => postMessage({ type: 'sortie', flux: 'stdout', texte })
  });
  pyodide.setStderr({
    batched: (texte) => postMessage({ type: 'sortie', flux: 'stderr', texte })
  });
}

self.onmessage = async (evenement) => {
  const { type, code } = evenement.data;

  if (type === 'init') {
    try {
      await initialiser();
      postMessage({ type: 'pret' });
    } catch (erreur) {
      postMessage({ type: 'erreur', texte: String(erreur) });
    }
    return;
  }

  if (type === 'executer' && pyodide) {
    try {
      await pyodide.runPythonAsync(code);
      postMessage({ type: 'termine' });
    } catch (erreur) {
      postMessage({ type: 'erreur', texte: String(erreur) });
    }
  }
};
