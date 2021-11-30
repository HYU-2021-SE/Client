import { createStackNavigator } from '@react-navigation/stack';
import { LockScreen } from './CellarLock';
import LockApp from './LockMain';
import {Inputs} from './LockInfo';
import React from 'react';

const Stack = createStackNavigator();

export const LockNavigator = () => {
  return (
    <Stack.Navigator screenOptions = {{headerShown: false}}>
      <Stack.Screen name = "Lock Setting" component={LockApp} />
      <Stack.Screen name= "Lock Main" component={LockScreen} />
      <Stack.Screen name= "Lock Information" component={LockInfo} />
    </Stack.Navigator>
  );
};
