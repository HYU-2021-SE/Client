import React from 'react';
import Styled from 'styled-components';
import { RedButton } from '../../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CheckLabel = ({ navigation, route }) => {
  console.log(route.params);
  const img = route.params.img;
  const label = route.params.label;
  return (
    <Container>
      <LabelBox>
        <LabelImage source={img} />
      </LabelBox>
      <ButtonBox>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <RedButton text="Try again" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LabelRegistration', { img: img, label: label })}>
          <RedButton text="Use" />
        </TouchableOpacity>
      </ButtonBox>
    </Container>
  );
};

export default CheckLabel;

const Container = Styled.View`
  display: flex;
`;

const LabelBox = Styled.View`
  width: 100%;
`;

const LabelImage = Styled.Image`
  width: 300;
  height: 300;
`;

const ButtonBox = Styled.View`
  display: flex;
  justify-content: space-between;
  padding: 10 30;
`;
