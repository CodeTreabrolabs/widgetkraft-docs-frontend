import { useTheme } from '../context/ThemeContext';
import { Menu, Sun, Moon } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';
  
  return (
    <header className={`fixed top-0 right-0 left-0 lg:left-64 h-16 ${bgColor} ${textColor} border-b ${borderColor} z-30 flex items-center justify-between px-6`}>
      <button onClick={onMenuClick} className="lg:hidden">
        <Menu size={24} />
      </button>
      
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <a
          href="#dashboard"
          className={`px-4 py-2 ${theme === 'dark' ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-lg transition-colors text-sm`}
        >
          Dashboard →
        </a>
      </div>
    </header>
  );
};

export default Header;