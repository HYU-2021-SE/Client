import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeNavigator } from './src/screens/welcome/WelcomeNavigator';
import { WineTab } from './src/screens/winecellar/WineTab';

const Stack = createStackNavigator();

const App = () => {
  setCustomText(customProps);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeNavigator} />
        <Stack.Screen name="Home" component={WineTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const customProps = {
  style: {
    fontFamily: 'MARUBuriBetaot-Regular',
    fontSize: 25,
  },
};

export default App;