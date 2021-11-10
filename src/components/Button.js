import React from 'react';
import Styled from 'styled-components';

export const Button = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

const View = Styled.View`
  background-color: #a50034;
  border-radius: 34px 34px 34px 34px;
  padding: 29px 34px;
`;

const Text = Styled.Text`
  color: #ffffff;
  font-size: 40px;
`;
