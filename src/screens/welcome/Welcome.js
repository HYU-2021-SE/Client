import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import { RedButton } from '../../components/Button';
import WineImage from '../../assets/images/mainwine.jpeg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AsyncStorage } from 'react-native';

export const WelcomeScreen = ({ navigation }) => {
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then((token) => setToken(token));
  }, []);

  const navigate = () =>
    token ? navigation.navigate('SelectScreen') : navigation.navigate('LoginScreen');

  return (
    <Container>
      <TextCover>
        <Text>My</Text>
        <Text>Meta</Text>
        <Text>Wine Cellar</Text>
      </TextCover>
      <Title>DIOnysoS</Title>
      <TouchableOpacity
        onPress={navigate}
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={WineImage} />
      </TouchableOpacity>
    </Container>
  );
};

export const SelectScreen = ({ navigation }) => {
  return (
    <SelectorCover>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <RedButton text="wine cellar registration" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <RedButton text={'go to \n My Winecellar'} />
      </TouchableOpacity>
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
  font-size: 70px;
  line-height: 80px;
`;

const Image = Styled.Image`
  width: 100%;
  height: 280px;
`;

const SelectorCover = Styled.View`
  flex: 1;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;
