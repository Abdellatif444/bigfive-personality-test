import React from 'react';
import { useQuizStore } from '../store/quizStore';
import { PersonalityResults } from '../components/PersonalityResults';
import { ProfileDetails } from '../components/ProfileDetails';
import { RotateCcw, Share, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { generatePDF } from '../utils/pdfGenerator';

export const ResultsPage: React.FC = () => {
  const { result, profile, resetQuiz } = useQuizStore();
  const pdfRef = React.useRef<HTMLDivElement>(null);

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
    try {
      // 1) Générer un PDF du contenu des résultats
      const node = pdfRef.current;
      if (!node) return;

      const canvas = await html2canvas(node, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let position = 0;

      if (imgHeight <= pageHeight) {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } else {
        // Multi-page si nécessaire
        let remainingHeight = imgHeight;
        let y = 0;
        while (remainingHeight > 0) {
          pdf.addImage(imgData, 'PNG', 0, y, imgWidth, imgHeight);
          remainingHeight -= pageHeight;
          if (remainingHeight > 0) {
            pdf.addPage();
            y -= pageHeight; // décale l'image vers le haut pour simuler le scroll
          }
        }
      }

      const blob = pdf.output('blob');
      const file = new File([blob], 'bigfive-results.pdf', { type: 'application/pdf' });

      // 2) Tenter Web Share API avec fichiers (mobile compatible WhatsApp/Apps)
      const canShareFiles = (navigator as any).canShare && (navigator as any).canShare({ files: [file] });
      if (canShareFiles && navigator.share) {
        await navigator.share({
          files: [file],
          title: 'Mes résultats Big Five',
          text: 'Je partage mes résultats au test Big Five.'
        });
        return;
      }

      // 3) Fallback: télécharger le PDF, puis ouvrir WhatsApp avec un message
      pdf.save('bigfive-results.pdf');
      const msg = 'Je viens de terminer le test Big Five. Je te partage mon PDF (téléchargé sur mon appareil).';
      const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
    } catch (e) {
      console.error('Partage PDF échoué', e);
      alert('Impossible de générer/partager le PDF. Vous pouvez réessayer ou télécharger vos résultats.');
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
      <div className="flex-1 px-6 pb-6" ref={pdfRef}>
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