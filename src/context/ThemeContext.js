import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    backgroundColor: '#f0f2f5',
    mainContentBackground: '#ffffff',
    headerBackground: '#ffffff',
    footerBackground: '#ffffff',
    textColor: '#333',
  });

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      backgroundColor: prevTheme.backgroundColor === '#f0f2f5' ? '#333' : '#f0f2f5',
      mainContentBackground: prevTheme.mainContentBackground === '#ffffff' ? '#444' : '#ffffff',
      headerBackground: prevTheme.headerBackground === '#ffffff' ? '#222' : '#ffffff',
      footerBackground: prevTheme.footerBackground === '#ffffff' ? '#222' : '#ffffff',
      textColor: prevTheme.textColor === '#333' ? '#ccc' : '#333',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
