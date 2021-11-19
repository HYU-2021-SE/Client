import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { LockNavigator } from './src/screens/lock/LockNavigator';

const App = () => {
  setCustomText(customTextProps);
  return <LockNavigator/>
};

const customTextProps = {
  style: {
    fontFamily: 'MARUBuriBetaot-Regular',
    fontSize: 25,
  },
};

export default App;
