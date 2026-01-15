'use client'; // This is a client component because of the theme toggle button

import { Menu, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = ({ onMenuClick }) => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme as requested
  
  // Initialize theme from localStorage or use default
  useEffect(() => {
    // Since you said to keep only black theme manually, we're setting to 'dark' always
    setTheme('dark');
    document.documentElement.classList.add('dark');
  }, []);
  
  const toggleTheme = () => {
    // Since you want only dark theme, this function can be removed or kept for future use
    // For now, it does nothing as requested
    console.log("Theme toggle disabled - using fixed dark theme only");
  };
  
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-black text-gray-300 border-b border-gray-800 z-30 flex items-center justify-between px-6">
      <button onClick={onMenuClick} className="lg:hidden">
        <Menu size={24} className="text-gray-300" />
      </button>
      
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        {/* Removed theme toggle button since only dark theme is required */}
        
        <Link
          href="https://www.widgetkraft.com"
          target='_blank'
          className="px-4 py-2 bg-blue-600 hover:bg-orange-700 text-white rounded-lg transition-colors text-sm"
        >
          Dashboard →
        </Link>
      </div>
    </header>
  );
};

export default Header;