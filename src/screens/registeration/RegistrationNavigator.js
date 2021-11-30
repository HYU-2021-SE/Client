import {createStackNavigator} from '@react-navigation/stack';
import {Registration} from './Registration';
import {ModelCheck} from '../modelcheck/ModelCheck';
import React from 'react';

const Stack = createStackNavigator();

export const RegistrationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={Registration}/>
      <Stack.Screen name="ModelCheck" component={ModelCheck}/>
    </Stack.Navigator>
  );
};
