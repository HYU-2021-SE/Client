import React, { useState } from 'react';
import Styled from 'styled-components';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useWinecellarDispatch, useWinecellarState} from '../../context/WinecellarContext';
import {winecellarApi} from '../../api/winecellarApi';

export const LockGate = ({navigation}) => {
  const [password, setPassword] = useState('');
  const winecellar = useWinecellarState();
  const dispatch = useWinecellarDispatch();

  const unlock = async () => {
    if (password !== winecellar.lockPassword) {
      Alert.alert("Password is wrong");
      return;
    }
    const dto = {
      winecellarId: winecellar.winecellarId,
      lock: false,
      lockPassword: winecellar.lockPassword,
      lightColor: winecellar.lightColor,
      nickName: winecellar.nickName,
      humidity: winecellar.humidity,
      temperature: winecellar.temperature,
    };
    await winecellarApi.update({ ...dto });
    dispatch({ type: 'UPDATE_WINECELLAR', data: dto });
    Alert.alert("Successfully opend!");
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <MainText> WineCellar Lock </MainText>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }}/>
      <View style={{ height: 50 }}>
        <LTitle>Enter the password</LTitle>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={unlock}
        >
          <Text style={styles.submitButtonText}>Enter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
};

const MainText = Styled.Text`
  font-size: 40px;
  text-align: center;
  justifyContent: center;
  color: #B52E58;
`;

const LTitle = Styled.Text`
  font-size: 30px;
  text-align: center;
  justifyContent: center;
  color: '#707070';
`;

const ContentsView = Styled.View`
  flex: 20%;
`;


const styles = StyleSheet.create({
  container: {
    paddingTop: 230,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#707070',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#B52E58',
    padding: 10,
    margin: 10,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default LockGate;
