
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
    image: 'https://images.pexels.com/photos/3768910/pexels-photo-3768910.jpeg?w=400&h=300',
    rating: 4.9,
    reviewCount: 127,
    location: 'Centro',
    hourlyRate: 35,
    specialties: ['Limpeza Pesada', 'Eco-Friendly', 'Pet-Friendly', 'Mudança', 'Limpeza de Vidros'],
    isVerified: true,
    availability: 'Disponível hoje',
    experience: '5+ anos',
    description: "Oi! Sou a Sarah, uma diarista profissional com mais de 5 anos de experiência. Tenho orgulho de fornecer serviços de limpeza minuciosos e confiáveis que deixam sua casa impecável. Sou totalmente segurada, com antecedentes verificados e comprometida em usar produtos eco-friendly sempre que possível.",
    services: [
      { name: 'Limpeza Regular', price: 35, duration: '2-3 horas' },
      { name: 'Limpeza Pesada', price: 45, duration: '4-5 horas' },
      { name: 'Mudança', price: 50, duration: '5-6 horas' },
      { name: 'Pós-Obra', price: 55, duration: '6-7 horas' }
    ],
    reviews: [
      {
        id: 1,
        author: 'Jennifer M.',
        rating: 5,
        date: '2 dias atrás',
        comment: 'Sarah fez um trabalho incrível! Minha casa nunca esteve tão limpa. Ela foi pontual, profissional e muito minuciosa. Recomendo muito!'
      },
      {
        id: 2,
        author: 'Mike R.',
        rating: 5,
        date: '1 semana atrás',
        comment: 'Excelente serviço! Sarah foi muito comunicativa e fez exatamente o que discutimos. Definitivamente vou agendar novamente.'
      },
      {
        id: 3,
        author: 'Lisa K.',
        rating: 4,
        date: '2 semanas atrás',
        comment: 'Ótimo trabalho no geral. Muito confiável e de confiança. A casa estava impecável quando cheguei em casa.'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?w=400',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?w=400',
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?w=400'
    ]
  };

  const availableTimes = [
    '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
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
                className="flex items-center space-x-2 text-gray-600 hover:text-[#243c28] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar para diaristas</span>
              </Link>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-[#243c28] transition-colors">
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
                              <span className="text-gray-500">({cleaner.reviewCount} avaliações)</span>
                            </div>
                            <Badge variant="secondary" className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3" />
                              <span>{cleaner.location}</span>
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-4">{cleaner.experience} de experiência</p>
                          <div className="flex flex-wrap gap-2">
                            {cleaner.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-gray-900">R$ {cleaner.hourlyRate}</p>
                          <p className="text-sm text-gray-500">por hora</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="about" className="bg-white rounded-xl shadow-sm border border-gray-200">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="about">Sobre</TabsTrigger>
                  <TabsTrigger value="services">Serviços</TabsTrigger>
                  <TabsTrigger value="reviews">Avaliações</TabsTrigger>
                  <TabsTrigger value="gallery">Galeria</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Sobre {cleaner.name}</h3>
                      <p className="text-gray-600 leading-relaxed">{cleaner.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Informações Verificadas</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">Antecedentes Verificados</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">Identidade Verificada</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">Segurada e Garantida</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-gray-700">Referências Verificadas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="services" className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Serviços e Preços</h3>
                    {cleaner.services.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{service.name}</h4>
                          <p className="text-sm text-gray-600">{service.duration}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-900">R$ {service.price}/h</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Avaliações ({cleaner.reviewCount})</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-gray-900">{cleaner.rating} média</span>
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
                    <h3 className="text-lg font-semibold text-gray-900">Galeria de Trabalhos</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {cleaner.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Exemplo de trabalho ${index + 1}`}
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
                      Agendar Agora
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="w-4 h-4 mr-1" />
                        Vídeo
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Quick Booking */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Agendamento Rápido</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Selecionar Data
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#243c28] focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Selecionar Horário
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 text-sm rounded-lg border transition-colors ${
                              selectedTime === time
                                ? 'bg-green-50 border-green-200 text-[#243c28]'
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
                      Agendar {(selectedDate && selectedTime) && `para ${new Date(selectedDate).toLocaleDateString()} às ${selectedTime}`}
                    </Button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Precisa de Ajuda?</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>Tem dúvidas sobre esta diarista ou precisa de ajuda com o agendamento?</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Contatar Suporte
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
