import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemedComponent from './ThemedComponent';

function App() {
  // Mengelola state tema dengan useState
  const [theme, setTheme] = useState('light');

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // Menggunakan ThemeContext.Provider untuk menyediakan nilai context
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

export default App;