import jsPDF from 'jspdf';
import { BigFiveResult, PersonalityProfile } from '../types/personality';
import { bigFiveQuestions } from './mockData';
import { questionInsights } from './questionInsights';

interface PDFGeneratorOptions {
  profile: PersonalityProfile;
  result: BigFiveResult;
}

export const generatePDF = ({ profile, result }: PDFGeneratorOptions): void => {
  const doc = new jsPDF();

  let yPosition = 20;
  const lineHeight = 7;
  const pageHeight = doc.internal.pageSize.height;
  const marginBottom = 20;

  // Helper function to check if we need a new page
  const checkNewPage = (spaceNeeded: number = 10) => {
    if (yPosition + spaceNeeded > pageHeight - marginBottom) {
      doc.addPage();
      yPosition = 20;
    }
  };

  // Helper function to sanitize text for PDF (replace special characters)
  const sanitizeText = (text: string): string => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/œ/g, 'oe')
      .replace(/Œ/g, 'OE')
      .replace(/æ/g, 'ae')
      .replace(/Æ/g, 'AE')
      .replace(/[^\x00-\x7F]/g, ''); // Remove non-ASCII characters
  };

  // Helper function to add text with word wrap
  const addText = (text: string, x: number, fontSize: number = 10, isBold: boolean = false, maxWidth: number = 180) => {
    doc.setFontSize(fontSize);
    if (isBold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }

    const sanitized = sanitizeText(text);
    const lines = doc.splitTextToSize(sanitized, maxWidth);
    lines.forEach((line: string) => {
      checkNewPage();
      doc.text(line, x, yPosition);
      yPosition += lineHeight;
    });
  };

  // Title
  doc.setFillColor(59, 130, 246); // Blue color
  doc.rect(0, 0, 210, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Test de Personnalite Big Five', 105, 18, { align: 'center' });

  doc.setTextColor(0, 0, 0);
  yPosition = 40;

  // Date
  const date = new Date(profile.timestamp).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  addText(`Test realise le ${date}`, 20, 10);
  yPosition += 5;

  // === SECTION 1: SCORES ===
  checkNewPage(40);
  doc.setFillColor(240, 240, 240);
  doc.rect(15, yPosition - 5, 180, 10, 'F');
  addText('VOS SCORES', 20, 14, true);
  yPosition += 5;

  const traits = {
    'Ouverture': result.openness,
    'Conscienciosite': result.conscientiousness,
    'Extraversion': result.extraversion,
    'Agreeabilite': result.agreeableness,
    'Neuroticisme': result.neuroticism
  };

  Object.entries(traits).forEach(([traitName, score]) => {
    checkNewPage(15);

    // Trait name and score
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${traitName}:`, 20, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(`${score}%`, 170, yPosition);

    // Progress bar
    yPosition += 5;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.rect(20, yPosition - 3, 150, 4);

    // Fill based on score
    let fillColor: [number, number, number];
    if (score >= 71) {
      fillColor = [34, 197, 94]; // Green
    } else if (score >= 41) {
      fillColor = [250, 204, 21]; // Yellow
    } else {
      fillColor = [239, 68, 68]; // Red
    }

    doc.setFillColor(...fillColor);
    doc.rect(20, yPosition - 3, (score / 100) * 150, 4, 'F');

    yPosition += 10;
  });

  yPosition += 5;

  // === SECTION 2: FORCES ===
  if (profile.strengths && profile.strengths.length > 0) {
    checkNewPage(30);
    doc.setFillColor(240, 240, 240);
    doc.rect(15, yPosition - 5, 180, 10, 'F');
    addText('VOS FORCES', 20, 14, true);
    yPosition += 3;

    profile.strengths.forEach((strength) => {
      checkNewPage();
      addText(`- ${strength}`, 25, 11);
    });
    yPosition += 3;
  }

  // === SECTION 3: POINTS D'AMÉLIORATION ===
  if (profile.weaknesses && profile.weaknesses.length > 0) {
    checkNewPage(30);
    doc.setFillColor(240, 240, 240);
    doc.rect(15, yPosition - 5, 180, 10, 'F');
    addText('POINTS D\'AMELIORATION', 20, 14, true);
    yPosition += 3;

    profile.weaknesses.forEach((weakness) => {
      checkNewPage();
      addText(`- ${weakness}`, 25, 11);
    });
    yPosition += 3;
  }

  // === SECTION 4: RECOMMANDATIONS ===
  if (profile.recommendations && profile.recommendations.length > 0) {
    checkNewPage(30);
    doc.setFillColor(240, 240, 240);
    doc.rect(15, yPosition - 5, 180, 10, 'F');
    addText('RECOMMANDATIONS', 20, 14, true);
    yPosition += 3;

    profile.recommendations.forEach((recommendation) => {
      checkNewPage(15);
      addText(`- ${recommendation}`, 25, 11);
    });
    yPosition += 3;
  }

  // === SECTION 5: QUESTIONS ET RÉPONSES ===
  checkNewPage(30);
  doc.addPage();
  yPosition = 20;

  doc.setFillColor(240, 240, 240);
  doc.rect(15, yPosition - 5, 180, 10, 'F');
  addText('VOS REPONSES DETAILLEES', 20, 14, true);
  yPosition += 10;

  bigFiveQuestions.forEach((question, index) => {
    const answer = profile.answers.find(a => a.questionId === question.id);

    if (answer) {
      checkNewPage(50); // More space needed for insights

      // Question number and text
      addText(`Question ${index + 1}:`, 20, 11, true);
      addText(question.text, 20, 10, false, 170);

      // Answer
      const selectedOption = question.options.find(opt => opt.id === answer.selectedOptionId);
      if (selectedOption) {
        doc.setTextColor(59, 130, 246);
        addText(`Reponse: ${selectedOption.text}`, 25, 10);
        doc.setTextColor(0, 0, 0);
      }

      // Add insights (meaning and improvement tips)
      const insight = questionInsights[question.id];
      if (insight) {
        yPosition += 2;

        // Meaning
        doc.setTextColor(100, 100, 100);
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        addText(`Signification: ${insight.meaning}`, 25, 9);

        // Improvement tip based on answer score
        let improvementText = '';
        if (answer.score <= 2) {
          improvementText = insight.improvements.low;
        } else if (answer.score === 3) {
          improvementText = insight.improvements.medium;
        } else {
          improvementText = insight.improvements.high;
        }

        doc.setTextColor(34, 139, 34);
        addText(`Conseil: ${improvementText}`, 25, 9);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');
      }

      yPosition += 3;
    }
  });

  // === FOOTER CREDITS ===
  checkNewPage(40);
  yPosition += 10;

  // Thank you message and credits
  doc.setFillColor(59, 130, 246);
  doc.rect(15, yPosition - 5, 180, 35, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Merci pour l\'utilisation de notre application', 105, yPosition + 5, { align: 'center' });

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Realise par le Groupe 3:', 105, yPosition + 13, { align: 'center' });
  doc.text('Gourri Abdellatif - Oussama Friha - Said Toumi - Mohammed', 105, yPosition + 19, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.text('2025/2026', 105, yPosition + 26, { align: 'center' });

  doc.setTextColor(0, 0, 0);

  // Footer on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Page ${i} sur ${totalPages}`,
      105,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // Generate filename with date
  const fileName = `big-five-personality-${new Date().toISOString().split('T')[0]}.pdf`;

  // Open in new tab and download
  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);

  // Open in new tab
  window.open(pdfUrl, '_blank');

  // Download the file
  doc.save(fileName);

  // Cleanup
  setTimeout(() => URL.revokeObjectURL(pdfUrl), 100);
};
