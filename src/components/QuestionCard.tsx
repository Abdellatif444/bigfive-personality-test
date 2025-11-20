import React from 'react';
import { Question } from '../types/personality';
import { OptionButton } from './OptionButton';
import { cn } from '../utils/cn';

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: string;
  onOptionSelect: (optionId: string, score: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOptionId,
  onOptionSelect,
  questionNumber,
  totalQuestions
}) => {
  return (
    <div className="w-full max-w-mobile mx-auto">
      {/* Question Header */}
      <div className="mb-6 text-center">
        <div className="text-sm font-medium text-blue-600 mb-2">
          Question {questionNumber} sur {totalQuestions}
        </div>
        <h2 className="text-xl font-semibold text-gray-900 leading-relaxed">
          {question.text}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => (
          <OptionButton
            key={option.id}
            option={option}
            isSelected={selectedOptionId === option.id}
            onClick={() => onOptionSelect(option.id, option.score)}
          />
        ))}
      </div>
    </div>
  );
};