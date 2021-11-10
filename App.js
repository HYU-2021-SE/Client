import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { WelcomeNavigator } from './src/screens/welcome/WelcomeNavigator';

const App = () => {
  setCustomText(customTextProps);
  return <WelcomeNavigator />;
};

const customTextProps = {
  style: {
    fontFamily: 'MaruBuri',
    fontSize: 25,
  },
};

export default App;
