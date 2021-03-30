import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { theme } from './styles/theme';
import { HomeScreen } from './screens/Home';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
