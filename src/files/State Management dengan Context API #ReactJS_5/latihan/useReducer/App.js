import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';
import { CounterProvider } from './CounterContext';
import ThemedComponent from './ThemedComponent';
import UserProfile from './UserProfile';
import CounterComponent from './CounterComponent';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CounterProvider>
          <div>
            <ThemedComponent />
            <UserProfile />
            <CounterComponent />
          </div>
        </CounterProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
