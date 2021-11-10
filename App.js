import React from 'react';
import Styled from 'styled-components/native';
import { Text } from 'react-native';
import { setCustomText } from 'react-native-global-props';

const App = () => {
  setCustomText(customTextProps);
  return (
    <Container>
      <Text>calendar</Text>
      <Text>한글</Text>
    </Container>
  );
};

const customTextProps = {
  style: {
    fontFamily: 'MaruBuri',
  },
};

const Container = Styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default App;
