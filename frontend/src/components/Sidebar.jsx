import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';
import { Home, BookOpen, Layers, Package, DollarSign, Lightbulb, Shield, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { currentPage, navigate } = useNavigation();
  
  const navItems = [
    { id: '', label: 'Home', icon: Home, section: 'Getting Started' },
    { id: 'introduction', label: 'Introduction', icon: BookOpen, section: 'Getting Started' },
    { id: 'platform-concepts', label: 'Platform Concepts', icon: Layers, section: 'Getting Started' },
    { id: 'available-widgets', label: 'Available Widgets', icon: Package, section: 'Core Features' },
    { id: 'plans-usage', label: 'Plans & Usage', icon: DollarSign, section: 'Core Features' },
    { id: 'best-practices', label: 'Best Practices', icon: Lightbulb, section: 'Guides' },
    { id: 'security-privacy', label: 'Security & Privacy', icon: Shield, section: 'Guides' }
  ];
  
  const sections = [...new Set(navItems.map(item => item.section))];
  
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100';
  const activeBg = theme === 'dark' ? 'bg-orange-600' : 'bg-orange-500';
  const sectionColor = theme === 'dark' ? 'text-gray-500' : 'text-gray-500';
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';
  
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full ${bgColor} ${textColor} w-64 border-r ${borderColor} z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 overflow-y-auto`}
      >
        <div className="p-4 border-b ${borderColor}">
          <div className="flex items-center justify-between">
            <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              WidgetKraft<span className={theme === 'dark' ? 'text-orange-500' : 'text-orange-600'}>docs</span>
            </h1>
            <button onClick={onClose} className="lg:hidden">
              <X size={20} />
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          {sections.map(section => (
            <div key={section} className="mb-6">
              <h3 className={`text-xs font-semibold uppercase mb-2 ${sectionColor}`}>
                {section}
              </h3>
              {navItems
                .filter(item => item.section === section)
                .map(item => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.id}
                      to={`/${item.id}`}
                      className={({ isActive }) =>
                        `w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 transition-colors ${
                          isActive ? `${activeBg} text-white` : `${textColor} ${hoverBg}`
                        }`
                      }
                      onClick={() => {
                        if (window.innerWidth < 1024) onClose();
                      }}
                    >
                      <Icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </NavLink>
                  );
                })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;