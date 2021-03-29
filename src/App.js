import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { SplashScreen } from './screens';
import StoryBook from '../storybook';
import { HomeScreen } from './screens/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
