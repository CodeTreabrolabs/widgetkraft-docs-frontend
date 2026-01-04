import React, { useState, createContext, useContext } from 'react';
import { Home, BookOpen, Layers, Lightbulb, Package, DollarSign, Users, Shield, Moon, Sun, Menu, X } from 'lucide-react';

// Theme Context
const ThemeContext = createContext();

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };