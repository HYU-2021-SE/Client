import React from 'react';
import Styled from 'styled-components';
import { View } from 'react-native';

export const WinecellarHeader = (props) => {
  return (
    <Container>
      <Text>{props.text}</Text>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
    </Container>
  );
};

const Container = Styled.View`
  color: #a50034;
  padding: 30px 0;
  max-height: 100%;
`;

const Text = Styled.Text`
  color: #a50034;
  font-size: 40px;
  text-align: center;
  line-height: 40px;
`;
