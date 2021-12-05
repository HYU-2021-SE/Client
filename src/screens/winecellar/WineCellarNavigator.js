import React from 'react';
import { MyWineCellar } from './WineCellar';
import { MyWineCellarSetting } from './WineCellarSetting';
import { WineInformation } from './WineInformation';
import { createStackNavigator } from '@react-navigation/stack';

const WineCellarStack = createStackNavigator();

export const WineCellarStackNavigator = () => {
  return (
    <WineCellarStack.Navigator screenOptions={{ headerShown: false }}>
      <WineCellarStack.Screen name="MyWineCellar Home" component={MyWineCellar} />
      <WineCellarStack.Screen name="MyWineCellar Setting" component={MyWineCellarSetting} />
      <WineCellarStack.Screen name="Wine Information" component={WineInformation} />
    </WineCellarStack.Navigator>
  );
};
