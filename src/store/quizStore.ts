import { create } from 'zustand';
import { Answer, BigFiveResult, PersonalityProfile } from '../types/personality';
import { bigFiveQuestions } from '../utils/mockData';

interface QuizStore {
  // Current quiz state
  currentQuestionIndex: number;
  answers: Answer[];
  isCompleted: boolean;

  // Results
  result: BigFiveResult | null;
  profile: PersonalityProfile | null;

  // Actions
  selectAnswer: (questionId: string, optionId: string, score: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  completeQuiz: () => void;
  resetQuiz: () => void;

  // Getters
  getCurrentQuestion: () => typeof bigFiveQuestions[0] | null;
  getProgress: () => number;
  isLastQuestion: () => boolean;
  getAnsweredCount: () => number;
  getTraitScore: (trait: keyof BigFiveResult) => number;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  // Initial state
  currentQuestionIndex: 0,
  answers: [],
  isCompleted: false,
  result: null,
  profile: null,

  // Actions
  selectAnswer: (questionId: string, optionId: string, score: number) => {
    set((state) => {
      const existingAnswerIndex = state.answers.findIndex(a => a.questionId === questionId);

      const newAnswer: Answer = {
        questionId,
        selectedOptionId: optionId,
        score
      };

      if (existingAnswerIndex >= 0) {
        // Update existing answer
        const newAnswers = [...state.answers];
        newAnswers[existingAnswerIndex] = newAnswer;
        return { answers: newAnswers };
      } else {
        // Add new answer
        return { answers: [...state.answers, newAnswer] };
      }
    });
  },

  nextQuestion: () => {
    const state = get();
    if (state.currentQuestionIndex < bigFiveQuestions.length - 1) {
      set({ currentQuestionIndex: state.currentQuestionIndex + 1 });
    }
  },

  previousQuestion: () => {
    const state = get();
    if (state.currentQuestionIndex > 0) {
      set({ currentQuestionIndex: state.currentQuestionIndex - 1 });
    }
  },

  goToQuestion: (index: number) => {
    if (index >= 0 && index < bigFiveQuestions.length) {
      set({ currentQuestionIndex: index });
    }
  },

  completeQuiz: () => {
    const state = get();
    const result = calculateBigFiveResult(state.answers);
    const profile = generatePersonalityProfile(result, state.answers);

    set({
      isCompleted: true,
      result,
      profile
    });
  },

  resetQuiz: () => {
    set({
      currentQuestionIndex: 0,
      answers: [],
      isCompleted: false,
      result: null,
      profile: null
    });
  },

  // Getters
  getCurrentQuestion: () => {
    const state = get();
    return bigFiveQuestions[state.currentQuestionIndex] || null;
  },

  getProgress: () => {
    const state = get();
    return (state.currentQuestionIndex + 1) / bigFiveQuestions.length;
  },

  isLastQuestion: () => {
    const state = get();
    return state.currentQuestionIndex === bigFiveQuestions.length - 1;
  },

  getAnsweredCount: () => {
    const state = get();
    return state.answers.length;
  },

  getTraitScore: (trait: keyof BigFiveResult) => {
    const state = get();
    const traitQuestions = bigFiveQuestions.filter(q => q.trait === trait);
    const traitAnswers = state.answers.filter(a =>
      traitQuestions.some(q => q.id === a.questionId)
    );

    if (traitAnswers.length === 0) return 0;

    const totalScore = traitAnswers.reduce((sum, answer) => sum + answer.score, 0);
    return Math.round(totalScore / traitAnswers.length * 20); // Convert to 0-100 scale
  }
}));

