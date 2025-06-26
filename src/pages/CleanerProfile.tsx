
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Shield, 
  Calendar, 
  MessageCircle, 
  Clock,
  CheckCircle,
  Heart,
  Share,
  ArrowLeft,
  Phone,
  Video
} from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CleanerProfile = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock data - in real app, fetch based on ID
  const cleaner = {
    id: '1',
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c0763a57?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    reviewCount: 127,
    location: 'Downtown',
    hourlyRate: 35,
    specialties: ['Deep Cleaning', 'Eco-Friendly', 'Pet-Friendly', 'Move-in/Move-out', 'Window Cleaning'],
    isVerified: true,
    availability: 'Available today',
    experience: '5+ years',
    description: "Hi! I'm Sarah, a professional house cleaner with over 5 years of experience. I take pride in providing thorough, reliable cleaning services that leave your home spotless. I'm fully insured, background-checked, and committed to using eco-friendly products whenever possible.",
    services: [
      { name: 'Regular Cleaning', price: 35, duration: '2-3 hours' },
      { name: 'Deep Cleaning', price: 45, duration: '4-5 hours' },
      { name: 'Move-in/Move-out', price: 50, duration: '5-6 hours' },
      { name: 'Post-Construction', price: 55, duration: '6-7 hours' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Jennifer M.',
        rating: 5,
        date: '2 days ago',
        comment: 'Sarah did an amazing job! My house has never looked better. She was punctual, professional, and very thorough. Highly recommend!'
      },
      {
        id: 2,
        author: 'Mike R.',
        rating: 5,
        date: '1 week ago',
        comment: 'Excellent service! Sarah was very communicative and did exactly what we discussed. Will definitely book again.'
      },
      {
        id: 3,
        author: 'Lisa K.',
        rating: 4,
        date: '2 weeks ago',
        comment: 'Great job overall. Very reliable and trustworthy. The house was spotless when I came home.'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558618666-c5ae059577b2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1584622781564-1d987ba4c40c?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1556912167-f556f1e27c0c?w=400&h=300&fit=crop'
    ]
  };

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link 
                to="/cleaners" 
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to cleaners</span>
              </Link>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Share className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Header */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="relative">
                      <img
                        src={cleaner.image}
                        alt={cleaner.name}
                        className="w-32 h-32 rounded-xl object-cover"
                      />
                      {cleaner.isVerified && (
                        <div className="absolute -top-2 -right-2 bg-green-500 text-white p-1 rounded-full">
                          <Shield className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            {cleaner.name}
                          </h1>
                          <div className="flex items-center space-x-4 mb-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium text-gray-900">{cleaner.rating}</span>
                              <span className="text-gray-500">({cleaner.reviewCount} reviews)</span>
                            </div>
                            <Badge variant="secondary" className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{cleaner.location}</span>
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{cleaner.experience} experience</p>
                          <div className="flex flex-wrap gap-2">
                            {cleaner.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-gray-900">${cleaner.hourlyRate}</p>
                          <p className="text-sm text-gray-500">per hour</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="about" className="bg-white rounded-xl shadow-sm border border-gray-200">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About {cleaner.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{cleaner.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Verified Information</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">Background Check</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">Identity Verified</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">Insured & Bonded</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">References Checked</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="services" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Services & Pricing</h3>
                    {cleaner.services.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{service.name}</h4>
                          <p className="text-sm text-gray-600">{service.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">${service.price}/hr</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Reviews ({cleaner.reviewCount})</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-900">{cleaner.rating} average</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {cleaner.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-200 pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{review.author}</span>
                              <div className="flex">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-600">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Work Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {cleaner.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Work sample ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{cleaner.availability}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="w-4 h-4 mr-1" />
                        Video Call
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Quick Booking */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Booking</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Date
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Time
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 text-sm rounded-lg border transition-colors ${
                              selectedTime === time
                                ? 'bg-blue-50 border-blue-200 text-blue-700'
                                : 'border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      disabled={!selectedDate || !selectedTime}
                    >
                      Book for {selectedTime} on {selectedDate}
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>Have questions about this cleaner or need assistance with booking?</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CleanerProfile;
