export interface Question {
  id: string;
  text: string;
  options: Option[];
  trait: BigFiveTrait;
}

export interface Option {
  id: string;
  text: string;
  score: number; // 1-5 (Likert scale)
}

export interface Answer {
  questionId: string;
  selectedOptionId: string;
  score: number;
}

export interface BigFiveResult {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface PersonalityProfile {
  result: BigFiveResult;
  answers: Answer[];
  timestamp: Date;
  description: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

export type BigFiveTrait = 'openness' | 'conscientiousness' | 'extraversion' | 'agreeableness' | 'neuroticism';

export interface TraitDescription {
  name: string;
  description: string;
  traits: string[];
  highScore: string;
  lowScore: string;
}