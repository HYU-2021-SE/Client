import { createStackNavigator } from '@react-navigation/stack';
import { ShareHome } from './ShareHome';
import {ShareWineCellar} from './ShareWineCellar';
import {MyWineTopsterMain} from './MyWineTopsterMain';
import React from 'react';


const Stack = createStackNavigator();

export const ShareNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ShareHome" component={ShareHome} />
      <Stack.Screen name="ShareWineCellar" component={ShareWineCellar} />
      <Stack.Screen name="MyWineTopsterMain" component={MyWineTopsterMain}/>
    </Stack.Navigator>
  );
};