// Helper functions
function calculateBigFiveResult(answers: Answer[]): BigFiveResult {
  const traits: BigFiveResult = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
  };

  const traitQuestions: Record<string, string[]> = {
    openness: bigFiveQuestions.filter(q => q.trait === 'openness').map(q => q.id),
    conscientiousness: bigFiveQuestions.filter(q => q.trait === 'conscientiousness').map(q => q.id),
    extraversion: bigFiveQuestions.filter(q => q.trait === 'extraversion').map(q => q.id),
    agreeableness: bigFiveQuestions.filter(q => q.trait === 'agreeableness').map(q => q.id),
    neuroticism: bigFiveQuestions.filter(q => q.trait === 'neuroticism').map(q => q.id)
  };

  // Calculate scores for each trait
  Object.keys(traits).forEach(trait => {
    const questionIds = traitQuestions[trait];
    const traitAnswers = answers.filter(a => questionIds.includes(a.questionId));

    if (traitAnswers.length > 0) {
      const averageScore = traitAnswers.reduce((sum, answer) => sum + answer.score, 0) / traitAnswers.length;
      traits[trait as keyof BigFiveResult] = Math.round(averageScore * 20); // Convert 1-5 scale to 0-100
    }
  });

  return traits;
}

function generatePersonalityProfile(result: BigFiveResult, answers: Answer[]): PersonalityProfile {
  const descriptions = generateDescriptions(result);
  const strengths = identifyStrengths(result);
  const weaknesses = identifyWeaknesses(result);
  const recommendations = generateRecommendations(result);

  return {
    result,
    answers,
    timestamp: new Date(),
    description: descriptions.main,
    strengths,
    weaknesses,
    recommendations
  };
}

function generateDescriptions(result: BigFiveResult): { main: string } {
  const { openness, conscientiousness, extraversion, agreeableness, neuroticism } = result;

  let description = "Vous êtes une personne avec un profil de personnalité unique. ";

  if (openness > 70) {
    description += "Votre ouverture d'esprit élevée vous rend créatif et curieux. ";
  }

  if (conscientiousness > 70) {
    description += "Votre conscienciosité élevée vous rend organisé et fiable. ";
  }

  if (extraversion > 70) {
    description += "Votre extraversion élevée vous rend sociable et énergique. ";
  } else if (extraversion < 30) {
    description += "Votre introversion élevée vous rend observateur et réfléchissant. ";
  }

  if (agreeableness > 70) {
    description += "Votre agréabilité élevée vous rend coopératif et compatissant. ";
  }

  if (neuroticism < 30) {
    description += "Votre stabilité émotionnelle vous aide à bien gérer le stress.";
  } else if (neuroticism > 70) {
    description += "Vous êtes sensible émotionnellement et pouvez ressentir intensément les situations.";
  }

  return { main: description };
}

function identifyStrengths(result: BigFiveResult): string[] {
  const strengths: string[] = [];
  const { openness, conscientiousness, extraversion, agreeableness, neuroticism } = result;

  if (openness > 60) strengths.push("Créativité et imagination");
  if (conscientiousness > 60) strengths.push("Organisation et fiabilité");
  if (extraversion > 60) strengths.push("Leadership et sociabilité");
  if (agreeableness > 60) strengths.push("Empathie et coopération");
  if (neuroticism < 40) strengths.push("Stabilité émotionnelle");

  return strengths;
}

function identifyWeaknesses(result: BigFiveResult): string[] {
  const weaknesses: string[] = [];
  const { openness, conscientiousness, extraversion, agreeableness, neuroticism } = result;

  if (openness < 40) weaknesses.push("Préférence pour la tradition");
  if (conscientiousness < 40) weaknesses.push("Manque d'organisation");
  if (extraversion < 40) weaknesses.push("Manque de confiance sociale");
  if (agreeableness < 40) weaknesses.push("Tendance à la critique");
  if (neuroticism > 60) weaknesses.push("Sensibilité au stress");

  return weaknesses;
}

function generateRecommendations(result: BigFiveResult): string[] {
  const recommendations: string[] = [];
  const { openness, conscientiousness, extraversion, agreeableness, neuroticism } = result;

  if (openness < 40) recommendations.push("Essayez de nouvelles activités pour développer votre ouverture d'esprit");
  if (conscientiousness < 40) recommendations.push("Utilisez des outils d'organisation pour améliorer votre productivité");
  if (extraversion < 40) recommendations.push("Pratiquez les interactions sociales dans de petits groupes");
  if (agreeableness < 40) recommendations.push("Développez votre empathie en écoutant activement les autres");
  if (neuroticism > 60) recommendations.push("Apprenez des techniques de gestion du stress et de relaxation");

  return recommendations;
}