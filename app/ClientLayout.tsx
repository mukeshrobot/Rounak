"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const showNavbar = pathname !== "/login";
  const showFooter = pathname !== "/login";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {showNavbar && <Navbar />}
        <main className="mainContent">{children}</main>
        {showFooter && (
          <footer className="footer items-center justify-center">
            <p>© 2025 Cloud License Shop. All rights reserved.</p>
          </footer>
        )}
      </div>
    );
  }

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="mainContent">{children}</main>
      {showFooter && (
        <footer className="footer items-center justify-center">
          <p>© 2025 Cloud License Shop. All rights reserved.</p>
        </footer>
      )}
    </>
  );
} 