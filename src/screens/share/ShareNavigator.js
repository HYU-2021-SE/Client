import { createStackNavigator } from '@react-navigation/stack';
import { ShareHome } from './ShareHome';
import React from 'react';

const Stack = createStackNavigator();

export const ShareNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ShareHome" component={ShareHome} />
    </Stack.Navigator>
  );
};
