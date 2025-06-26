
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Star, Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import CleanerCard from '../components/CleanerCard';

const Index = () => {
  const featuredCleaners = [
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
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Cleaners',
      description: 'All cleaners undergo background checks and verification process'
    },
    {
      icon: Star,
      title: 'Highly Rated',
      description: 'Choose from top-rated cleaners with excellent reviews'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Book instantly or schedule for later with easy rescheduling'
    },
    {
      icon: MessageCircle,
      title: 'Direct Communication',
      description: 'Chat directly with cleaners before and during service'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Trusted
              <span className="text-blue-600 block">House Cleaners</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with verified, reliable house cleaners for residential and commercial cleaning services. Book instantly or schedule for later.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-xl shadow-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your zip code or city"
                    className="w-full pl-10 pr-4 py-3 border-0 focus:ring-0 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <Link
                  to="/cleaners"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Find Cleaners
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>500+ Verified Cleaners</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>50,000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>4.8★ Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CleanHire?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make it easy to find reliable, professional house cleaners who meet your specific needs and standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cleaners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Cleaners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our top-rated, verified house cleaners ready to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCleaners.map((cleaner) => (
              <CleanerCard key={cleaner.id} cleaner={cleaner} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/cleaners"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Cleaners</span>
              <Search className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get your home cleaned in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Search & Compare
              </h3>
              <p className="text-gray-600">
                Browse verified cleaners in your area, compare rates, and read reviews from other customers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chat & Book
              </h3>
              <p className="text-gray-600">
                Message cleaners directly to discuss your needs, then book instantly or schedule for later.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Relax & Enjoy
              </h3>
              <p className="text-gray-600">
                Your cleaner arrives on time and gets to work. You can track progress and rate your experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust CleanHire for their cleaning needs.
          </p>
          <Link
            to="/cleaners"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 text-lg"
          >
            <span>Find Your Cleaner Today</span>
            <Search className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
