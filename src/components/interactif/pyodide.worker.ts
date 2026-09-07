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

// Construit le script complet exécuté pour un exercice corrigé : le code de
// l'apprenant, suivi d'une boucle qui évalue chaque cas de test (des
// expressions Python écrites par l'auteur du chapitre, jamais par
// l'apprenant) et compare le résultat obtenu à la valeur attendue. Les cas
// de test transitent en JSON, plus simple à échapper sans risque qu'une
// construction manuelle de littéraux Python.
function construireScriptExercice(code, casDeTest) {
  const casJson = JSON.stringify(casDeTest);
  return [
    code,
    '',
    'import json as __json__',
    `__cas_de_test__ = __json__.loads(r"""${casJson}""")`,
    '__resultats_tests__ = []',
    'for __cas__ in __cas_de_test__:',
    '    try:',
    '        __obtenu__ = eval(__cas__["appel"])',
    '        __attendu__ = eval(__cas__["attendu"])',
    '        __resultats_tests__.append({',
    '            "description": __cas__["description"],',
    '            "reussi": __obtenu__ == __attendu__,',
    '            "obtenu": repr(__obtenu__),',
    '            "attendu": repr(__attendu__),',
    '        })',
    '    except Exception as __erreur__:',
    '        __resultats_tests__.append({',
    '            "description": __cas__["description"],',
    '            "reussi": False,',
    '            "obtenu": "Erreur : " + str(__erreur__),',
    '            "attendu": __cas__["attendu"],',
    '        })',
    '__json__.dumps(__resultats_tests__)'
  ].join('\n');
}

self.onmessage = async (evenement) => {
  const { type, code, casDeTest } = evenement.data;

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

  if (type === 'executer_exercice' && pyodide) {
    try {
      const script = construireScriptExercice(code, casDeTest);
      const resultatJson = await pyodide.runPythonAsync(script);
      postMessage({ type: 'resultats_exercice', resultats: JSON.parse(resultatJson) });
    } catch (erreur) {
      postMessage({ type: 'erreur', texte: String(erreur) });
    }
  }
};
