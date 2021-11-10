import React from 'react';
import Styled from 'styled-components';
import { RedButton } from '../../components/Button';
import WineImage from '../../assets/images/mainwine.jpeg';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <TextCover>
        <Text>my</Text>
        <Text>smart</Text>
        <Text>wine cellar</Text>
      </TextCover>
      <Title>DIOnysoS</Title>
      <TouchableOpacity
        onPress={() => navigation.navigate('SelectScreen')}
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={WineImage} />
      </TouchableOpacity>
    </Container>
  );
};

export const SelectScreen = () => {
  return (
    <SelectorCover>
      <RedButton text="wine cellar registration" />
      <RedButton text={'go to \n My Winecellar'} />
    </SelectorCover>
  );
};

const Container = Styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  align-items: flex-end;
  justify-content: center;
  padding-right: 20px;
`;

const Text = Styled.Text`
  font-size: 40px;
  text-align: right;
  line-height: 40px;
`;

const TextCover = Styled.View`
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

const SelectorCover = Styled.View`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;
