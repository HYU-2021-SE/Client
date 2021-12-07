import { createStackNavigator } from '@react-navigation/stack';
import { MyWineTopsterMain } from './MyWineTopsterMain';
import { MyWineTopsterFirst } from './MyWineTopsterFirst';
import React from 'react';
import { MyWineTopsterSecond } from './MyWineTopsterSecond';

const Stack = createStackNavigator();

export const MyWineTopsterNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyWineTopsterMain" component={MyWineTopsterMain} />
      <Stack.Screen name="MyWineTopsterFirst" component={MyWineTopsterFirst} />
      <Stack.Screen name="MyWineTopsterSecond" component={MyWineTopsterSecond} />
    </Stack.Navigator>
  );
};
