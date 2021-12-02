import { createStackNavigator } from '@react-navigation/stack';
import { LockScreen } from './CellarLock';
import LockApp from './LockMain';
import React from 'react';
import { LockInfo } from './LockInfo';

const Stack = createStackNavigator();

export const LockNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lock Info" component={LockInfo} />
      <Stack.Screen name="Lock Screen" component={LockScreen} />
      <Stack.Screen name="Lock App" component={LockApp} />
    </Stack.Navigator>
  );
};
