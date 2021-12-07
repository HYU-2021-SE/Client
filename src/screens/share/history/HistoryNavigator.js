import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CorkHistory from './CorkHistory';
import ReceiptHistory from './ReceiptHistory';

const Stack = createStackNavigator();

export const HistoryNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cork" component={CorkHistory} />
      <Stack.Screen name="Receipt" component={ReceiptHistory} />
    </Stack.Navigator>
  );
};
