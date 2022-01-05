import React from 'react';

import {lightTheme} from '../themes/styles';
const themes = {
  lightTheme
};
const ThemeContext = React.createContext({
  theme: themes.lightTheme,
  toggle: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export { ThemeContext, themes };
