import React from 'react';
import { View } from 'react-native';
import Styled from 'styled-components';
import { WinecellarHeader } from '../../components/Header';

const WineRegistration = () => {
  return (
    <Container>
      <WinecellarHeader text="Wine Registration" />
      <View>
        <Image source={require('../../assets/images/camera.png')} />
      </View>
    </Container>
  );
};

export default WineRegistration;

const Container = Styled.View`
  display: flex;
  flex-direction: column;
`;

const Image = Styled.Image`
  width: 80;
  height: 80;
`;
