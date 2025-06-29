
import React from 'react';
import { Heart, LogIn, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100 h-12 flex items-center justify-between px-6 relative">
      {/* Left Navigation */}
      <nav className="flex items-center space-x-8">
        <a href="#" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
          STORE
        </a>
        <a href="#" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
          COLLECTIONS
        </a>
        <a href="#" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
          INFORMATION
        </a>
      </nav>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="text-lg font-bold text-black">
          WACK
        </div>
      </div>

      {/* Right Navigation */}
      <nav className="flex items-center space-x-6">
        <button className="text-black hover:text-gray-600 transition-colors">
          <Heart size={18} />
        </button>
        <button className="text-black hover:text-gray-600 transition-colors">
          <LogIn size={18} />
        </button>
        <button className="text-black hover:text-gray-600 transition-colors">
          <ShoppingCart size={18} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
