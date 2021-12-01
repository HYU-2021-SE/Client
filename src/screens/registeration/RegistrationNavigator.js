import { createStackNavigator } from '@react-navigation/stack';
import { Registration } from './Registration';
import React from 'react';
import { ValidationPage } from './ValidationPage';

const Stack = createStackNavigator();

export const RegistrationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="ValidationPage" component={ValidationPage} />
    </Stack.Navigator>
  );
};
