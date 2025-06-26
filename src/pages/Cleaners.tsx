
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import Layout from '../components/Layout';
import CleanerCard from '../components/CleanerCard';
import FilterSidebar from '../components/FilterSidebar';

const Cleaners = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    priceRange: [15, 100] as [number, number],
    serviceTypes: [] as string[],
    rating: 0,
    location: '',
    availability: [] as string[]
  });

  const cleaners = [
    {
      id: '1',
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763a57?w=400&h=300&fit=crop&crop=face',
      rating: 4.9,
      reviewCount: 127,
      location: 'Downtown',
      hourlyRate: 35,
      specialties: ['Deep Cleaning', 'Eco-Friendly', 'Pet-Friendly'],
      isVerified: true,
      availability: 'Available today',
      experience: '5+ years'
    },
    {
      id: '2',
      name: 'Maria Rodriguez',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face',
      rating: 4.8,
      reviewCount: 89,
      location: 'Midtown',
      hourlyRate: 30,
      specialties: ['Regular Cleaning', 'Move-in/Move-out', 'Organization'],
      isVerified: true,
      availability: 'Available tomorrow',
      experience: '3+ years'
    },
    {
      id: '3',
      name: 'Jennifer Chen',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face',
      rating: 4.9,
      reviewCount: 156,
      location: 'Uptown',
      hourlyRate: 40,
      specialties: ['Commercial Cleaning', 'Post-Construction', 'Deep Cleaning'],
      isVerified: true,
      availability: 'Available this week',
      experience: '7+ years'
    },
    {
      id: '4',
      name: 'Amanda Williams',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face',
      rating: 4.7,
      reviewCount: 73,
      location: 'Westside',
      hourlyRate: 28,
      specialties: ['Regular Cleaning', 'Window Cleaning', 'Eco-Friendly'],
      isVerified: true,
      availability: 'Available today',
      experience: '2+ years'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop&crop=face',
      rating: 4.8,
      reviewCount: 104,
      location: 'Eastside',
      hourlyRate: 32,
      specialties: ['Deep Cleaning', 'Move-in/Move-out', 'Pet-Friendly'],
      isVerified: true,
      availability: 'Available tomorrow',
      experience: '4+ years'
    },
    {
      id: '6',
      name: 'Michael Davis',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face',
      rating: 4.9,
      reviewCount: 142,
      location: 'Downtown',
      hourlyRate: 45,
      specialties: ['Commercial Cleaning', 'Post-Construction', 'Deep Cleaning'],
      isVerified: true,
      availability: 'Available this week',
      experience: '8+ years'
    }
  ];

  const filteredCleaners = cleaners.filter(cleaner => {
    const matchesSearch = cleaner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cleaner.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cleaner.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesPrice = cleaner.hourlyRate >= filters.priceRange[0] && cleaner.hourlyRate <= filters.priceRange[1];
    const matchesRating = cleaner.rating >= filters.rating;
    const matchesLocation = !filters.location || cleaner.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesServices = filters.serviceTypes.length === 0 || 
                           filters.serviceTypes.some(service => cleaner.specialties.includes(service));

    return matchesSearch && matchesPrice && matchesRating && matchesLocation && matchesServices;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Find House Cleaners</h1>
                <p className="text-gray-600 mt-1">
                  {filteredCleaners.length} cleaners available in your area
                </p>
              </div>
              
              {/* Search and View Controls */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-1 lg:w-80">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, location, or service..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <FilterSidebar filters={filters} onFiltersChange={setFilters} />
            </div>

            {/* Results */}
            <div className="flex-1">
              {filteredCleaners.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No cleaners found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search criteria to find more cleaners.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setFilters({
                        priceRange: [15, 100],
                        serviceTypes: [],
                        rating: 0,
                        location: '',
                        availability: []
                      });
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {filteredCleaners.map((cleaner) => (
                    <CleanerCard key={cleaner.id} cleaner={cleaner} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cleaners;
