import { createStackNavigator } from '@react-navigation/stack';
import { LockScreen } from './CellarLock';
import Inputs from './LockInfo';
import LockApp from './LockMain';
import React from 'react';

const Stack = createStackNavigator();

export const LockNavigator = () => {
  return (
    <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen name = "Lock Info" component={Inputs} />
      <Stack.Screen name= "Lock Screen" component={LockScreen} />
      <Stack.Screen name = "Lock App" component = {LockApp} />
    </Stack.Navigator>
  );
};
