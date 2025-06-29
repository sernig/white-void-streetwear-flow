
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-400 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left links */}
        <div className="flex items-center space-x-6">
          <a href="/about" className="text-sm text-gray-700 hover:text-black transition-colors">
            О нас
          </a>
          <a href="/contacts" className="text-sm text-gray-700 hover:text-black transition-colors">
            Контакты
          </a>
          <a href="/delivery" className="text-sm text-gray-700 hover:text-black transition-colors">
            Доставка и информация
          </a>
          <a href="/privacy" className="text-sm text-gray-700 hover:text-black transition-colors">
            Политика конфиденциальности
          </a>
        </div>

        {/* Right Telegram link */}
        <a 
          href="https://t.me/wackclothing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-sm text-gray-700 hover:text-black transition-colors"
        >
          <MessageCircle size={16} />
          <span>t.me/wackclothing</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
