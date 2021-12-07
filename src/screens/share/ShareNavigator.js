import { createStackNavigator } from '@react-navigation/stack';
import { ShareHome } from './ShareHome';
import { ShareWineCellar } from './ShareWineCellar';
import React from 'react';
import {MyWineTopsterNavigator} from './topster/MyWineTopsterNavigator';
import {HistoryNavigator} from './history/HistoryNavigator';

const Stack = createStackNavigator();

export const ShareNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ShareHome" component={ShareHome} />
      <Stack.Screen name="ShareWineCellar" component={ShareWineCellar} />
      <Stack.Screen name="History" component={HistoryNavigator} />
      <Stack.Screen name="MyWineTopsterMain" component={MyWineTopsterNavigator} />
    </Stack.Navigator>
  );
};
