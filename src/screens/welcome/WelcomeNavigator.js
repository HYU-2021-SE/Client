import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen, SelectScreen } from './Welcome';
import React from 'react';

const Stack = createStackNavigator();

export const WelcomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SelectScreen" component={SelectScreen} />
    </Stack.Navigator>
  );
};
