import React from 'react';
import { useQuizStore } from '../store/quizStore';
import { PersonalityResults } from '../components/PersonalityResults';
import { ProfileDetails } from '../components/ProfileDetails';
import { RotateCcw, Share, Download } from 'lucide-react';
import { generatePDF } from '../utils/pdfGenerator';

export const ResultsPage: React.FC = () => {
  const { result, profile, resetQuiz } = useQuizStore();

  if (!result || !profile) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Chargement des résultats...
          </h2>
          <p className="text-gray-600">
            Analyse de vos réponses en cours
          </p>
        </div>
      </div>
    );
  }

  const handleRestart = () => {
    resetQuiz();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mon profil de personnalité Big Five',
          text: 'Découvrez mon profil de personnalité basé sur le test Big Five',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Partage annulé ou échoué');
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(
          `Mon profil de personnalité Big Five: ${JSON.stringify(result, null, 2)}`
        );
        alert('Résultats copiés dans le presse-papiers !');
      } catch (error) {
        console.log('Impossible de copier');
      }
    }
  };

  const handleDownload = () => {
    if (!result || !profile) return;

    try {
      generatePDF({
        profile,
        result
      });
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      alert('Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.');
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Header */}
      <div className="flex-none p-6 text-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            🎉 Test Terminé !
          </h1>
          <p className="text-gray-600">
            Voici votre profil de personnalité détaillé
          </p>
        </div>
      </div>

      {/* Results Content */}
      <div className="flex-1 px-6 pb-6">
        <div className="space-y-6">
          {/* Personality Results */}
          <PersonalityResults result={result} />

          {/* Profile Details */}
          <ProfileDetails profile={profile} />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex-none p-6 pt-0">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            onClick={handleShare}
            className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-blue-500 text-white font-medium active:bg-blue-600 active:scale-95 transition-all duration-200"
          >
            <Share className="w-4 h-4" />
            <span>Partager</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-green-500 text-white font-medium active:bg-green-600 active:scale-95 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger</span>
          </button>
        </div>

        {/* Restart button */}
        <button
          onClick={handleRestart}
          className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-white border-2 border-gray-300 text-gray-700 font-medium active:bg-gray-50 active:scale-95 transition-all duration-200"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Refaire le test</span>
        </button>
      </div>
    </div>
  );
};