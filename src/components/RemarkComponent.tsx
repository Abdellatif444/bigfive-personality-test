import React from 'react';
import { BigFiveResult } from '../types/personality';
import { generateTraitRemark } from '../utils/remarksRules';
import { useQuizStore } from '../store/quizStore';
import { X, Lightbulb, Target, TrendingUp } from 'lucide-react';

interface RemarkComponentProps {
  trait: keyof BigFiveResult;
  score: number;
  onClose: () => void;
}

export const RemarkComponent: React.FC<RemarkComponentProps> = ({ trait, score, onClose }) => {
  const answers = useQuizStore(state => state.answers);
  const remark = generateTraitRemark(trait, score, answers);

  const traitNames = {
    openness: 'Ouverture',
    conscientiousness: 'Conscienciosité',
    extraversion: 'Extraversion',
    agreeableness: 'Agréabilité',
    neuroticism: 'Neuroticisme'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {traitNames[trait]}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <div className="mb-4">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              {remark.title}
            </h4>
            <div className="text-3xl font-bold text-blue-600">
              {score}%
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              {remark.description}
            </p>
          </div>

          {/* Strengths */}
          {remark.strengths && remark.strengths.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <h5 className="font-semibold text-gray-900">Vos forces</h5>
              </div>
              <div className="space-y-2">
                {remark.strengths.map((strength, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Improvements */}
          {remark.improvements && remark.improvements.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-5 h-5 text-orange-500" />
                <h5 className="font-semibold text-gray-900">Points d'amélioration</h5>
              </div>
              <div className="space-y-2">
                {remark.improvements.map((improvement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm text-gray-700">{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tips */}
          {remark.tips && remark.tips.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Lightbulb className="w-5 h-5 text-blue-500" />
                <h5 className="font-semibold text-gray-900">Conseils pratiques</h5>
              </div>
              <div className="space-y-3">
                {remark.tips.map((tip, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};