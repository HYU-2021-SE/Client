import React from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Alert, Button, Text } from 'react-native';
import { winecellarApi } from '../../api/winecellarApi';

export const ValidationPage = ({ route, navigation }) => {
  const okay = () => {
    if (!serialNo) {
      return;
    }
    winecellarApi
      .create(serialNo)
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('유효하지 않은 번호입니다.');
        navigation.navigate('WinecellarRegistration');
      });
  };
  const { serialNo } = route.params;
  const { modelNo } = route.params;
  const retry = () => {
    navigation.navigate('WinecellarRegistration');
  };

  return (
    <Container>
      <KeyboardAwareScrollView>
        <TextCover>
          <DisplayText>{'Winecellar\nRegistration'}</DisplayText>
        </TextCover>
        <SerialConfirmCover>
          <Text
            style={{
              textAlign: 'center',
              margin: 20,
            }}>
            {'Check Your Information'}
          </Text>
          <ConfirmCover>
            <ConfirmTextCover>Serial Number</ConfirmTextCover>
            <Text
              style={{
                textAlign: 'center',
                margin: 'auto',
              }}> {'\n'}
              {serialNo}
            </Text>
          </ConfirmCover>
          <ConfirmCover>
            <ConfirmTextCover>Model Name</ConfirmTextCover>
            <Text
              style={{
                textAlign: 'center',
                margin: 'auto',
              }}>{'\n'}
              {modelNo}
            </Text>
          </ConfirmCover>
        </SerialConfirmCover>
        <ButtonContainer>
          <TouchableOpacity onPress={okay}>
            <Button color={'#b52f59'} title="Okay" />
          </TouchableOpacity>
          <TouchableOpacity onPress={retry}>
            <Button color={'#b52f59'} title="Try Again" />
          </TouchableOpacity>
        </ButtonContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const Container = Styled.View`
  height : 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const DisplayText = Styled.Text`
  color: #b52f59;
  font-size: 40px;
  text-align: center;
  margin-bottom: 24px;
  padding: 10px;
`;

const TextCover = Styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: black;
  margin-top: 40px;
`;

const SerialConfirmCover = Styled.View`
  flex: 1;
  margin: auto;
  margin-top: 10px;
`;

const ConfirmCover = Styled.View`
  flex: 1;
  margin-top: 48px;
  backgroundColor: #ffffff;
  width: 330;
  height: 150;
  borderRadius: 15;
`;

const ConfirmTextCover = Styled.Text`
  font-size : 33px;
  font-weight: bold;
  text-align : center; 

  margin-top: 20px;
`;

const ButtonContainer = Styled.View`
   margin-top: 48px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;
