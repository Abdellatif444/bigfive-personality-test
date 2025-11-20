import React from 'react';
import { useQuizStore } from '../store/quizStore';

export const ProgressBar: React.FC = () => {
  const progress = useQuizStore(state => state.getProgress());

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Progression
        </span>
        <span className="text-sm font-medium text-gray-700">
          {Math.round(progress * 100)}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};