import { createStackNavigator } from '@react-navigation/stack';
import { Registration } from './Registeration';
import { SelectScreen } from '../welcome/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

export const RegisterationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SelectScreen" component={SelectScreen} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
