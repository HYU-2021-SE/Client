import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen, SelectScreen } from './Welcome';
import { Registration } from '../registeration/Registeration';
import { LoginScreen } from './login/Login';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const Stack = createStackNavigator();

export const WelcomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SelectScreen" component={SelectScreen} />
        <Stack.Screen name="Registrantion" component={Registration} />
      </Stack.Navigator>
      {/*// ======= //{' '}*/}
      {/*<Stack.Navigator>*/}
      {/*  // <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />*/}
      {/*  // <Stack.Screen name="LoginScreen" component={LoginScreen} />*/}
      {/*  // <Stack.Screen name="SelectScreen" component={SelectScreen} />*/}
      {/*  //{' '}*/}
      {/*</Stack.Navigator>*/}
      {/*// >>>>>>> cdcb1dc422864021d22853fd0128e6790f510d6f*/}
    </NavigationContainer>
  );
};
