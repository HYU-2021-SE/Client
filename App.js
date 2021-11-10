import React from 'react';
import Styled from 'styled-components/native';
import { setCustomText } from 'react-native-global-props';
import { Main } from './src/screens/Main';

const App = () => {
  setCustomText(customTextProps);
  return (
    <Container>
      <Main />
    </Container>
  );
};

const customTextProps = {
  style: {
    fontFamily: 'MaruBuri',
    fontSize: 25,
  },
};

const Container = Styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  align-items: flex-end;
  justify-content: center;
  padding-right: 20px;
`;

export default App;
