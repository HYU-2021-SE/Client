import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {RegistrationNavigator} from '../registeration/RegistrationNavigator';
import {ModelCheck} from './ModelCheck';
import {SelectScreen} from '../welcome/Welcome';

const Stack = createStackNavigator();

export const ModelCheckNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SelectScreen" component={SelectScreen} />
        <Stack.Screen name="Registration" component={RegistrationNavigator} />
        <Stack.Screen name="ModelCheck" component={ModelCheck}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};