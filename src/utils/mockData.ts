import { Question, TraitDescription } from '../types/personality';

export const bigFiveQuestions: Question[] = [
  // Openness (6 questions)
  {
    id: 'q1',
    text: 'J\'aime essayer de nouvelles activités et explorer de nouveaux endroits.',
    options: [
      { id: 'o1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'o2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'o3', text: 'Neutre', score: 3 },
      { id: 'o4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'o5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'openness'
  },
  {
    id: 'q2',
    text: 'Je suis facilement inspiré par l\'art, la musique ou la littérature.',
    options: [
      { id: 'o2_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'o2_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'o2_3', text: 'Neutre', score: 3 },
      { id: 'o2_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'o2_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'openness'
  },
  {
    id: 'q3',
    text: 'J\'ai une imagination très développée et j\'aime daydreamer.',
    options: [
      { id: 'o3_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'o3_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'o3_3', text: 'Neutre', score: 3 },
      { id: 'o3_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'o3_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'openness'
  },
  {
    id: 'q4',
    text: 'J\'aime apprendre de nouvelles choses, même si cela me demande du temps.',
    options: [
      { id: 'o4_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'o4_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'o4_3', text: 'Neutre', score: 3 },
      { id: 'o4_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'o4_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'openness'
  },
  {
    id: 'q5',
    text: 'Je suis intéressé(e) par des idées abstraites et complexes.',
    options: [
      { id: 'o5_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'o5_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'o5_3', text: 'Neutre', score: 3 },
      { id: 'o5_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'o5_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'openness'
  },
  {
    id: 'q6',
    text: 'J\'adore explorer différentes cultures et perspectives.',
    options: [
      { id: 'o6_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'o6_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'o6_3', text: 'Neutre', score: 3 },
      { id: 'o6_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'o6_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'openness'
  },

  // Conscientiousness (6 questions)
  {
    id: 'q7',
    text: 'Je finis toujours mes tâches à temps.',
    options: [
      { id: 'c1_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'c1_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'c1_3', text: 'Neutre', score: 3 },
      { id: 'c1_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'c1_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'conscientiousness'
  },
  {
    id: 'q8',
    text: 'Je prépare toujours un plan avant de commencer une activité importante.',
    options: [
      { id: 'c2_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'c2_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'c2_3', text: 'Neutre', score: 3 },
      { id: 'c2_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'c2_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'conscientiousness'
  },
  {
    id: 'q9',
    text: 'Je suis très organisé(e) dans ma façon de travailler.',
    options: [
      { id: 'c3_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'c3_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'c3_3', text: 'Neutre', score: 3 },
      { id: 'c3_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'c3_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'conscientiousness'
  },
  {
    id: 'q10',
    text: 'Je prête attention aux détails pour éviter les erreurs.',
    options: [
      { id: 'c4_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'c4_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'c4_3', text: 'Neutre', score: 3 },
      { id: 'c4_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'c4_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'conscientiousness'
  },
  {
    id: 'q11',
    text: 'Je suis discipliné(e) et self-discipliné(e).',
    options: [
      { id: 'c5_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'c5_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'c5_3', text: 'Neutre', score: 3 },
      { id: 'c5_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'c5_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'conscientiousness'
  },
  {
    id: 'q12',
    text: 'Je me fixe des objectifs élevés et je travaille dur pour les atteindre.',
    options: [
      { id: 'c6_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'c6_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'c6_3', text: 'Neutre', score: 3 },
      { id: 'c6_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'c6_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'conscientiousness'
  },

  // Extraversion (6 questions)
  {
    id: 'q13',
    text: 'Je me sens à l\'aise dans les groupes de personnes.',
    options: [
      { id: 'e1_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'e1_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'e1_3', text: 'Neutre', score: 3 },
      { id: 'e1_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'e1_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'extraversion'
  },
  {
    id: 'q14',
    text: 'Je prends facilement la parole dans les réunions.',
    options: [
      { id: 'e2_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'e2_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'e2_3', text: 'Neutre', score: 3 },
      { id: 'e2_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'e2_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'extraversion'
  },
  {
    id: 'q15',
    text: 'Je me sens énergique quand je suis avec d\'autres personnes.',
    options: [
      { id: 'e3_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'e3_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'e3_3', text: 'Neutre', score: 3 },
      { id: 'e3_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'e3_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'extraversion'
  },
  {
    id: 'q16',
    text: 'J\'aime être au centre d\'attention dans les fêtes.',
    options: [
      { id: 'e4_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'e4_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'e4_3', text: 'Neutre', score: 3 },
      { id: 'e4_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'e4_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'extraversion'
  },
  {
    id: 'q17',
    text: 'Je souris facilement et j\'ai le sens de l\'humour.',
    options: [
      { id: 'e5_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'e5_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'e5_3', text: 'Neutre', score: 3 },
      { id: 'e5_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'e5_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'extraversion'
  },
  {
    id: 'q18',
    text: 'Je réussis bien dans les métiers sociaux et publics.',
    options: [
      { id: 'e6_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'e6_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'e6_3', text: 'Neutre', score: 3 },
      { id: 'e6_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'e6_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'extraversion'
  },

  // Agreeableness (6 questions)
  {
    id: 'q19',
    text: 'J\'ai de la compassion et de la sympathie pour les autres.',
    options: [
      { id: 'a1_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'a1_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'a1_3', text: 'Neutre', score: 3 },
      { id: 'a1_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'a1_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'agreeableness'
  },
  {
    id: 'q20',
    text: 'Je fais confiance aux intentions des autres.',
    options: [
      { id: 'a2_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'a2_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'a2_3', text: 'Neutre', score: 3 },
      { id: 'a2_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'a2_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'agreeableness'
  },
  {
    id: 'q21',
    text: 'Je coopère facilement avec les autres.',
    options: [
      { id: 'a3_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'a3_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'a3_3', text: 'Neutre', score: 3 },
      { id: 'a3_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'a3_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'agreeableness'
  },
  {
    id: 'q22',
    text: 'Je vais facilement en aide aux autres.',
    options: [
      { id: 'a4_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'a4_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'a4_3', text: 'Neutre', score: 3 },
      { id: 'a4_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'a4_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'agreeableness'
  },
  {
    id: 'q23',
    text: 'Je suis souvent dans la lune plutôt que dans l\'action.',
    options: [
      { id: 'a5_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'a5_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'a5_3', text: 'Neutre', score: 3 },
      { id: 'a5_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'a5_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'agreeableness'
  },
  {
    id: 'q24',
    text: 'Je suis gentil(le) et plein(e) de sang-froid.',
    options: [
      { id: 'a6_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'a6_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'a6_3', text: 'Neutre', score: 3 },
      { id: 'a6_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'a6_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'agreeableness'
  },

  // Neuroticism (6 questions)
  {
    id: 'q25',
    text: 'Je me sens facilement anxieux(se) et inquiet(ète).',
    options: [
      { id: 'n1_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'n1_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'n1_3', text: 'Neutre', score: 3 },
      { id: 'n1_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'n1_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'neuroticism'
  },
  {
    id: 'q26',
    text: 'Je me sens souvent déprimé(e) ou triste.',
    options: [
      { id: 'n2_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'n2_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'n2_3', text: 'Neutre', score: 3 },
      { id: 'n2_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'n2_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'neuroticism'
  },
  {
    id: 'q27',
    text: 'Je suis facilement stressé(e) par les situations difficiles.',
    options: [
      { id: 'n3_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'n3_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'n3_3', text: 'Neutre', score: 3 },
      { id: 'n3_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'n3_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'neuroticism'
  },
  {
    id: 'q28',
    text: 'Je m\'inquiète souvent des problèmes.',
    options: [
      { id: 'n4_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'n4_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'n4_3', text: 'Neutre', score: 3 },
      { id: 'n4_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'n4_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'neuroticism'
  },
  {
    id: 'q29',
    text: 'J\'ai tendance à devenir facilement frustré(e).',
    options: [
      { id: 'n5_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'n5_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'n5_3', text: 'Neutre', score: 3 },
      { id: 'n5_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'n5_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'neuroticism'
  },
  {
    id: 'q30',
    text: 'Je suis sensible aux critiques.',
    options: [
      { id: 'n6_1', text: 'Pas du tout d\'accord', score: 1 },
      { id: 'n6_2', text: 'Plutôt pas d\'accord', score: 2 },
      { id: 'n6_3', text: 'Neutre', score: 3 },
      { id: 'n6_4', text: 'Plutôt d\'accord', score: 4 },
      { id: 'n6_5', text: 'Tout à fait d\'accord', score: 5 }
    ],
    trait: 'neuroticism'
  }
];

export const traitDescriptions: Record<string, TraitDescription> = {
  openness: {
    name: 'Ouverture',
    description: 'Mesure votre ouverture d\'esprit et votre créativité.',
    traits: ['Créativité', 'Curiosité', 'Imagination', 'Amour du changement'],
    highScore: 'Vous êtes très ouvert d\'esprit, créatif et curieux. Vous aimez les nouvelles expériences et êtes fasciné(e) par l\'art et les idées.',
    lowScore: 'Vous préférez les approches traditionnelles et les routines connues. Vous êtes plus pratique et ancré(e) dans le concret.'
  },
  conscientiousness: {
    name: 'Conscienciosité',
    description: 'Évalue votre niveau d\'organisation et de discipline.',
    traits: ['Organisation', 'Discipline', 'Responsabilité', 'Ambition'],
    highScore: 'Vous êtes très organisé(e), discipliné(e) et responsable. Vous vous fixez des objectifs élevés et travaillez dur pour les atteindre.',
    lowScore: 'Vous êtes plus flexible et spontané(e). Vous préférez une approche décontractée et ne vous fixez pas toujours des objectifs stricts.'
  },
  extraversion: {
    name: 'Extraversion',
    description: 'Indique votre niveau d\'extraversion et d\'énergie sociale.',
    traits: ['Sociabilité', 'Énergie', 'Assertivité', 'Enthousiasme'],
    highScore: 'Vous êtes très sociable et énergique. Vous vous épanouissez en groupe et takez facilement la parole.',
    lowScore: 'Vous préférez les interactions plus intimes et les petits groupes. Vous êtes plus réservré(e) et observateur(trice).'
  },
  agreeableness: {
    name: 'Agreeableness',
    description: 'Mesure votre capacité de coopération et votre confiance envers les autres.',
    traits: ['Compassion', 'Coopération', 'Confiance', 'Bonté'],
    highScore: 'Vous êtes très coopératif(ve) et compatissant(e). Vous avez confiance en les intentions des autres et cherchez à les aider.',
    lowScore: 'Vous êtes plus direct(e) et analytique. Vous préférez vous concentrer sur la logique plutôt que sur les émotions dans vos décisions.'
  },
  neuroticism: {
    name: 'Neuroticisme',
    description: 'Évalue votre stabilité émotionnelle et votre capacité de gestion du stress.',
    traits: ['Stabilité', 'Confiance en soi', 'Gestion du stress', 'Calme'],
    highScore: 'Vous êtes très sensible aux stimuli émotionnels. Vous ressentez fortement les émotions, qu\'elles soient positives ou négatives.',
    lowScore: 'Vous êtes très stable émotionnellement et confiant(e). Vous gérez bien le stress et restez calme dans les situations difficiles.'
  }
};