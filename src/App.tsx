import React from 'react';
import { useQuizStore } from './store/quizStore';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { ResultsPage } from './pages/ResultsPage';

type AppScreen = 'home' | 'quiz' | 'results';

function App() {
  const [currentScreen, setCurrentScreen] = React.useState<AppScreen>('home');
  const isCompleted = useQuizStore(state => state.isCompleted);
  const answers = useQuizStore(state => state.answers);
  const resetQuiz = useQuizStore(state => state.resetQuiz);

  React.useEffect(() => {
    // Show results if quiz is completed
    if (isCompleted) {
      setCurrentScreen('results');
    }
    // Show quiz if there are answers but not completed
    else if (answers.length > 0) {
      setCurrentScreen('quiz');
    }
  }, [isCompleted, answers.length]);

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  const handleResetAndStartOver = () => {
    resetQuiz();
    setCurrentScreen('home');
  };

  return (
    <div className="w-full h-dvh">
      {/* Full screen background container - fills entire screen including safe area */}
      <main className="w-full h-full relative">
        {/* Content safe area container - avoids notch and home indicator */}
        <div
          className="w-full h-full flex flex-col"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
            paddingLeft: "env(safe-area-inset-left)",
            paddingRight: "env(safe-area-inset-right)",
          }}
        >
          {/* Main content area */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="w-full h-full">
              {currentScreen === 'home' && (
                <HomePage onStartQuiz={handleStartQuiz} />
              )}

              {currentScreen === 'quiz' && (
                <div className="w-full h-full">
                  {/* Back button for mobile */}
                  <div className="flex-none p-4 pb-0">
                    <button
                      onClick={handleBackToHome}
                      className="text-gray-600 hover:text-gray-900 text-sm font-medium active:scale-95 transition-all duration-200"
                    >
                      ← Retour à l'accueil
                    </button>
                  </div>
                  <QuizPage />
                </div>
              )}

              {currentScreen === 'results' && (
                <div className="w-full h-full">
                  {/* Back button for mobile */}
                  <div className="flex-none p-4 pb-0">
                    <button
                      onClick={handleResetAndStartOver}
                      className="text-gray-600 hover:text-gray-900 text-sm font-medium active:scale-95 transition-all duration-200"
                    >
                      ← Nouveau test
                    </button>
                  </div>
                  <ResultsPage />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;