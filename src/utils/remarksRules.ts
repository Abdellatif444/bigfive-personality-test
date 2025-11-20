import { Answer, BigFiveResult } from '../types/personality';
import { bigFiveQuestions } from './mockData';

interface TraitRemark {
  title: string;
  description: string;
  strengths?: string[];
  improvements?: string[];
  tips?: string[];
}

export function generateTraitRemark(
  trait: keyof BigFiveResult,
  score: number,
  answers: Answer[]
): TraitRemark {
  const traitQuestions = bigFiveQuestions.filter(q => q.trait === trait);
  const traitAnswers = answers.filter(a =>
    traitQuestions.some(q => q.id === a.questionId)
  );

  // Calculer les tendances spécifiques
  const averageScore = traitAnswers.length > 0
    ? traitAnswers.reduce((sum, answer) => sum + answer.score, 0) / traitAnswers.length
    : 0;

  const highAnswers = traitAnswers.filter(a => a.score >= 4);
  const lowAnswers = traitAnswers.filter(a => a.score <= 2);

  return {
    title: getTraitTitle(trait, score),
    description: getTraitDescription(trait, averageScore, highAnswers, lowAnswers),
    strengths: getStrengths(trait, score, traitAnswers),
    improvements: getImprovements(trait, score, traitAnswers),
    tips: getTips(trait, score, traitAnswers)
  };
}

function getTraitTitle(trait: keyof BigFiveResult, score: number): string {
  const titles = {
    openness: {
      high: 'Créatif et Innovant',
      medium: 'Équilibre entre Tradition et Innovation',
      low: 'Préférant la Stabilité'
    },
    conscientiousness: {
      high: 'Organisé et Méthodique',
      medium: 'Équilibre entre Structure et Flexibilité',
      low: 'Spontané et Flexible'
    },
    extraversion: {
      high: 'Sociable et Énergique',
      medium: 'Équilibre Social',
      low: 'Introverti et Réfléchi'
    },
    agreeableness: {
      high: 'Coopératif et Compatissant',
      medium: 'Équilibre entre Coopération et Assertivité',
      low: 'Direct et Analytique'
    },
    neuroticism: {
      high: 'Sensible et Réactif',
      medium: 'Équilibre Émotionnel',
      low: 'Stable et Confiant'
    }
  };

  if (score >= 70) return titles[trait].high;
  if (score >= 40) return titles[trait].medium;
  return titles[trait].low;
}

function getTraitDescription(
  trait: keyof BigFiveResult,
  avgScore: number,
  highAnswers: Answer[],
  lowAnswers: Answer[]
): string {
  const descriptions = {
    openness: {
      high: `Votre score élevé en ouverture (${Math.round(avgScore * 20)}%) indique que vous êtes très créatif et curieux. Vous любите les nouvelles expériences et êtes fasciné(e) par l'art et les idées complexes.`,
      medium: `Votre score moyen en ouverture (${Math.round(avgScore * 20)}%) montre un bon équilibre entre créativité et pragmatisme. Vous êtes ouvert aux nouvelles idées tout en appréciant certaines traditions.`,
      low: `Votre score faible en ouverture (${Math.round(avgScore * 20)}%) suggère que vous préférez les approches établies et les méthodes éprouvées. Vous valorisez la praticité et la stabilité.`
    },
    conscientiousness: {
      high: `Votre score élevé en conscienciosité (${Math.round(avgScore * 20)}%) indique que vous êtes très organisé(e) et discipliné(e). Vous travaillez dur pour atteindre vos objectifs et prêtez attention aux détails.`,
      medium: `Votre score moyen en conscienciosité (${Math.round(avgScore * 20)}%) montre un bon équilibre entre organisation et flexibilité. Vous êtes responsable tout en gardant une certaine spontanéité.`,
      low: `Votre score faible en conscienciosité (${Math.round(avgScore * 20)}%) suggère que vous préférez l'improvisation et l'adaptabilité. Vous worklez mieux avec flexibilité que dans des structures rigides.`
    },
    extraversion: {
      high: `Votre score élevé en extraversion (${Math.round(avgScore * 20)}%) indique que vous êtes très sociable et énergique. Vous vous épanouissez en groupe et takez facilement la parole.`,
      medium: `Votre score moyen en extraversion (${Math.round(avgScore * 20)}%) montre un équilibre entre sociabilité et moments de solitude. Vous êtes adaptable selon les situations.`,
      low: `Votre score faible en extraversion (${Math.round(avgScore * 20)}%) suggère que vous préférez les interactions plus intimes et les petits groupes. Vous êtes observateur et réflexif.`
    },
    agreeableness: {
      high: `Votre score élevé en agréabilité (${Math.round(avgScore * 20)}%) indique que vous êtes très coopératif(ve) et compatissant(e). Vous avez confiance en les intentions des autres et cherchez à les aider.`,
      medium: `Votre score moyen en agréabilité (${Math.round(avgScore * 20)}%) montre un équilibre entre coopération et assertivité. Vous pouvez être direct tout en restant respectueux.`,
      low: `Votre score faible en agréabilité (${Math.round(avgScore * 20)}%) suggère que vous êtes plus direct(e) et analytique. Vous préférez vous concentrer sur la logique plutôt que sur les émotions.`
    },
    neuroticism: {
      high: `Votre score élevé en neuroticisme (${Math.round(avgScore * 20)}%) indique que vous êtes très sensible aux stimuli émotionnels. Vous ressentez intensément les émotions, qu'elles soient positives ou négatives.`,
      medium: `Votre score moyen en neuroticisme (${Math.round(avgScore * 20)}%) montre un équilibre émotionnel sain. Vous gérez bien le stress avec quelques moments de sensibilité.`,
      low: `Votre score faible en neuroticisme (${Math.round(avgScore * 20)}%) indique que vous êtes très stable émotionnellement et confiant(e). Vous gérez bien le stress et restez calme dans les situations difficiles.`
    }
  };

  if (avgScore >= 3.5) return descriptions[trait].high;
  if (avgScore >= 2.5) return descriptions[trait].medium;
  return descriptions[trait].low;
}

