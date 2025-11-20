import React from 'react';
import { useQuizStore } from '../store/quizStore';
import { Brain, Target, Users, Zap } from 'lucide-react';

interface HomePageProps {
  onStartQuiz: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStartQuiz }) => {
  const answeredCount = useQuizStore(state => state.getAnsweredCount());
  const hasProgress = answeredCount > 0;

  return (
    <div className="w-full h-full flex flex-col">
      {/* Hero Section */}
      <div className="flex-none p-6 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Test de Personnalité
          </h1>
          <h2 className="text-xl font-semibold text-blue-600 mb-3">
            Big Five
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
            Découvrez votre profil de personnalité en répondant à 30 questions
            basées sur le modèle scientifique Big Five.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 px-6">
        <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Scientific Précision</h3>
              <p className="text-sm text-gray-600">
                Basé sur la recherche psychologique en personnalité
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Rapide et Facile</h3>
              <p className="text-sm text-gray-600">
                Seulement 30 questions, résultat en quelques minutes
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Profil Complet</h3>
              <p className="text-sm text-gray-600">
                Forces, faiblesses et recommandations personnalisées
              </p>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        {hasProgress && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-yellow-800 text-center">
              Vous avez déjà répondu à {answeredCount} question(s).
              Continuons où vous vous êtes arrêté(e) !
            </p>
          </div>
        )}

        {/* Test Info */}
        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Comment ça marche ?</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• 30 questions sur votre personnalité</li>
            <li>• Réponses sur une échelle de 1 à 5</li>
            <li>• Analyse de 5 dimensions de personnalité</li>
            <li>• Résultats avec recommandations</li>
          </ul>
        </div>
      </div>

      {/* Start Button */}
      <div className="flex-none p-6 pt-0">
        <button
          onClick={onStartQuiz}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg active:scale-95 active:shadow-lg transition-all duration-200 shadow-lg"
        >
          {hasProgress ? 'Continuer le test' : 'Commencer le test'}
        </button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Durée estimée : 5-10 minutes
        </p>
      </div>
    </div>
  );
};