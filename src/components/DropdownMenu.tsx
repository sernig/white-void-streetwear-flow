
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  items: DropdownItem[];
  isOpen: boolean;
  onClose: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-sm shadow-lg backdrop-blur-sm bg-opacity-95 z-50 animate-fade-in">
      <div className="py-2">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center justify-between px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors group"
            onClick={onClose}
          >
            <span>{item.label}</span>
            {item.label !== 'Delivery and information' && (
              <ArrowRight size={14} className="text-gray-400 group-hover:text-black transition-colors" />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
