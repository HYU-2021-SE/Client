import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen, SelectScreen } from './Main';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SelectScreen" component={SelectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
