"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const showNavbar = pathname !== "/login";
  const showSidebar = pathname !== "/login";
  const showFooter = pathname !== "/login";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {showNavbar && <Navbar />}
        {showSidebar && <Sidebar />}
        <main className={`overflow-auto bg-gray-50 dark:bg-gray-900 ${showSidebar ? 'ml-64' : ''}`}>
          <div className="p-6">
            {children}
          </div>
        </main>
        {showFooter && (
          <footer className="footer items-center justify-center">
            <p>© 2025 Cloud License Shop. All rights reserved.</p>
          </footer>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {showNavbar && <Navbar />}
      {showSidebar && <Sidebar />}
      <main 
        className={`overflow-auto bg-gray-50 dark:bg-gray-900 ${showSidebar ? 'ml-64' : ''}`}
        style={{ 
          minHeight: 'calc(100vh - 64px)', // Adjust for navbar height
          paddingTop: showNavbar ? '64px' : '0' // Add top padding for navbar
        }}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
      {showFooter && (
        <footer className="footer items-center justify-center">
          <p>© 2025 Cloud License Shop. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
} 