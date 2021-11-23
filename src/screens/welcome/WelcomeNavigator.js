import { createStackNavigator } from '@react-navigation/stack';
import { SelectScreen, WelcomeScreen } from './Welcome';
import { LoginScreen } from './login/Login';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

export const WelcomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SelectScreen" component={SelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
