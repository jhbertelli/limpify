
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
      image: 'https://images.pexels.com/photos/3768910/pexels-photo-3768910.jpeg?w=400&h=300',
      rating: 4.9,
      reviewCount: 127,
      location: 'Centro',
      hourlyRate: 35,
      specialties: ['Limpeza Pesada', 'Eco-Friendly', 'Pet-Friendly'],
      isVerified: true,
      availability: 'Disponível hoje',
      experience: '5+ anos'
    },
    {
      id: '2',
      name: 'Maria Rodriguez',
      image: 'https://cdn.pixabay.com/photo/2019/04/02/18/16/cleaning-4098410_960_720.jpg',
      rating: 4.8,
      reviewCount: 89,
      location: 'Zona Sul',
      hourlyRate: 30,
      specialties: ['Limpeza Regular', 'Mudança', 'Organização'],
      isVerified: true,
      availability: 'Disponível amanhã',
      experience: '3+ anos'
    },
    {
      id: '3',
      name: 'Jennifer Chen',
      image: 'https://images.pexels.com/photos/5591967/pexels-photo-5591967.jpeg?w=400',
      rating: 4.9,
      reviewCount: 156,
      location: 'Zona Norte',
      hourlyRate: 40,
      specialties: ['Limpeza Comercial', 'Pós-Obra', 'Limpeza Pesada'],
      isVerified: true,
      availability: 'Disponível esta semana',
      experience: '7+ anos'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Faxineiras Verificadas',
      description: 'Todas as faxineiras passam por verificação de antecedentes e processo de validação'
    },
    {
      icon: Star,
      title: 'Altamente Avaliadas',
      description: 'Escolha entre faxineiras com as melhores avaliações e excelentes comentários'
    },
    {
      icon: Calendar,
      title: 'Agendamento Flexível',
      description: 'Reserve instantaneamente ou agende para depois com facilidade de reagendamento'
    },
    {
      icon: MessageCircle,
      title: 'Comunicação Direta',
      description: 'Converse diretamente com as faxineiras antes e durante o serviço'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#243c28] to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-50 mb-6">
              Encontre Faxineiras
              <span className="text-green-200 block">Confiáveis</span>
            </h1>
            <p className="text-xl text-gray-50 mb-8 max-w-3xl mx-auto">
              Conecte-se com faxineiras verificadas e confiáveis para serviços de limpeza residencial e comercial. Reserve instantaneamente ou agende para depois.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-xl shadow-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Digite seu CEP ou cidade"
                    className="w-full pl-10 pr-4 py-3 border-0 focus:ring-0 text-gray-900 placeholder-gray-500"
                  />
                </div>
                <Link
                  to="/cleaners"
                  className="bg-[#243c28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2a1c] transition-colors"
                >
                  Encontrar Faxineiras
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center space-x-8 text-sm text-gray-50">
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>500+ Faxineiras Verificadas</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>50.000+ Clientes Satisfeitos</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>4.8★ Avaliação Média</span>
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
              Por que Escolher a Limpify?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Facilitamos encontrar faxineiras confiáveis e profissionais que atendem às suas necessidades e padrões específicos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-[#243c28]" />
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
              Faxineiras em Destaque
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça algumas das nossas faxineiras mais bem avaliadas e verificadas, prontas para ajudá-lo.
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
              className="bg-[#243c28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2a1c] transition-colors inline-flex items-center space-x-2"
            >
              <span>Ver Todas as Faxineiras</span>
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
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tenha sua casa limpa em apenas alguns passos simples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#243c28] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pesquise e Compare
              </h3>
              <p className="text-gray-600">
                Navegue pelas faxineiras verificadas da sua região, compare preços e leia avaliações de outros clientes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#243c28] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Converse e Reserve
              </h3>
              <p className="text-gray-600">
                Converse com as faxineiras diretamente para discutir suas necessidades, depois reserve instantaneamente ou agende para depois.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#243c28] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Relaxe e Aproveite
              </h3>
              <p className="text-gray-600">
                Sua faxineira chega pontualmente e começa o trabalho. Você pode acompanhar o progresso e avaliar sua experiência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Junte-se a milhares de clientes satisfeitos que confiam na Limpify para suas necessidades de limpeza.
          </p>
          <Link
            to="/cleaners"
            className="bg-white text-[#243c28] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 text-lg"
          >
            <span>Encontre Sua Faxineira Hoje</span>
            <Search className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
