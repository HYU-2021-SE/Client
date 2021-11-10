import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { MainNavigator } from './src/screens/main/MainNavigator';

const App = () => {
  setCustomText(customTextProps);
  return <MainNavigator />;
};

const customTextProps = {
  style: {
    fontFamily: 'MaruBuri',
    fontSize: 25,
  },
};

export default App;
