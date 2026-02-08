'use client';

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close sidebar on navigation (mobile)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsSidebarOpen(false);
  }

  return (
    <div className="ax-flex ax-bg-white ax-h-screen">
      <div className={`ax-sidebar ${isSidebarOpen ? 'ax-active' : ''}`}>
        <Sidebar onClose={closeSidebar} />
      </div>
      
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="ax-fixed ax-inset-0 ax-bg-black-30 ax-z-40 ax-lg-show" 
          onClick={closeSidebar}
          style={{ backdropFilter: 'blur(2px)' }}
        />
      )}

      <div className="ax-main-wrapper ax-w-full">
        <Header onMenuClick={toggleSidebar} />
        <main className="ax-content">
          <div className="ax-container">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
