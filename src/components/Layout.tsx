
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MessageCircle, Calendar, User, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, hideFooter }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/LimpifyLogoGreenSmall.png" alt="Logo" />
              </div>
              <span className="text-xl font-bold text-gray-900">Limpify</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-[#243c28]' : 'text-gray-700 hover:text-[#243c28]'
                }`}
              >
                Início
              </Link>
              <Link
                to="/cleaners"
                className={`text-sm font-medium transition-colors ${
                  isActive('/cleaners') ? 'text-[#243c28]' : 'text-gray-700 hover:text-[#243c28]'
                }`}
              >
                Encontrar Diaristas
              </Link>
              <Link
                to="/dashboard"
                className={`text-sm font-medium transition-colors ${
                  isActive('/dashboard') ? 'text-[#243c28]' : 'text-gray-700 hover:text-[#243c28]'
                }`}
              >
                Painel
              </Link>
              <Link
                to="/messages"
                className={`text-sm font-medium transition-colors ${
                  isActive('/messages') ? 'text-[#243c28]' : 'text-gray-700 hover:text-[#243c28]'
                }`}
              >
                Mensagens
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-[#243c28] p-2">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-[#243c28] p-2">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-[#243c28] p-2">
                <User className="w-5 h-5" />
              </button>
              <button className="bg-[#243c28] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1a2a1c] transition-colors">
                Agendar Agora
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-[#243c28]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/') ? 'text-[#243c28] bg-green-50' : 'text-gray-700 hover:text-[#243c28]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  to="/cleaners"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/cleaners') ? 'text-[#243c28] bg-green-50' : 'text-gray-700 hover:text-[#243c28]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Encontrar Diaristas
                </Link>
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/dashboard') ? 'text-[#243c28] bg-green-50' : 'text-gray-700 hover:text-[#243c28]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Painel
                </Link>
                <Link
                  to="/messages"
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/messages') ? 'text-[#243c28] bg-green-50' : 'text-gray-700 hover:text-[#243c28]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Mensagens
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      {!hideFooter && <footer className="text-white bg-[#1b2e1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/LimpifyLogoWhiteSmall.png" alt="Logo" />
                </div>
                <span className="text-xl font-bold">Limpify</span>
              </div>
              <p className="text-gray-300 text-sm">
                Conecte-se com diaristas confiáveis para serviços de limpeza profissionais e confiáveis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Limpeza Residencial</li>
                <li>Limpeza Comercial</li>
                <li>Limpeza Pesada</li>
                <li>Manutenção Regular</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Central de Ajuda</li>
                <li>Segurança</li>
                <li>Fale Conosco</li>
                <li>Política de Privacidade</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Sobre Nós</li>
                <li>Carreiras</li>
                <li>Imprensa</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2025 Limpify. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>}
    </div>
  );
};

export default Layout;
