import { createStackNavigator } from '@react-navigation/stack';
import { WinecellarRegistration } from './WinecellarRegistration';
import React from 'react';
import { ValidationPage } from './ValidationPage';

const Stack = createStackNavigator();

export const RegistrationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WinecellarRegistration" component={WinecellarRegistration} />
      <Stack.Screen name="ValidationPage" component={ValidationPage} />
    </Stack.Navigator>
  );
};
