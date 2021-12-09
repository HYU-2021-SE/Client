import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const WinecellarRegistration = ({ navigation }) => {
  const [serial, onChangeSerial] = useState('');
  const onClick = () => {
    if (serial) {
      navigation.navigate('ValidationPage', {
        serialNo: serial,
        modelNo: 'LG Delicious wine cellar',
      });
    }
  };

  return (
    <SafeAreaView>
    <Container>
      <KeyboardAwareScrollView>
          <DisplayText>{'Wine Cellar\nRegistration'}</DisplayText>
          <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
        <SerialInputCover>
          <Text
            style={{
              textAlign: 'center',
              margin: 20,
              alignItems: 'center',
            }}>
            {'Enter \nserial number of \nyour wine cellar'}
          </Text>
          <InputBox>
            <TextInputCover keyboardType="default" value={serial} onChangeText={onChangeSerial} />
            <TouchableOpacity onPress={onClick}>
              <Button color={'#b52f59'} title="Enter" />
            </TouchableOpacity>
          </InputBox>
        </SerialInputCover>
      </KeyboardAwareScrollView>
    </Container>
    </SafeAreaView>
  );
};

const Container = Styled.View`
  height : 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;



const TextInputCover = Styled.TextInput`
  margin : 10px;
  border-width: 1px;
  border-radius: 20px;
  text-align: center;
  font-size: 25px;
  width: 150px;
`;

const DisplayText = Styled.Text`
  color: #b52f59;
  font-size: 40px;
  text-align: center;
  margin-top: 10px;
`;

const SerialInputCover = Styled.View`
  flex: 1;
  margin: auto;
  margin-top: 10px;
  backgroundColor: #ffffff;
  border-radius: 20px;
  width: 300px;
  height: 250px;
  margin: 130px auto;
  
  
`;

const InputBox = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto auto;
  align-items: center;
`;
