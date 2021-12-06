import React from 'react';
import { MyWineCellar } from './WineCellar';
import { MyWineCellarSetting } from './WineCellarSetting';
import { createStackNavigator } from '@react-navigation/stack';
import { WineRegistrationNavigator } from './registration/WineRegistrationNavigator';

const WineCellarStack = createStackNavigator();

export const WineCellarStackNavigator = () => {
  return (
    <WineCellarStack.Navigator screenOptions={{ headerShown: false }}>
      <WineCellarStack.Screen name="MyWineCellar Home" component={MyWineCellar} />
      <WineCellarStack.Screen name="MyWineCellar Setting" component={MyWineCellarSetting} />
      <WineCellarStack.Screen
        name="MyWineCellar Registration"
        component={WineRegistrationNavigator}
      />
    </WineCellarStack.Navigator>
  );
};
