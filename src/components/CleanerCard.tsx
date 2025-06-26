
import React from 'react';
import { Star, MapPin, Shield, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CleanerCardProps {
  cleaner: {
    id: string;
    name: string;
    image: string;
    rating: number;
    reviewCount: number;
    location: string;
    hourlyRate: number;
    specialties: string[];
    isVerified: boolean;
    availability: string;
    experience: string;
  };
}

const CleanerCard: React.FC<CleanerCardProps> = ({ cleaner }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Header with Image and Basic Info */}
      <div className="relative">
        <img
          src={cleaner.image}
          alt={cleaner.name}
          className="w-full h-48 object-cover"
        />
        {cleaner.isVerified && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Shield className="w-3 h-3" />
            <span>Verificada</span>
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Name and Rating */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {cleaner.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-900">
                {cleaner.rating}
              </span>
              <span className="text-sm text-gray-500">
                ({cleaner.reviewCount} avaliações)
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">
              R$ {cleaner.hourlyRate}
            </p>
            <p className="text-sm text-gray-500">por hora</p>
          </div>
        </div>

        {/* Location and Experience */}
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="mr-4">{cleaner.location}</span>
          <span className="text-gray-400">•</span>
          <span className="ml-4">{cleaner.experience}</span>
        </div>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {cleaner.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-50 text-[#243c28] text-xs rounded-full font-medium"
              >
                {specialty}
              </span>
            ))}
            {cleaner.specialties.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                +{cleaner.specialties.length - 3} mais
              </span>
            )}
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{cleaner.availability}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Link
            to={`/cleaner/${cleaner.id}`}
            className="flex-1 bg-[#243c28] text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#1a2a1c] transition-colors"
          >
            Ver Perfil
          </Link>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <MessageCircle className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CleanerCard;
