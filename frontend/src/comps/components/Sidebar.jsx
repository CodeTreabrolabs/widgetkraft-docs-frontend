'use client';

import { Home, BookOpen, SquareLibrary, Layers, Package, DollarSign, Lightbulb, Shield, X, ChevronDown, ChevronRight, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    'available-widgets': false // Start collapsed by default
  });

  // Navigation items with sub-items
  const navItems = [
    { id: '', label: 'Home', icon: Home, section: 'Getting Started' },
    { id: 'introduction', label: 'Introduction', icon: BookOpen, section: 'Getting Started' },
    { id: 'platform-concepts', label: 'Platform Concepts', icon: Layers, section: 'Getting Started' },
    { id: 'dashboards', label: 'Dashboards', icon: LayoutDashboard, section: 'Core Features' },
    { id: 'my-widgets', label: 'My Widgets', icon: SquareLibrary, section: 'Core Features' },
    { 
      id: 'available-widgets', 
      label: 'Available Widgets', 
      icon: Package, 
      section: 'Core Features',
      hasSubItems: true,
      subItems: [
        { id: 'available-widgets/contactform-widget', label: 'Contact Form Widget' },
        { id: 'available-widgets/ai-chatbot-widget', label: 'AI Chatbot Widget' },
        { id: 'available-widgets/live-conversation', label: 'Live Conversation Widget' },
        // { id: 'available-widgets/comment-box', label: 'Comment Box Widget' },
        // { id: 'available-widgets/visitor-tracker', label: 'Visitor Tracker' },
        // { id: 'available-widgets/meet-scheduler', label: 'AI Meet Scheduler' }
      ]
    },
    { id: 'plans-usage', label: 'Plans & Usage', icon: DollarSign, section: 'Core Features' },
    { id: 'best-practices', label: 'Best Practices', icon: Lightbulb, section: 'Guides' },
    { id: 'security-privacy', label: 'Security & Privacy', icon: Shield, section: 'Guides' }
  ];

  const sections = [...new Set(navItems.map(item => item.section))];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle click for mobile close
  const handleLinkClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  // Toggle sub-items visibility
  const toggleSection = (sectionId, e) => {
    e.stopPropagation(); // Prevent link click when clicking chevron
    e.preventDefault();
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Auto-expand if a sub-item is active
  useEffect(() => {
    const activeSection = navItems.find(item => 
      item.hasSubItems && item.subItems?.some(subItem => 
        pathname === `/${subItem.id}`
      )
    );
    
    if (activeSection) {
      setExpandedSections(prev => ({
        ...prev,
        [activeSection.id]: true
      }));
    }
  }, [pathname]);

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
        className={`fixed top-0 left-0 h-full bg-black text-gray-300 w-64 border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 overflow-y-auto`}
      >
        <div className="p-4 border-b border-gray-800 h-16">
          <div className="flex items-center justify-between">
            <img src="/widgetkraft_logo.png" alt="WidgetKraft Logo" className="h-7 w-auto" />
            <h1 className="text-xl font-bold text-white">
              WidgetKraft<span className="text-blue-600"> Docs</span>
            </h1>
            <button onClick={onClose} className="lg:hidden">
              <X size={20} className="text-gray-300" />
            </button>
          </div>
        </div>
        
        <nav className="p-4">
          {sections.map(section => (
            <div key={section} className="mb-6">
              <h3 className="text-xs font-semibold uppercase mb-2 text-gray-500">
                {section}
              </h3>
              {navItems
                .filter(item => item.section === section)
                .map(item => {
                  const Icon = item.icon;
                  const isActive = item.id === '' ? pathname === '/' : pathname === `/${item.id}`;
                  const href = item.id === '' ? '/' : `/${item.id}`;
                  const hasSubItems = item.hasSubItems;
                  const isExpanded = expandedSections[item.id];
                  
                  // Check if any sub-item is active
                  const isSubItemActive = hasSubItems && item.subItems?.some(subItem => 
                    pathname === `/${subItem.id}`
                  );
                  
                  return (
                    <div key={item.id || 'home'} className="mb-1">
                      {hasSubItems ? (
                        <>
                          <Link
                            href={href}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors group ${
                              isActive || isSubItemActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
                            }`}
                            onClick={handleLinkClick}
                          >
                            <div className="flex items-center gap-3">
                              <Icon size={18} />
                              <span className="text-sm">{item.label}</span>
                            </div>
                            <button
                              onClick={(e) => toggleSection(item.id, e)}
                              className="p-1 hover:bg-gray-700 rounded transition-colors"
                              aria-label={isExpanded ? "Collapse sub-items" : "Expand sub-items"}
                            >
                              {isExpanded ? (
                                <ChevronDown size={16} />
                              ) : (
                                <ChevronRight size={16} />
                              )}
                            </button>
                          </Link>
                          
                          {/* Sub-items */}
                          {isExpanded && (
                            <div className="ml-4 mt-1 space-y-1">
                              {item.subItems?.map((subItem) => {
                                const isSubActive = pathname === `/${subItem.id}`;
                                return (
                                  <Link
                                    key={subItem.id}
                                    href={`/${subItem.id}`}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                                      isSubActive ? 'bg-blue-600/80 text-white' : 'text-gray-300 hover:bg-gray-800'
                                    }`}
                                    onClick={handleLinkClick}
                                  >
                                    <span className="text-xs ml-1">↳</span>
                                    <span className="text-sm">{subItem.label}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={href}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                            isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
                          }`}
                          onClick={handleLinkClick}
                        >
                          <Icon size={18} />
                          <span className="text-sm">{item.label}</span>
                        </Link>
                      )}
                    </div>
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