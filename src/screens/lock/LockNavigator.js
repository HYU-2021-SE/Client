import { createStackNavigator } from '@react-navigation/stack';
import { LockScreen } from './CellarLock';
import React from 'react';

const Stack = createStackNavigator();

export const LockNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LockScreen" component={LockScreen} />
    </Stack.Navigator>
  );
};
