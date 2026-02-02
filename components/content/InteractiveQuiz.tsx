'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, XCircle, RotateCcw, Trophy, Target } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface InteractiveQuizProps {
  title?: string;
  questions: QuizQuestion[];
}

export function InteractiveQuiz({ title = 'Quiz de validation', questions }: InteractiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState<boolean[]>(
    new Array(questions.length).fill(false)
  );
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult[currentQuestion]) return;

    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleValidate = () => {
    if (selectedAnswers[currentQuestion] === null) return;

    const newShowResult = [...showResult];
    newShowResult[currentQuestion] = true;
    setShowResult(newShowResult);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowResult(new Array(questions.length).fill(false));
    setQuizCompleted(false);
  };

  const calculateScore = (): number => {
    return selectedAnswers.reduce<number>((acc, answer, index) => {
      return answer === questions[index].correctIndex ? acc + 1 : acc;
    }, 0);
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return { message: 'Excellent ! Vous maîtrisez le sujet !', color: 'text-green-600' };
    if (percentage >= 60) return { message: 'Bien ! Quelques points à revoir.', color: 'text-yellow-600' };
    return { message: 'Continuez à apprendre, vous progressez !', color: 'text-orange-600' };
  };

  if (quizCompleted) {
    const score = calculateScore();
    const { message, color } = getScoreMessage(score, questions.length);

    return (
      <Card className="p-6 my-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <div className="text-center">
          <Trophy className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-bold mb-2">Quiz terminé !</h3>
          <div className="text-4xl font-bold text-primary mb-2">
            {score} / {questions.length}
          </div>
          <p className={`text-lg mb-6 ${color}`}>{message}</p>

          <div className="mb-6">
            <div className="w-full bg-muted rounded-full h-4 mb-2">
              <div
                className="bg-primary h-4 rounded-full transition-all duration-500"
                style={{ width: `${(score / questions.length) * 100}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {Math.round((score / questions.length) * 100)}% de bonnes réponses
            </p>
          </div>

          <div className="space-y-3 text-left mb-6">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg flex items-start gap-3 ${
                  selectedAnswers[idx] === q.correctIndex
                    ? 'bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800'
                }`}
              >
                {selectedAnswers[idx] === q.correctIndex ? (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-medium text-sm">Q{idx + 1}: {q.question}</p>
                  {selectedAnswers[idx] !== q.correctIndex && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Bonne réponse : {q.options[q.correctIndex]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button onClick={handleRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Recommencer le quiz
          </Button>
        </div>
      </Card>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== null;
  const isValidated = showResult[currentQuestion];
  const isCorrect = selectedAnswers[currentQuestion] === question.correctIndex;

  return (
    <Card className="p-6 my-8 border-primary/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
          Question {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      <div className="mb-2">
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="my-6">
        <p className="text-lg font-medium mb-4">{question.question}</p>

        <div className="space-y-3">
          {question.options.map((option, optionIndex) => {
            let buttonClass = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ';

            if (isValidated) {
              if (optionIndex === question.correctIndex) {
                buttonClass += 'border-green-500 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-200';
              } else if (optionIndex === selectedAnswers[currentQuestion]) {
                buttonClass += 'border-red-500 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-200';
              } else {
                buttonClass += 'border-muted bg-muted/30 text-muted-foreground';
              }
            } else if (selectedAnswers[currentQuestion] === optionIndex) {
              buttonClass += 'border-primary bg-primary/10';
            } else {
              buttonClass += 'border-muted hover:border-primary/50 hover:bg-muted/50';
            }

            return (
              <button
                key={optionIndex}
                onClick={() => handleAnswerSelect(optionIndex)}
                disabled={isValidated}
                className={buttonClass}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center font-medium text-sm">
                    {String.fromCharCode(65 + optionIndex)}
                  </span>
                  <span>{option}</span>
                  {isValidated && optionIndex === question.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                  )}
                  {isValidated && optionIndex === selectedAnswers[currentQuestion] && optionIndex !== question.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isValidated && (
        <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800' : 'bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800'}`}>
          <div className="flex items-start gap-2">
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p className={`font-medium ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-orange-800 dark:text-orange-200'}`}>
                {isCorrect ? 'Bonne réponse !' : 'Pas tout à fait...'}
              </p>
              <p className="text-sm mt-1 text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Précédent
        </Button>

        <div className="flex gap-2">
          {!isValidated ? (
            <Button
              onClick={handleValidate}
              disabled={!isAnswered}
            >
              Valider
            </Button>
          ) : (
            <Button onClick={handleNext}>
              {currentQuestion === questions.length - 1 ? 'Voir les résultats' : 'Suivant'}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
