import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the Theme type
export type ThemeId = 'luxury' | 'scandi' | 'industrial' | 'coastal' | 'boho';

interface ThemeColors {
  primary: string; // The hex color (e.g., #D97706)
  dark: string;    // Dark background/text
  light: string;   // Light background
  paper: string;   // Secondary light/card background
  name: string;    // Display name
}

// Define the 5 Palettes
const THEMES: Record<ThemeId, ThemeColors> = {
  luxury: {
    name: 'Luxury Gold',
    primary: '#D97706', // Gold/Amber
    dark: '#0c0a09',    // Warm Black
    light: '#fafaf9',   // Stone 50
    paper: '#e7e5e4'    // Stone 200
  },
  scandi: {
    name: 'Nordic Sage',
    primary: '#577c68', // Muted Sage Green
    dark: '#1c1917',    // Stone 900
    light: '#F5F7F5',   // Very light mint/grey
    paper: '#E8ECE9'    // Light grey-green
  },
  industrial: {
    name: 'Urban Rust',
    primary: '#c2410c', // Rust Orange
    dark: '#111827',    // Gray 900
    light: '#f3f4f6',   // Gray 100
    paper: '#e5e7eb'    // Gray 200
  },
  coastal: {
    name: 'Pacific Blue',
    primary: '#0284c7', // Sky 600
    dark: '#0f172a',    // Slate 900
    light: '#f8fafc',   // Slate 50
    paper: '#e2e8f0'    // Slate 200
  },
  boho: {
    name: 'Earthy Clay',
    primary: '#bc6c25', // Terra Cotta
    dark: '#283618',    // Deep Olive
    light: '#fefae0',   // Cream
    paper: '#faedcd'    // Papyrus
  }
};

interface ThemeContextType {
  currentTheme: ThemeId;
  setTheme: (id: ThemeId) => void;
  themes: Record<ThemeId, ThemeColors>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to convert Hex to RGB string "r g b"
const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}` 
    : '0 0 0';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from localStorage or default to 'luxury'
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('interior-design-theme');
      if (saved && (saved in THEMES)) {
        return saved as ThemeId;
      }
    }
    return 'luxury';
  });

  useEffect(() => {
    const theme = THEMES[currentTheme];
    const root = document.documentElement;

    // Set CSS Variables for Tailwind
    root.style.setProperty('--color-primary', hexToRgb(theme.primary));
    root.style.setProperty('--color-dark', hexToRgb(theme.dark));
    root.style.setProperty('--color-light', hexToRgb(theme.light));
    root.style.setProperty('--color-paper', hexToRgb(theme.paper));

    // Save to localStorage
    localStorage.setItem('interior-design-theme', currentTheme);

  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};