import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const LockInfo = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const login = () => {
    Alert.alert('Your Lock Password Saved:' + password);
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="  Set 6-digit password"
        secureTextEntry={true}
        placeholderTextColor="#707070"
        autoCapitalize="none"
        onChangeText={onChangePassword}
      />
      <TouchableOpacity style={styles.submitButton} onPress={login}>
        <Text style={styles.submitButtonText}>Save</Text>
      </TouchableOpacity>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('LockGate')}>
          <Ionicons name="arrow-back-outline" size={25} color="#707070" />
        </TouchableOpacity>
        <Text style={styles.text}>Wine Cellar Lock</Text>
      </View>
    </View>
  );
};

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
  text: {
    fontSize: 15,
  },
  icon: {
    alignItems: 'center',
    padding: 130,
  },
});
