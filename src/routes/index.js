import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, HomeScreen } from '../screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
