import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
    textAlign: 'center'
  };

  return (
    <div style={style}>
      Tema saat ini: {theme}
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
}

export default ThemedComponent;
