import { createStackNavigator } from '@react-navigation/stack';
import { ShareHome } from './ShareHome';
import {ShareWineCellar} from './ShareWineCellar';
import React from 'react';

const Stack = createStackNavigator();

export const ShareNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ShareHome" component={ShareHome} />
      <Stack.Screen name="ShareWineCellar" component={ShareWineCellar} />
    </Stack.Navigator>
  );
};
