import { createStackNavigator } from '@react-navigation/stack';
import { LockScreen } from './CellarLock';
import LockApp from './LockMain';
import React from 'react';
import { LockInfo } from './LockInfo';

const Stack = createStackNavigator();

export const LockNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LockInfo" component={LockInfo} />
      <Stack.Screen name="LockScreen" component={LockScreen} />
      <Stack.Screen name="LockApp" component={LockApp} />
    </Stack.Navigator>
  );
};
