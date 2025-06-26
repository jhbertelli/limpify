
import React, { useState } from 'react';
import { Send, Search, Phone, Video, MoreVertical } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState('1');
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: '1',
      cleaner: {
        name: 'Sarah Johnson',
        image: 'https://images.pexels.com/photos/3768910/pexels-photo-3768910.jpeg?w=400&h=300',
        isOnline: true
      },
      lastMessage: 'Estarei aí às 10h em ponto! Só para confirmar, você queria o serviço de limpeza pesada, certo?',
      lastMessageTime: '2 min atrás',
      unreadCount: 2,
      messages: [
        {
          id: '1',
          sender: 'cleaner',
          text: 'Oi! Recebi sua solicitação para amanhã. Estou ansiosa para ajudá-la!',
          time: '10:30'
        },
        {
          id: '2',
          sender: 'client',
          text: 'Ótimo! Preciso de uma limpeza pesada para meu apartamento de 2 quartos. Faz um tempo que não é limpo profissionalmente.',
          time: '10:32'
        },
        {
          id: '3',
          sender: 'cleaner',
          text: 'Perfeito! Sou especialista em limpeza pesada. Trarei todos os produtos eco-friendly. Deve levar cerca de 4-5 horas.',
          time: '10:35'
        },
        {
          id: '4',
          sender: 'client',
          text: 'Isso parece ótimo. Que horário funciona melhor para você?',
          time: '10:40'
        },
        {
          id: '5',
          sender: 'cleaner',
          text: 'Estarei aí às 10h em ponto! Só para confirmar, você queria o serviço de limpeza pesada, certo?',
          time: '2 min atrás'
        }
      ]
    },
    {
      id: '2',
      cleaner: {
        name: 'Maria Rodriguez',
        image: 'https://cdn.pixabay.com/photo/2019/04/02/18/16/cleaning-4098410_960_720.jpg',
        isOnline: false
      },
      lastMessage: 'Muito obrigada! A casa ficou incrível. Definitivamente vou agendá-la novamente.',
      lastMessageTime: '1 hora atrás',
      unreadCount: 0,
      messages: [
        {
          id: '1',
          sender: 'client',
          text: 'Muito obrigada! A casa ficou incrível. Definitivamente vou agendá-la novamente.',
          time: '1 hora atrás'
        },
        {
          id: '2',
          sender: 'cleaner',
          text: 'De nada! Foi um prazer trabalhar para você. Estou esperando a próxima vez!',
          time: '45 min atrás'
        }
      ]
    },
    {
      id: '3',
      cleaner: {
        name: 'Jennifer Chen',
        image: 'https://images.pexels.com/photos/5591967/pexels-photo-5591967.jpeg?w=400',
        isOnline: true
      },
      lastMessage: 'Tenho uma vaga esta sexta às 14h se funcionar para você?',
      lastMessageTime: '3 horas atrás',
      unreadCount: 1,
      messages: [
        {
          id: '1',
          sender: 'client',
          text: 'Oi Jennifer! Vi seu perfil e estou interessada em agendar um serviço de limpeza. Você está disponível esta semana?',
          time: '4 horas atrás'
        },
        {
          id: '2',
          sender: 'cleaner',
          text: 'Oi! Obrigada por entrar em contato. Tenho uma vaga esta sexta às 14h se funcionar para você?',
          time: '3 horas atrás'
        }
      ]
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const sendMessage = () => {
    if (!messageText.trim()) return;
    
    // In a real app, this would send the message to the server
    console.log('Enviando mensagem:', messageText);
    setMessageText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Layout hideFooter>
      <div className="h-screen bg-gray-50 flex">
        {/* Conversations Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900 mb-3">Mensagens</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar conversas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#243c28] focus:border-transparent"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedChat(conversation.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedChat === conversation.id ? 'bg-green-50 border-green-200' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={conversation.cleaner.image}
                      alt={conversation.cleaner.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {conversation.cleaner.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {conversation.cleaner.name}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {conversation.lastMessageTime}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  
                  {conversation.unreadCount > 0 && (
                    <div className="w-5 h-5 bg-[#243c28] text-white text-xs font-medium rounded-full flex items-center justify-center">
                      {conversation.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="bg-white border-b border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={selectedConversation.cleaner.image}
                        alt={selectedConversation.cleaner.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {selectedConversation.cleaner.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {selectedConversation.cleaner.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {selectedConversation.cleaner.isOnline ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {selectedConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'client'
                          ? 'bg-[#243c28] text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'client' ? 'text-green-100' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="bg-white border-t border-gray-200 p-4">
                <div className="flex items-end space-x-2">
                  <div className="flex-1">
                    <textarea
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Digite sua mensagem..."
                      rows={2}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#243c28] focus:border-transparent resize-none"
                    />
                  </div>
                  <Button 
                    onClick={sendMessage}
                    disabled={!messageText.trim()}
                    className="p-3"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma conversa selecionada</h3>
                <p className="text-gray-600">Escolha uma conversa para começar a conversar.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
