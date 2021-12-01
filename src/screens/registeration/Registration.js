import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text } from 'react-native';
import { winecellarApi } from '../../api/winecellarApi';

export const Registration = ({ navigation }) => {
  const [serial, onChangeSerial] = useState('');
  const [winecellar, setWinecellar] = useState(undefined);
  const onClick = async () => {
    if (!serial) {
      return;
    }
    const response = await winecellarApi.create(serial);
    setWinecellar(response.data);
    console.log(response.data);

    navigation.navigate('Home');
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
