import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SocialWebviewModal } from './SocialWebviewModal';
import { apiRequestUrl } from '../../../constants/constants';
import Styled from 'styled-components';

export const LoginScreen = () => {
  const [socialModalVisible, setSocialModalVisible] = useState(false);
  const [loginRequestUrl, setLoginRequestUrl] = useState(undefined);

  const closeSocialModal = () => {
    setSocialModalVisible(false);
  };

  const login = async () => {
    setSocialModalVisible(true);
    setLoginRequestUrl('http://' + apiRequestUrl + '/auth/login');
  };

  return (
    <Container>
      <View>
        {loginRequestUrl !== undefined ? (
          <SocialWebviewModal
            visible={socialModalVisible}
            source={loginRequestUrl}
            closeSocialModal={closeSocialModal}
          />
        ) : null}
        <TouchableOpacity onPress={login}>
          <Button>Sign up with Kakao</Button>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const Container = Styled.View`
  margin: auto;
`;

const Button = Styled.Text`
`;
