import { createStackNavigator } from '@react-navigation/stack';
import { CellarLock } from './CellarLock';
import LockApp from './LockMain';
import React from 'react';
import { LockInfo } from './LockInfo';
import {LockGate} from './LockGate';

const Stack = createStackNavigator();

export const LockNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LockInfo" component={LockInfo} />
      <Stack.Screen name="CellarLock" component={CellarLock} />
      <Stack.Screen name="LockApp" component={LockApp} />
      <Stack.Screen name="LockGate" component={LockGate}/>
    </Stack.Navigator>
  );
};
