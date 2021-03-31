import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { theme } from './styles/theme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor="transparent" />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
