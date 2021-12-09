import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Image } from 'react-native';
import { WinecellarHeader } from '../../components/Header';
import {useWinecellarDispatch, useWinecellarState} from '../../context/WinecellarContext';
import colors from '../../constants/colors';
import { winecellarApi } from '../../api/winecellarApi';

export const CellarLock = ({ navigation }) => {
  const [isSame, setIsSame] = useState(false);
  const [newPw, setNewPw] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const winecellar = useWinecellarState();
  const dispatch = useWinecellarDispatch();

  const onChangeNewPw = (e) => {
    const value = e.nativeEvent.text;
    setNewPw(value);
    setSame(value, checkPw);
  }

  const onChangeCheckPw = (e) => {
    const value = e.nativeEvent.text;
    setCheckPw(value);
    setSame(newPw, value);
  }

  const setSame = (newPassword, checkPassword) => {
    if (checkPassword === '' || newPassword === '') {
      return setIsSame(false);
    }
    return setIsSame(newPassword === checkPassword);
  }

  const setLock = async () => {
    if (!isSame) {
      Alert.alert("Not Allowed to Lock.");
      return;
    }
    const dto = {
      winecellarId: winecellar.winecellarId,
      lock: true,
      lockPassword: newPw,
      lightColor: winecellar.lightColor,
      nickName: winecellar.nickName,
      humidity: winecellar.humidity,
      temperature: winecellar.temperature,
    };
    await winecellarApi.update({ ...dto });
    dispatch({ type: 'UPDATE_WINECELLAR', data: dto });
    Alert.alert("Successfully locked!");
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <WinecellarHeader text='winecellar Lock'/>
        <View>
          <Info>Password Setting</Info>
          <InputBox>
            <PWText>Password</PWText>
            <Input secureTextEntry onChange={onChangeNewPw} />
          </InputBox>
          <InputBox>
            <PWText>Confirmation</PWText>
            <Input secureTextEntry onChange={onChangeCheckPw}/>
          </InputBox>
          <Text style={{color: colors.red}}>{isSame ? 'Passwords are same' : 'Passwords are not same'}</Text>
        </View>
        <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
        <Info>Lock WineCellar</Info>

        <TouchableOpacity onPress={setLock}>
        <View style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Lock Full Floor</Text>
        </View>
        </TouchableOpacity>
        <LockBox>
          <TouchableOpacity onPress={setLock}>
            <LockButtonBox>
              <FloorText>Lock</FloorText>
              <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
            </LockButtonBox>
          </TouchableOpacity>
          <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 5 }} />
          </LockBox>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  stretch: {
    width: 27,
    height: 38,
  },
  submitButton: {
    backgroundColor: '#B52E58',
    margin: 10,
    height: 50,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
      alignItems: 'center',
    marginLeft: 100,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

const Text = Styled.Text`
  font-size: 20px;
  text-align: center;
  justifyContent: center;
  line-height: 40px;
  padding: 3px;
  color: #707070;
`;

const Info = Styled.Text`
  font-size: 30px;
  text-align: center;
  justifyContent: center;
  color: '#707070';
  margin-bottom: 10px;
`;

const InputBox = Styled.View`
  display: flex;
  flex-direction: row;
`;

const PWText = Styled.Text`
  font-size: 24px;
  margin: 20px 20px;
  width: 150px;
`;

const Input = Styled.TextInput`
  border: 1px solid;
  margin: 20px 10px;
  width: 170px;
  z-index: 4;
`;

const LockButtonBox = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
`;

const FloorText = Styled.Text`
  font-size: 25px;
  line-height: 40px;
  padding: 30px;
  color: #707070;
`;

const LockBox = Styled.View`
backgroundColor: '#ffffff';
opacity: 0.8;
width: 300px;
margin: 40px;
borderColor: #707070;
borderWidth: 2;
width: 300;
borderRadius: 20;
`;

export default CellarLock;
