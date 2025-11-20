import React from 'react';
import { PersonalityProfile } from '../types/personality';

interface ProfileDetailsProps {
  profile: PersonalityProfile;
}

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile }) => {
  return (
    <div className="w-full max-w-mobile mx-auto">
      {/* Description */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Votre profil de personnalité
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {profile.description}
        </p>
      </div>

      {/* Strengths */}
      {profile.strengths.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            💪 Vos forces
          </h3>
          <div className="space-y-2">
            {profile.strengths.map((strength, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-gray-700">{strength}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weaknesses */}
      {profile.weaknesses.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            🎯 Points d'amélioration
          </h3>
          <div className="space-y-2">
            {profile.weaknesses.map((weakness, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-gray-700">{weakness}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {profile.recommendations.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            💡 Recommandations
          </h3>
          <div className="space-y-3">
            {profile.recommendations.map((recommendation, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-4">
                <p className="text-gray-700 leading-relaxed">
                  {recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timestamp */}
      <div className="text-center mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Test réalisé le {profile.timestamp.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    </div>
  );
};