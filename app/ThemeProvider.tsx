"use client";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({ theme: "theme-light", setTheme: (_: string) => {} });

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("theme-light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && ["theme-light", "theme-dark", "theme-blue"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Apply theme to body after component mounts
      document.body.classList.remove("theme-light", "theme-dark", "theme-blue");
      document.body.classList.add(theme);
      
      // Save theme to localStorage
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
} 