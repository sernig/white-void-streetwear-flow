
import React, { useState } from 'react';
import { Heart, LogIn, ShoppingCart } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const storeItems = [
    { label: 'T-SHIRTS', href: '/tshirts' },
    { label: 'JACKETS', href: '/jackets' },
    { label: 'PANTS', href: '/pants' },
    { label: 'ACCESSORIES', href: '/accessories' }
  ];

  const informationItems = [
    { label: 'About us', href: '/about' },
    { label: 'Delivery and information', href: '/delivery' },
    { label: 'Contacts', href: '/contacts' }
  ];

  const handleDropdownClick = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white border-b border-gray-100 h-12 flex items-center justify-between px-2 sm:px-6 relative">
      {/* Left Navigation - responsive positioning */}
      <nav className="flex items-center space-x-2 sm:space-x-8 ml-0 sm:ml-20">
        <div className="relative">
          <button 
            onClick={() => handleDropdownClick('store')}
            className="text-xs sm:text-sm font-medium text-black hover:text-gray-600 transition-colors"
          >
            STORE
          </button>
          <DropdownMenu 
            items={storeItems}
            isOpen={activeDropdown === 'store'}
            onClose={closeDropdown}
          />
        </div>
        <a href="#" className="text-xs sm:text-sm font-medium text-black hover:text-gray-600 transition-colors">
          COLLECTIONS
        </a>
        <div className="relative">
          <button 
            onClick={() => handleDropdownClick('information')}
            className="text-xs sm:text-sm font-medium text-black hover:text-gray-600 transition-colors"
          >
            INFO
          </button>
          <DropdownMenu 
            items={informationItems}
            isOpen={activeDropdown === 'information'}
            onClose={closeDropdown}
          />
        </div>
      </nav>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="text-base sm:text-lg font-bold text-black">
          WACK
        </div>
      </div>

      {/* Right Navigation - responsive positioning */}
      <nav className="flex items-center space-x-3 sm:space-x-6 mr-0 sm:mr-20">
        <button className="text-black hover:text-gray-600 transition-colors">
          <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
        <button className="text-black hover:text-gray-600 transition-colors">
          <LogIn size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
        <button className="text-black hover:text-gray-600 transition-colors">
          <ShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </nav>

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDropdown}
        />
      )}
    </header>
  );
};

export default Header;
