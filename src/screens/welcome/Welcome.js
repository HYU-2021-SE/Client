import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import WineImage from '../../assets/images/mainwine.jpeg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import dios from '../../assets/images/dios.png';
import { AsyncStorage, Button, Text, View} from 'react-native';

export const WelcomeScreen = ({ navigation }) => {
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then((token) => setToken(token));
  }, []);

  const navigate = () =>
    token ? navigation.navigate('SelectScreen') : navigation.navigate('LoginScreen');

  return (
    <Container>
      <Image source={dios} style = {{alignItems: 'center', resizeMode: 'contain',
    width: 180, margin: 20, top: -40,}}/>
      <TextCover>
        <TText>My</TText>
        <TText>Meta</TText>
        <TText>Wine Cellar</TText>
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
      <View style = {{backgroundColor:'white', width: 500, height: 150,top: -140, 
    }}>
      <Text style = {{textAlign: 'center', margin: 30, fontSize: 40, top: 20,
    justifyContent: 'center',}}>My DIOnysoS</Text>
      </View>
      <View style = {{padding: 40,}}>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
      <Text style = {{fontSize: 30, color: '#b52f59',}}> WineCellar </Text>
      <Text style = {{fontSize: 30, color: '#b52f59',}}>Registration</Text>
      </TouchableOpacity>
      </View>
      <View style = {{padding: 40,}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style = {{fontSize: 30, color: '#b52f59',
}}>       Go to </Text>
<Text style = {{fontSize: 30, color: '#b52f59',
}}>My WineCellar</Text>
      </TouchableOpacity>
      </View>
    </SelectorCover>
  );
};

const Container = Styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  padding-right: 20px;

`;

const TText = Styled.Text`
  font-size: 40px;
  text-align: right;
  line-height: 40px;
  padding: 5px;
  align-items: flex-end;
  justify-content: center;
`;

const TextCover = Styled.View`
  margin-top: auto;
  margin-right: 0;
  text-align: right;
  align-items: flex-end;
  justify-content: center;
`;

const Title = Styled.Text`
  font-size: 70px;
  line-height: 80px;  
  text-align: right;
  align-items: flex-end; 
  justify-content: center;
  padding-bottom: 10px;
`;

const Image = Styled.Image`
  width: 100%;
  height: 280px;
`;

const SelectorCover = Styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center; 

`;
