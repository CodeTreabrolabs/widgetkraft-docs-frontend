"use client";

import React, { useState, createContext, useContext } from 'react';

// Theme Context
const ThemeContext = createContext();

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};

const ThemeProvider = ({ children, initialTheme = 'dark' }) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };

// Example usage in a page with SSR
export async function getServerSideProps(context) {
  // Example: Determine the theme based on cookies or other server-side logic
  const initialTheme = context.req.cookies.theme || 'dark';

  return {
    props: {
      initialTheme, // Pass the initial theme to the page
    },
  };
}