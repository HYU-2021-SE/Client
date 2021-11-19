import { createStackNavigator } from '@react-navigation/stack';
import { LockScreen} from './CellarLock';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

export const LockNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LockScreen" component={LockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};