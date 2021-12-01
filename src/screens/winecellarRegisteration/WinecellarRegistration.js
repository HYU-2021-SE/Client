import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Alert, Button, Text } from 'react-native';

export const WinecellarRegistration = ({ navigation }) => {
  const [serial, onChangeSerial] = useState('');
  const onClick = () => {
    if (serial) {
      Alert.alert('Found Serial Number');
      navigation.navigate('ValidationPage', {
        serialNo: serial,
        modelNo: 'LG Delicious wine cellar',
      });
    }
    //todo
    // 시리얼넘버를 입력값으로 하고, 해당 시리얼넘버가 디비에 있으면
    // -> 시리얼 넘버와 모델명을 Response.data로 가져옴
    // 만약에 시리얼넘버가 디비에 없으면
    // -> 해당 시리얼 넘버는 존재하지 않는다는 알람 띄우고 다시 입력하게 하기
  };

  return (
    <Container>
      <KeyboardAwareScrollView>
        <TextCover>
          <DisplayText>{'Wine Cellar\nRegistration'}</DisplayText>
        </TextCover>
        <SerialInputCover>
          <Text
            style={{
              textAlign: 'center',
              margin: 'auto',
            }}>
            {'enter the serial number\nof your wine cellar'}
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
  );
};

const Container = Styled.View`
  height : 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const TextCover = Styled.View`
  flex: 1;
  border-bottom-width: 2px;
  border-bottom-color: black;
  margin-top: 48px;
`;

const TextInputCover = Styled.TextInput`
  margin : 10px;
  border-width: 2px;
  border-radius: 34px;
  text-align: center;
  font-size: 30px;
  width: 200px;
`;

const DisplayText = Styled.Text`
  color: #b52f59;
  font-size: 40px;
  text-align: center;
  margin-bottom: 24px;
`;

const SerialInputCover = Styled.View`
  flex: 1;
  margin: auto;
  margin-top: 10px;
`;

const InputBox = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto auto;
  align-items: center;
`;
