
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
        image: 'https://images.unsplash.com/photo-1494790108755-2616c0763a57?w=100&h=100&fit=crop&crop=face',
        isOnline: true
      },
      lastMessage: 'I\'ll be there at 10 AM sharp! Just to confirm, you wanted the deep cleaning service, right?',
      lastMessageTime: '2 min ago',
      unreadCount: 2,
      messages: [
        {
          id: '1',
          sender: 'cleaner',
          text: 'Hi! I got your booking request for tomorrow. Looking forward to helping you!',
          time: '10:30 AM'
        },
        {
          id: '2',
          sender: 'client',
          text: 'Great! I need a deep cleaning for my 2-bedroom apartment. It hasn\'t been cleaned professionally in a while.',
          time: '10:32 AM'
        },
        {
          id: '3',
          sender: 'cleaner',
          text: 'Perfect! I specialize in deep cleaning. I\'ll bring all eco-friendly supplies. Should take about 4-5 hours.',
          time: '10:35 AM'
        },
        {
          id: '4',
          sender: 'client',
          text: 'That sounds great. What time works best for you?',
          time: '10:40 AM'
        },
        {
          id: '5',
          sender: 'cleaner',
          text: 'I\'ll be there at 10 AM sharp! Just to confirm, you wanted the deep cleaning service, right?',
          time: '2 min ago'
        }
      ]
    },
    {
      id: '2',
      cleaner: {
        name: 'Maria Rodriguez',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        isOnline: false
      },
      lastMessage: 'Thank you so much! The house looks amazing. I\'ll definitely book you again.',
      lastMessageTime: '1 hour ago',
      unreadCount: 0,
      messages: [
        {
          id: '1',
          sender: 'client',
          text: 'Thank you so much! The house looks amazing. I\'ll definitely book you again.',
          time: '1 hour ago'
        },
        {
          id: '2',
          sender: 'cleaner',
          text: 'You\'re so welcome! It was a pleasure working for you. Looking forward to next time!',
          time: '45 min ago'
        }
      ]
    },
    {
      id: '3',
      cleaner: {
        name: 'Jennifer Chen',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
        isOnline: true
      },
      lastMessage: 'I have an opening this Friday at 2 PM if that works for you?',
      lastMessageTime: '3 hours ago',
      unreadCount: 1,
      messages: [
        {
          id: '1',
          sender: 'client',
          text: 'Hi Jennifer! I saw your profile and I\'m interested in booking a cleaning service. Are you available this week?',
          time: '4 hours ago'
        },
        {
          id: '2',
          sender: 'cleaner',
          text: 'Hi! Thanks for reaching out. I have an opening this Friday at 2 PM if that works for you?',
          time: '3 hours ago'
        }
      ]
    }
  ];

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  const sendMessage = () => {
    if (!messageText.trim()) return;
    
    // In a real app, this would send the message to the server
    console.log('Sending message:', messageText);
    setMessageText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Layout>
      <div className="h-screen bg-gray-50 flex">
        {/* Conversations Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900 mb-3">Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  selectedChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
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
                    <div className="w-5 h-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center">
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
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'client' ? 'text-blue-100' : 'text-gray-500'
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
                      placeholder="Type your message..."
                      rows={2}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
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
                <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
                <p className="text-gray-600">Choose a conversation to start messaging.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
