import React, { useEffect } from 'react';
import { useQuizStore } from '../store/quizStore';
import { QuestionCard } from '../components/QuestionCard';
import { ProgressBar } from '../components/ProgressBar';
import { bigFiveQuestions } from '../utils/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const QuizPage: React.FC = () => {
  const {
    currentQuestionIndex,
    answers,
    getCurrentQuestion,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    isLastQuestion,
    completeQuiz,
    getAnsweredCount,
    getProgress
  } = useQuizStore();

  const currentQuestion = getCurrentQuestion();
  const progress = getProgress();
  const isCompleted = isLastQuestion() && getAnsweredCount() === bigFiveQuestions.length;
  const hasAnswer = currentQuestion && answers.find(a => a.questionId === currentQuestion.id);

  useEffect(() => {
    if (isCompleted && currentQuestionIndex === bigFiveQuestions.length - 1) {
      // Auto-complete when all questions are answered
      setTimeout(() => {
        completeQuiz();
      }, 1000);
    }
  }, [isCompleted, currentQuestionIndex, completeQuiz]);

  const handleNext = () => {
    if (isLastQuestion()) {
      if (isCompleted) {
        completeQuiz();
      }
    } else {
      nextQuestion();
    }
  };

  if (!currentQuestion) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Chargement...
          </h2>
          <p className="text-gray-600">
            Préparation de votre questionnaire
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header with progress */}
      <div className="flex-none p-6">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Test de Personnalité Big Five
          </h1>
          <p className="text-gray-600 text-sm">
            Découvrez votre profil de personnalité en 30 questions
          </p>
        </div>

        <ProgressBar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 py-4">
        <QuestionCard
          question={currentQuestion}
          selectedOptionId={hasAnswer?.selectedOptionId}
          onOptionSelect={(optionId, score) =>
            selectAnswer(currentQuestion.id, optionId, score)
          }
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={bigFiveQuestions.length}
        />
      </div>

      {/* Navigation */}
      <div className="flex-none p-6 pt-0">
        <div className="flex space-x-4">
          {/* Previous button */}
          <button
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`flex-1 flex items-center justify-center space-x-2 py-4 rounded-2xl font-medium transition-all duration-200 ${currentQuestionIndex === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 active:bg-gray-300 active:scale-95'
              }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Précédent</span>
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={!hasAnswer}
            className={`flex-1 flex items-center justify-center space-x-2 py-4 rounded-2xl font-medium transition-all duration-200 ${!hasAnswer
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : isLastQuestion() && isCompleted
                ? 'bg-green-500 text-white active:bg-green-600 active:scale-95 shadow-lg'
                : 'bg-blue-500 text-white active:bg-blue-600 active:scale-95 shadow-lg'
              }`}
          >
            <span>
              {isLastQuestion() && isCompleted
                ? 'Voir les résultats'
                : 'Suivant'
              }
            </span>
            {!isLastQuestion() || !isCompleted ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <span>✓</span>
            )}
          </button>
        </div>

        {/* Completion hint */}
        {isCompleted && (
          <div className="text-center mt-4">
            <p className="text-sm text-green-600 font-medium">
              🎉 Toutes les questions sont répondues !
            </p>
          </div>
        )}
      </div>
    </div>
  );
};