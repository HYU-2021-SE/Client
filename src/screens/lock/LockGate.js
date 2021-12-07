import React from 'react';
import Styled from 'styled-components';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const LockGate = ({navigation}) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <MainText> WineCellar Lock </MainText>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }}/>
      <View style={{ height: 50 }}>
        <LTitle>Enter the 6-digit password</LTitle>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('CellarLock')}
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
