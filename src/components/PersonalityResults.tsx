import React, { useState } from 'react';
import { BigFiveResult } from '../types/personality';
import { traitDescriptions } from '../utils/mockData';
import { RemarkComponent } from './RemarkComponent';

interface TraitBarProps {
  trait: keyof BigFiveResult;
  score: number;
  color: string;
  onClick: () => void;
}

const TraitBar: React.FC<TraitBarProps> = ({ trait, score, color, onClick }) => {
  const description = traitDescriptions[trait];

  return (
    <div
      className="w-full mb-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-gray-300 transition-all duration-200 cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-900">{description.name}</h3>
          <span className="text-sm font-medium text-gray-600">{score}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${color}`}
            style={{ width: `${score}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {description.description}
          </p>
          <div className="ml-3 text-blue-500 text-xs font-medium">
            Cliquer pour plus de détails →
          </div>
        </div>
      </div>
    </div>
  );
};

interface PersonalityResultsProps {
  result: BigFiveResult;
}

export const PersonalityResults: React.FC<PersonalityResultsProps> = ({ result }) => {
  const [selectedTrait, setSelectedTrait] = useState<{
    trait: keyof BigFiveResult;
    score: number;
  } | null>(null);

  const traitColors = {
    openness: 'from-purple-400 to-purple-600',
    conscientiousness: 'from-blue-400 to-blue-600',
    extraversion: 'from-green-400 to-green-600',
    agreeableness: 'from-yellow-400 to-yellow-600',
    neuroticism: 'from-red-400 to-red-600'
  };

  const handleTraitClick = (trait: keyof BigFiveResult, score: number) => {
    setSelectedTrait({ trait, score });
  };

  const handleCloseRemark = () => {
    setSelectedTrait(null);
  };

  return (
    <div className="w-full max-w-mobile mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vos résultats Big Five
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Voici votre profil de personnalité basé sur vos réponses.
          <br />
          <span className="text-blue-600 font-medium">
            Cliquez sur chaque trait pour voir vos remarques personnalisées
          </span>
        </p>
      </div>

      <div className="space-y-4">
        {Object.entries(result).map(([trait, score]) => (
          <TraitBar
            key={trait}
            trait={trait as keyof BigFiveResult}
            score={score}
            color={traitColors[trait as keyof BigFiveResult]}
            onClick={() => handleTraitClick(trait as keyof BigFiveResult, score)}
          />
        ))}
      </div>

      {/* Remark Modal */}
      {selectedTrait && (
        <RemarkComponent
          trait={selectedTrait.trait}
          score={selectedTrait.score}
          onClose={handleCloseRemark}
        />
      )}
    </div>
  );
};