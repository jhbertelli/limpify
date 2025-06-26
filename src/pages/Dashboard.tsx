
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Star, MessageCircle, Plus, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingBookings = [
    {
      id: '1',
      cleaner: {
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1494790108755-2616c0763a57?w=100&h=100&fit=crop&crop=face',
        rating: 4.9
      },
      date: '2024-01-15',
      time: '10:00 AM',
      duration: '3 hours',
      service: 'Deep Cleaning',
      address: '123 Main St, Downtown',
      status: 'confirmed',
      price: 105
    },
    {
      id: '2',
      cleaner: {
        name: 'Maria Rodriguez',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        rating: 4.8
      },
      date: '2024-01-18',
      time: '2:00 PM',
      duration: '2 hours',
      service: 'Regular Cleaning',
      address: '456 Oak Ave, Midtown',
      status: 'pending',
      price: 60
    }
  ];

  const pastBookings = [
    {
      id: '3',
      cleaner: {
        name: 'Jennifer Chen',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
        rating: 4.9
      },
      date: '2024-01-10',
      time: '9:00 AM',
      duration: '4 hours',
      service: 'Move-out Cleaning',
      address: '789 Pine St, Uptown',
      status: 'completed',
      price: 200,
      review: {
        rating: 5,
        comment: 'Excellent work! Very thorough and professional.'
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      confirmed: { variant: 'default' as const, label: 'Confirmed' },
      pending: { variant: 'secondary' as const, label: 'Pending' },
      completed: { variant: 'outline' as const, label: 'Completed' },
      cancelled: { variant: 'destructive' as const, label: 'Cancelled' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const BookingCard = ({ booking, showActions = true }: { booking: any; showActions?: boolean }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-start space-x-4">
        <img
          src={booking.cleaner.image}
          alt={booking.cleaner.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {booking.cleaner.name}
              </h3>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-gray-600">{booking.cleaner.rating}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-900">${booking.price}</p>
              {getStatusBadge(booking.status)}
            </div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(booking.date).toLocaleDateString()} at {booking.time}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              <span>{booking.service} • {booking.duration}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{booking.address}</span>
            </div>
          </div>
          
          {booking.review && (
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-1 mb-1">
                <span className="text-sm font-medium text-gray-900">Your Review:</span>
                <div className="flex">
                  {[...Array(booking.review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">{booking.review.comment}</p>
            </div>
          )}
          
          {showActions && (
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-1" />
                Message
              </Button>
              {booking.status === 'confirmed' && (
                <>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                  <Button variant="outline" size="sm">
                    Cancel
                  </Button>
                </>
              )}
              {booking.status === 'completed' && !booking.review && (
                <Button size="sm">
                  Leave Review
                </Button>
              )}
              {booking.status === 'completed' && (
                <Button variant="outline" size="sm">
                  Book Again
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
                <p className="text-gray-600 mt-1">Manage your cleaning bookings and preferences</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Book New Cleaning
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Upcoming</p>
                  <p className="text-2xl font-bold text-gray-900">{upcomingBookings.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{pastBookings.length}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                  <p className="text-2xl font-bold text-gray-900">4.9</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Messages</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bookings */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Bookings</TabsTrigger>
                <TabsTrigger value="past">Past Bookings</TabsTrigger>
              </TabsList>
              
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            <TabsContent value="upcoming" className="space-y-6">
              {upcomingBookings.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No upcoming bookings</h3>
                  <p className="text-gray-600 mb-6">Book your next cleaning service to get started.</p>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-6">
              {pastBookings.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                  <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No past bookings</h3>
                  <p className="text-gray-600">Your completed bookings will appear here.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
