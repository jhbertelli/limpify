
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Star, MapPin } from 'lucide-react';

interface FilterSidebarProps {
  filters: {
    priceRange: [number, number];
    serviceTypes: string[];
    rating: number;
    location: string;
    availability: string[];
  };
  onFiltersChange: (filters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFiltersChange }) => {
  const serviceTypes = [
    'Regular Cleaning',
    'Deep Cleaning',
    'Move-in/Move-out',
    'Commercial Cleaning',
    'Post-Construction',
    'Window Cleaning',
    'Carpet Cleaning',
    'Organizing'
  ];

  const availabilityOptions = [
    'Available Today',
    'Available This Week',
    'Weekends Only',
    'Flexible Schedule'
  ];

  const updateFilters = (key: string, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Filters</h3>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Price Range (per hour)
        </label>
        <div className="space-y-3">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => updateFilters('priceRange', value)}
            max={100}
            min={15}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Minimum Rating
        </label>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <label key={rating} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={filters.rating === rating}
                onChange={(e) => updateFilters('rating', parseFloat(e.target.value))}
                className="text-blue-600"
              />
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-700">{rating}+ stars</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Service Types */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Service Types
        </label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {serviceTypes.map((service) => (
            <label key={service} className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                checked={filters.serviceTypes.includes(service)}
                onCheckedChange={(checked) => {
                  const newServiceTypes = checked
                    ? [...filters.serviceTypes, service]
                    : filters.serviceTypes.filter(s => s !== service);
                  updateFilters('serviceTypes', newServiceTypes);
                }}
              />
              <span className="text-sm text-gray-700">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Enter zip code or city"
            value={filters.location}
            onChange={(e) => updateFilters('location', e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Availability */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Availability
        </label>
        <div className="space-y-2">
          {availabilityOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                checked={filters.availability.includes(option)}
                onCheckedChange={(checked) => {
                  const newAvailability = checked
                    ? [...filters.availability, option]
                    : filters.availability.filter(a => a !== option);
                  updateFilters('availability', newAvailability);
                }}
              />
              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => onFiltersChange({
          priceRange: [15, 100],
          serviceTypes: [],
          rating: 0,
          location: '',
          availability: []
        })}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
