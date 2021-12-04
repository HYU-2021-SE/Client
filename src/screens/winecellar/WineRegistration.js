import React from 'react';
import Styled from 'styled-components';
import { WinecellarHeader } from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WineRegistration = ({ navigation }) => {
  return (
    <Container>
      <WinecellarHeader text="Wine Registration" />
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <BtnBox>
          <Image source={require('../../assets/images/camera.png')} />
        </BtnBox>
      </TouchableOpacity>
    </Container>
  );
};

export default WineRegistration;

const Container = Styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Image = Styled.Image`
  width: 80;
  height: 80;
`;

const BtnBox = Styled.View`
  margin: auto;
`;
