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
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <Header onMenuClick={handleMenuClick} />
      <main className="lg:ml-64 bg-black pt-24 px-6 pb-12">
        {children}
      </main>
    </>
  );
};

export default HeaderWithSidebar;