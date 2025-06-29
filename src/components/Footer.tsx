
import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-400 px-2 sm:px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left links - responsive layout */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <a href="/about" className="text-xs sm:text-sm text-gray-700 hover:text-black transition-colors">
            О нас
          </a>
          <a href="/contacts" className="text-xs sm:text-sm text-gray-700 hover:text-black transition-colors">
            Контакты
          </a>
          <a href="/delivery" className="text-xs sm:text-sm text-gray-700 hover:text-black transition-colors">
            Доставка и информация
          </a>
          <a href="/privacy" className="text-xs sm:text-sm text-gray-700 hover:text-black transition-colors">
            Политика конфиденциальности
          </a>
        </div>

        {/* Right Telegram link with updated text */}
        <a 
          href="https://t.me/wackclothing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-xs sm:text-sm text-gray-700 hover:text-black transition-colors"
        >
          <MessageCircle size={14} className="sm:w-4 sm:h-4" />
          <span>Our Telegram</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
