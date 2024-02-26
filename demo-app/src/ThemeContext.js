import React from 'react';
export const themes = {
    light: {
      foreground: 'yellow',
      background: 'red',
    },
    dark: {
      foreground: 'white',
      background: 'black',
    },
  };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );

