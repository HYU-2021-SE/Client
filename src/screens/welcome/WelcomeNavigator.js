import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen, SelectScreen } from './Welcome';
import { LoginScreen } from './login/Login';
import React from 'react';
import {RegistrationNavigator} from '../registeration/RegistrationNavigator';

const Stack = createStackNavigator();

export const WelcomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SelectScreen" component={SelectScreen} />
      <Stack.Screen name="Registration" component={RegistrationNavigator} />
    </Stack.Navigator>
  );
};
