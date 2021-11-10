import React from 'react';
import Styled from 'styled-components';
import WineImage from '../assets/images/mainwine.jpeg';

export const Main = () => {
  return (
    <>
      <View>
        <Text>my</Text>
        <Text>smart</Text>
        <Text>wine cellar</Text>
      </View>
      <Title>DIOnysoS</Title>
      <Image source={WineImage} />
    </>
  );
};

const Text = Styled.Text`
  font-size: 40px;
  text-align: right;
  line-height: 40px;
`;

const View = Styled.View`
  margin-top: auto;
  margin-right: 0;
`;

const Title = Styled.Text`
  font-size: 80px;
  line-height: 80px;
`;

const Image = Styled.Image`
  width: 100%;
  height: 280px;
`;
