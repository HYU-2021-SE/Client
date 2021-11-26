import React, { useEffect, useState } from 'react';
import { AsyncStorage, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SocialWebviewModal } from './SocialWebviewModal';
import { apiRequestUrl } from '../../../constants/constants';
import Styled from 'styled-components';

export const LoginScreen = ({ navigation }) => {
  const [socialModalVisible, setSocialModalVisible] = useState(false);
  const [loginRequestUrl, setLoginRequestUrl] = useState(undefined);
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then((token) => setToken(token));
  }, [socialModalVisible]);

  const closeSocialModal = () => {
    setSocialModalVisible(false);
  };

  const login = async () => {
    setSocialModalVisible(true);
    setLoginRequestUrl(apiRequestUrl + '/auth/login');
  };

  const onPress = () => (token ? navigation.navigate('SelectScreen') : login());

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
        <TouchableOpacity onPress={onPress}>
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
