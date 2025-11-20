import React from 'react';
import { Option } from '../types/personality';
import { cn } from '../utils/cn';

interface OptionButtonProps {
  option: Option;
  isSelected: boolean;
  onClick: () => void;
}

export const OptionButton: React.FC<OptionButtonProps> = ({ option, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-2xl border-2 transition-all duration-200",
        "min-h-touch flex items-center justify-start",
        "text-left font-medium",
        "active:scale-95 active:shadow-md",
        isSelected
          ? "bg-blue-50 border-blue-500 text-blue-700 shadow-md"
          : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
      )}
    >
      <div className="flex items-center space-x-3 w-full">
        <div className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center",
          isSelected ? "border-blue-500 bg-blue-500" : "border-gray-300"
        )}>
          {isSelected && (
            <div className="w-2 h-2 rounded-full bg-white" />
          )}
        </div>
        <span className="flex-1">{option.text}</span>
      </div>
    </button>
  );
};