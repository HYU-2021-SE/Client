import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen, SelectScreen } from './Welcome';
import { Registrantion } from '../registeration/Registeration';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

export const WelcomeNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="SelectScreen" component={SelectScreen} />
            <Stack.Screen name="Registrantion" component={Registrantion} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
