
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('Всё');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['Всё', 'Куртки', 'Штаны', 'Футболки', 'Кофты', 'Аксессуары'];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    // Add smooth transition animation logic here
  };

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left tabs */}
        <div className="flex items-center space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeTab === tab 
                  ? 'text-black border-b-2 border-black' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right search */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleSearchClick}
            className="flex items-center space-x-2 text-sm font-medium text-black hover:text-gray-600 transition-colors"
          >
            <span>Search</span>
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Search bar that appears when clicked */}
      {showSearch && (
        <div className="mt-4 animate-fade-in">
          <input
            type="text"
            placeholder="Поиск по товарам"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-black transition-colors"
          />
        </div>
      )}
    </div>
  );
};

export default ProductTabs;
