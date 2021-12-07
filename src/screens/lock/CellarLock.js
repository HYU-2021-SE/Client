import React from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Image } from 'react-native';

export const CellarLock = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <MainText> WineCellar Lock</MainText>
        <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => Alert.alert('All the floor is locked successfully')}>
          <Text style={styles.submitButtonText}>Lock Full Floor</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <Text>Lock floor-by-floor</Text>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FloorText>Wine Upper </FloorText>
            <TouchableOpacity onPress={() => Alert.alert('Wine Upper is locked successfully')}>
              <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 6 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FloorText>Wine Middle </FloorText>
            <TouchableOpacity onPress={() => Alert.alert('Wine Middle is locked successfully')}>
              <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 6 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FloorText>Wine Middle </FloorText>
            <TouchableOpacity onPress={() => Alert.alert('Wine Middle is locked successfully')}>
              <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 6 }} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FloorText>Wine Lower </FloorText>
            <TouchableOpacity onPress={() => Alert.alert('Wine Lower is locked successfully')}>
              <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 6 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  stretch: {
    width: 27,
    height: 38,
    resizeMode: 'stretch',
    alignContent: 'flex-end',
  },
  submitButton: {
    backgroundColor: '#B52E58',
    margin: 10,
    height: 50,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

const MainText = Styled.Text`
  font-size: 40px;
  text-align: center;
  justifyContent: center;
  color: #B52E58;
`;

const Text = Styled.Text`
  font-size: 30px;
  text-align: center;
  justifyContent: center;
  line-height: 40px;
  padding: 3px;
  color: #707070;
`;
const FloorText = Styled.Text`
  font-size: 25px;
  text-align: left;
  line-height: 40px;
  padding: 30px;
  color: #707070;
`;

export default CellarLock;
