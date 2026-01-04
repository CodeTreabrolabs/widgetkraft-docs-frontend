import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './content/Documentation/HomePage';
import IntroductionPage from './content/Documentation/IntroductionPage';
import PlatformConceptsPage from './content/Documentation/PlatformConceptsPage';
import WidgetTypesPage from './content/Documentation/WidgetTypesPage';
import PlansUsagePage from './content/Documentation/PlansUsagePage';
import BestPracticesPage from './content/Documentation/BestPracticesPage';
import SecurityPage from './content/Documentation/SecurityPage';
import ContactFormWidgetPage from './content/Widgets/ContactFormWidgetPage';

const AppContent = () => {
  const { theme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const bgColor = theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  useEffect(() => {
    document.documentElement.className = theme; // Apply theme class to <html>
  }, [theme]);

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <main className="lg:ml-64 pt-24 px-6 pb-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/introduction" element={<IntroductionPage />} />
          <Route path="/platform-concepts" element={<PlatformConceptsPage />} />
          <Route path="/available-widgets" element={<WidgetTypesPage />} />
          <Route path="/widget-type/contactform-widget" element={<ContactFormWidgetPage />} />
          <Route path="/plans-usage" element={<PlansUsagePage />} />
          <Route path="/best-practices" element={<BestPracticesPage />} />
          <Route path="/security-privacy" element={<SecurityPage />} />
        </Routes>
      </main>
    </div>
  );
};

// Root Component with Providers - THIS EXPORTS TO index.js
export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}