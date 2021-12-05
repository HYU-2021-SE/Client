import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WinecellarHeader } from '../../../components/Header';
import colors from '../../../constants/colors';

const WineLabelRegistration = ({ navigation, route }) => {
  const img = route.params.img;
  const label = route.params.label;
  const labelData = label[0].classes;
  console.log(labelData);

  const onChangeName = () => {};

  return (
    <Container>
      <WinecellarHeader text="Wine Registration" />
      <Box>
        <Title>Name</Title>
        <TextInput placeholder="asdf" onChangeText={onChangeName} value={'asdf'} />
      </Box>
      <Box>
        <Title>Vintage</Title>
        <TextInput placeholder="asdf" onChangeText={onChangeName} value={'asdf'} />
      </Box>
      <Box>
        <Title>Date of Purchase</Title>
        <TextInput placeholder="asdf" onChangeText={onChangeName} value={'asdf'} />
      </Box>
    </Container>
  );
};

export default WineLabelRegistration;

const Container = Styled.View`
  display: flex;
`;

const Box = Styled.View`
  display: flex;
  justify-content: space-between;
`;

const Title = Styled.Text`
  color: ${colors.wine};
  fontSize: 35;
  margin: 20;
`;

const TextInput = Styled.TextInput`
  fontSize: 18;
  padding: 10 20;
  borderColor: ${colors.grey};
  borderWidth: 1;
  borderRadius: 10;
`;
