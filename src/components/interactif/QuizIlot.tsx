import { useState } from 'react';
import { useTranslations } from '../../i18n/utils';

interface Reponse {
  texte: string;
  correcte: boolean;
  explication: string;
}

interface Question {
  question: string;
  type: 'unique' | 'multiple';
  reponses: Reponse[];
}

interface Props {
  questions: Question[];
}

export default function QuizIlot({ questions }: Props) {
  const t = useTranslations();
  const [selections, setSelections] = useState<Record<number, Set<number>>>({});
  const [valide, setValide] = useState(false);

  function basculerReponse(indexQuestion: number, indexReponse: number, type: Question['type']) {
    if (valide) return;
    setSelections((s) => {
      const courant = new Set(s[indexQuestion] ?? []);
      if (type === 'unique') {
        courant.clear();
        courant.add(indexReponse);
      } else if (courant.has(indexReponse)) {
        courant.delete(indexReponse);
      } else {
        courant.add(indexReponse);
      }
      return { ...s, [indexQuestion]: courant };
    });
  }

  function estQuestionCorrecte(question: Question, indexQuestion: number) {
    const selection = selections[indexQuestion] ?? new Set<number>();
    return question.reponses.every((reponse, i) => selection.has(i) === reponse.correcte);
  }

  const score = valide ? questions.filter((q, i) => estQuestionCorrecte(q, i)).length : 0;

  function recommencer() {
    setSelections({});
    setValide(false);
  }

  return (
    <div
      className="not-prose my-6 space-y-6 rounded-lg border p-4"
      style={{ borderColor: 'var(--couleur-bordure)' }}
    >
      {questions.map((question, indexQuestion) => {
        const selection = selections[indexQuestion] ?? new Set<number>();
        return (
          <fieldset key={indexQuestion}>
            <legend className="font-medium">{question.question}</legend>
            <div className="mt-2 space-y-1">
              {question.reponses.map((reponse, indexReponse) => {
                const estSelectionnee = selection.has(indexReponse);
                const fond = !valide
                  ? 'transparent'
                  : reponse.correcte
                    ? 'color-mix(in srgb, var(--couleur-succes) 15%, transparent)'
                    : estSelectionnee
                      ? 'color-mix(in srgb, var(--couleur-danger) 15%, transparent)'
                      : 'transparent';
                return (
                  <label
                    key={indexReponse}
                    className="flex items-start gap-2 rounded p-2 text-sm"
                    style={{ backgroundColor: fond }}
                  >
                    <input
                      type={question.type === 'unique' ? 'radio' : 'checkbox'}
                      name={`question-${indexQuestion}`}
                      checked={estSelectionnee}
                      disabled={valide}
                      onChange={() => basculerReponse(indexQuestion, indexReponse, question.type)}
                      className="mt-1"
                    />
                    <span>
                      {reponse.texte}
                      {valide && (
                        <span
                          className="mt-1 block text-xs"
                          style={{ color: 'var(--couleur-texte-attenue)' }}
                        >
                          {reponse.explication}
                        </span>
                      )}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        );
      })}

      {!valide ? (
        <button
          type="button"
          onClick={() => setValide(true)}
          className="rounded px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: 'var(--couleur-accent)' }}
        >
          {t.quiz.valider}
        </button>
      ) : (
        <div className="flex items-center gap-4">
          <p className="font-medium">
            {t.quiz.score} : {score} / {questions.length}
          </p>
          <button
            type="button"
            onClick={recommencer}
            className="rounded border px-3 py-1.5 text-sm"
            style={{ borderColor: 'var(--couleur-bordure)' }}
          >
            {t.quiz.recommencer}
          </button>
        </div>
      )}
    </div>
  );
}
