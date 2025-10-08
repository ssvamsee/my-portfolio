import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Available color options
export const colorOptions = [
  { name: 'Red', value: '#ef4444', hover: '#dc2626' },
  { name: 'Purple', value: '#8b5cf6', hover: '#7c3aed' },
  { name: 'Pink', value: '#ec4899', hover: '#db2777' },
  { name: 'Orange', value: '#f97316', hover: '#ea580c' },
  { name: 'Yellow', value: '#eab308', hover: '#ca8a04' },
  { name: 'Green', value: '#10b981', hover: '#059669' },
  { name: 'Teal', value: '#14b8a6', hover: '#0d9488' },
  { name: 'Indigo', value: '#6366f1', hover: '#4f46e5' },
];

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [primaryColor, setPrimaryColor] = useState(() => {
    const savedColor = localStorage.getItem('primaryColor');
    return savedColor || colorOptions[0].value;
  });

  const [autoColorChange, setAutoColorChange] = useState(() => {
    const savedAutoColor = localStorage.getItem('autoColorChange');
    return savedAutoColor === 'true';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('primaryColor', primaryColor);
    // Update CSS variable for primary color
    document.documentElement.style.setProperty('--color-primary', primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    localStorage.setItem('autoColorChange', autoColorChange);
  }, [autoColorChange]);

  // Auto color change every 30 seconds
  useEffect(() => {
    if (!autoColorChange) return;

    const interval = setInterval(() => {
      const currentIndex = colorOptions.findIndex(c => c.value === primaryColor);
      const nextIndex = (currentIndex + 1) % colorOptions.length;
      setPrimaryColor(colorOptions[nextIndex].value);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [autoColorChange, primaryColor]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const changeColor = (color) => {
    setPrimaryColor(color);
  };

  const toggleAutoColorChange = () => {
    setAutoColorChange(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ 
      isDark, 
      toggleTheme, 
      primaryColor, 
      changeColor, 
      autoColorChange, 
      toggleAutoColorChange 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

