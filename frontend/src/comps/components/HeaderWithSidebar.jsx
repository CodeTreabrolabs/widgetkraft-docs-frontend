"use client";

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const HeaderWithSidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <div className="lg:pl-[var(--docs-sidebar-width)]">
        <Header onMenuClick={handleMenuClick} />
        <main className="min-h-[calc(100vh-var(--docs-header-height))] pt-[calc(var(--docs-header-height)+1.5rem)] pb-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default HeaderWithSidebar;
