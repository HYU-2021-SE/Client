import React from 'react';
import Styled from 'styled-components';

export const RedButton = (props) => {
  const size = props.fontSize ?? '40px';
  return (
    <Btn>
      <Text size={size}>{props.text}</Text>
    </Btn>
  );
};

const Btn = Styled.View`
  background-color: #a50034;
  color: #a50034;
  padding: 8px 4px;
  borderRadius: 30px;
  max-height: 100%;
`;

const Text = Styled.Text`
  color: #ffffff;
  font-size: ${props => props.size}
  text-align: center;
  line-height: 40px;
`;
