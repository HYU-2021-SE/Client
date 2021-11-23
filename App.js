import React from 'react';
import { setCustomText } from 'react-native-global-props';
import { WelcomeNavigator } from './src/screens/welcome/WelcomeNavigator';

const App = () => {
  setCustomText(customProps);

  return <WelcomeNavigator />;
};

const customProps = {
  style: {
    fontFamily: 'MARUBuriBetaot-Regular',
    fontSize: 25,
  },
};

export default App;
