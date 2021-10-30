import React from 'react';
import Styled from 'styled-components/native';
import { Text } from 'react-native';

const App = () => {
  return (
    <Container>
      <Text>시작 페이지임</Text>
    </Container>
  );
};

const Container = Styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default App;
