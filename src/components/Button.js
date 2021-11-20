import React from 'react';
import Styled from 'styled-components';

export const RedButton = (props) => {
  return (
    <Btn>
      <Text>{props.text}</Text>
    </Btn>
  );
};

const Btn = Styled.View`
  background-color: #a50034;
  color: #a50034;
  padding: 8px 34px;
  borderRadius: 34px;
  max-height: 100px;
`;

const Text = Styled.Text`
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  line-height: 40px;
`;