function getStrengths(trait: keyof BigFiveResult, score: number, answers: Answer[]): string[] {
  if (score < 40) return []; // Pas de forces si score faible

  const strengthsMap = {
    openness: [
      'Créativité et imagination développées',
      'Curiosité et ouverture d\'esprit',
      'Capacité à voir les possibilités',
      'Amour de l\'apprentissage'
    ],
    conscientiousness: [
      'Organisation et planification',
      'Fiabilité et responsabilité',
      'Persévérance et détermination',
      'Attention aux détails'
    ],
    extraversion: [
      'Capacité de leadership',
      'Énergie et enthousiasme',
      'Facilité de communication',
      'Création de connexions'
    ],
    agreeableness: [
      'Empathie et compassion',
      'Coopération et compromis',
      'Confiance envers autrui',
      'Bonté et altruisme'
    ],
    neuroticism: [
      'Sensibilité émotionnelle',
      'Conscience de soi développée',
      'Motivation à améliorer',
      'Empathie accrue'
    ]
  };

  // Retourner 2-3 forces selon le score
  const allStrengths = strengthsMap[trait] || [];
  return allStrengths.slice(0, Math.min(3, Math.floor(score / 30) + 1));
}

function getImprovements(trait: keyof BigFiveResult, score: number, answers: Answer[]): string[] {
  if (score > 60) return []; // Pas d'améliorations si score élevé

  const improvementsMap = {
    openness: [
      'Ouvrir davantage aux nouvelles expériences',
      'Explorer différents domaines artistiques',
      'Sortir de votre zone de confort',
      'Développer votre imagination'
    ],
    conscientiousness: [
      'Améliorer votre organisation',
      'Développer plus de discipline',
      'Planifier vos tâches à l\'avance',
      'Accroître votre attention aux détails'
    ],
    extraversion: [
      'Sortir de votre zone de confort social',
      'Prendre la parole en public plus souvent',
      'Participer à plus d\'activités de groupe',
      'Développer votre confiance sociale'
    ],
    agreeableness: [
      'Développer votre empathie',
      'Améliorer votre écoute active',
      'Travailler sur la coopération',
      'Être plus patient avec autrui'
    ],
    neuroticism: [
      'Apprendre des techniques de gestion du stress',
      'Développer votre résilience',
      'Pratiquer la méditation ou relaxation',
      'Améliorer votre confiance en vous'
    ]
  };

  // Retourner 2-3 améliorations selon le score
  const allImprovements = improvementsMap[trait] || [];
  return allImprovements.slice(0, Math.min(3, Math.floor((100 - score) / 30) + 1));
}

function getTips(trait: keyof BigFiveResult, score: number, answers: Answer[]): string[] {
  const tipsMap = {
    openness: [
      'Lisez des livres dans des domaines inconnus',
      'Visitez des expositions ou musées',
      'Essayez de nouvelles activités créatives',
      'Posez des questions ouvertes dans les conversations'
    ],
    conscientiousness: [
      'Utilisez un planner ou agenda numérique',
      'Fixez-vous des objectifs SMART',
      'Créez des routines pour vos tâches importantes',
      'Passez en revue vos progrès régulièrement'
    ],
    extraversion: [
      'Rejoignez des groupes ou clubs qui vous intéressent',
      'Proposez-vous comme volontaire pour des événements',
      'Pratiquez le networking lors des和专业场合',
      'Organisez des sorties avec des amis'
    ],
    agreeableness: [
      'Pratiquez l\'écoute active sans interrupt',
      'Proposez votre aide avant qu\'on vous la demande',
      'Écrivez des notes de remerciement',
      'Participez à des activités caritatives'
    ],
    neuroticism: [
      'Tenez un journal de gratitude',
      'Pratiquez la respiration profonde',
      'Établissez des limites saines',
      'Cherchez du soutien quand vous en avez besoin'
    ]
  };

  // Retourner 2 conseils pratiques
  const allTips = tipsMap[trait] || [];
  return allTips.slice(0, 2);
}