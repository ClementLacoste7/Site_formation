import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';
import { syntaxHighlighting, HighlightStyle, indentOnInput, bracketMatching } from '@codemirror/language';
import { tags } from '@lezer/highlight';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { sql } from '@codemirror/lang-sql';
import { python } from '@codemirror/lang-python';

export type LangageCode = 'html' | 'css' | 'javascript' | 'sql' | 'python';

interface Props {
  valeur: string;
  langage: LangageCode;
  onChange?: (valeur: string) => void;
  lectureSeule?: boolean;
}

function extensionLangage(langage: LangageCode) {
  switch (langage) {
    case 'html':
      return html();
    case 'css':
      return css();
    case 'javascript':
      return javascript();
    case 'sql':
      return sql();
    case 'python':
      return python();
  }
}

const styleCouleurs = syntaxHighlighting(
  HighlightStyle.define([
    { tag: tags.keyword, color: 'var(--code-mot-cle)' },
    { tag: [tags.string, tags.special(tags.string)], color: 'var(--code-chaine)' },
    { tag: tags.comment, color: 'var(--code-commentaire)', fontStyle: 'italic' },
    { tag: tags.number, color: 'var(--code-nombre)' },
    {
      tag: [tags.function(tags.variableName), tags.function(tags.propertyName)],
      color: 'var(--code-fonction)'
    }
  ])
);

const themeEditeur = EditorView.theme({
  '&': {
    color: 'var(--couleur-texte)',
    backgroundColor: 'var(--couleur-fond-secondaire)',
    fontSize: '0.875rem'
  },
  '.cm-content': { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', padding: '0.75rem 0' },
  '.cm-gutters': {
    backgroundColor: 'var(--couleur-fond-secondaire)',
    color: 'var(--couleur-texte-attenue)',
    border: 'none'
  },
  '.cm-activeLine': { backgroundColor: 'color-mix(in srgb, var(--couleur-accent) 8%, transparent)' },
  '.cm-activeLineGutter': { backgroundColor: 'transparent' },
  '&.cm-focused': { outline: 'none' }
});

/**
 * Primitive CodeMirror 6 réutilisée par EditeurCode (multi-onglets) et par
 * les bacs à sable SQL/Python (instance unique). Le thème suit nos variables
 * CSS de couleur et de code : pas de bascule JS au changement de data-theme,
 * la feuille de style CodeMirror se re-théme toute seule.
 */
export default function EditeurCodeMirror({ valeur, langage, onChange, lectureSeule = false }: Props) {
  const conteneurRef = useRef<HTMLDivElement>(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useEffect(() => {
    if (!conteneurRef.current) return;

    const extensions = [
      lineNumbers(),
      history(),
      indentOnInput(),
      bracketMatching(),
      highlightActiveLine(),
      styleCouleurs,
      keymap.of([...defaultKeymap, ...historyKeymap]),
      extensionLangage(langage),
      themeEditeur,
      EditorView.editable.of(!lectureSeule),
      EditorView.updateListener.of((update) => {
        if (update.docChanged) {
          onChangeRef.current?.(update.state.doc.toString());
        }
      })
    ];

    const state = EditorState.create({ doc: valeur, extensions });
    const vue = new EditorView({ state, parent: conteneurRef.current });

    return () => vue.destroy();
    // Volontaire : on ne recrée l'éditeur qu'au montage ou si le langage
    // change. "valeur" ne doit pas re-synchroniser le document à chaque
    // frappe (ça casserait la position du curseur) ; un "Réinitialiser"
    // externe force un remount via une prop key sur ce composant.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langage]);

  return <div ref={conteneurRef} className="cm-wrapper overflow-auto rounded-md" style={{ maxHeight: '20rem' }} />;
}
