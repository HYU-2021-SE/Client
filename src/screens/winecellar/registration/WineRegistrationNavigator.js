import { createStackNavigator } from '@react-navigation/stack';
import Camera from '../../../utils/Camera';
import React from 'react';
import WineRegistration from './WineRegistration';
import CheckLabel from './CheckLabel';
import WineLabelRegistration from './WineLabelRegistration';

const WineRegistrationNav = createStackNavigator();

export const WineRegistrationNavigator = () => {
  return (
    <WineRegistrationNav.Navigator screenOptions={{ headerShown: false }}>
      <WineRegistrationNav.Screen name="Registration" component={WineRegistration} />
      <WineRegistrationNav.Screen name="CheckLabel" component={CheckLabel} />
      <WineRegistrationNav.Screen name="LabelRegistration" component={WineLabelRegistration} />
      <WineRegistrationNav.Screen name="Camera" component={Camera} />
    </WineRegistrationNav.Navigator>
  );
};
