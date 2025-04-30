import React from 'react';
import { NavItem } from '../types';
import { Home, Briefcase, Building2, Mail, User } from 'lucide-react';

interface NavbarProps {
  logoUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoUrl }) => {
  const navItems: NavItem[] = [
    { name: 'Home', href: '#', active: false },
    { name: 'Jobs', href: '#', active: false },
    { name: 'Companies', href: '#', active: true },
    { name: 'Inbox', href: '#', active: false },
    { name: 'You', href: '#', active: false },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home size={18} />;
      case 'Jobs':
        return <Briefcase size={18} />;
      case 'Companies':
        return <Building2 size={18} />;
      case 'Inbox':
        return <Mail size={18} />;
      case 'You':
        return <User size={18} />;
      default:
        return null;
    }
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-3 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Welcome to the jungle" className="h-8" />
        </div>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center text-sm ${
                item.active ? 'text-black border-b-4 border-yellow-400 font-semibold' : 'text-gray-600'
              }`}
            >
              {getIcon(item.name)}
              <span className="mt-1">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;