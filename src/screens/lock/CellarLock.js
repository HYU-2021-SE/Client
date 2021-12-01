import React from 'react';
import Styled from 'styled-components';
import { RedButton } from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import { Image } from 'react-native';

export const LockScreen = () => {
  return (
    <SafeAreaView>
      <MainText> WineCellar Lock</MainText>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
      <TouchableOpacity>
        <RedButton text="Lock full floor" />
      </TouchableOpacity>
      <Text>or</Text>
      <Text>Lock floor-by-floor</Text>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FloorText>Wine Upper </FloorText>
          <TouchableOpacity>
            <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 6 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FloorText>Wine Middle </FloorText>
          <TouchableOpacity>
            <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 6 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FloorText>Wine Middle </FloorText>
          <TouchableOpacity>
            <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 6 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FloorText>Wine Lower </FloorText>
          <TouchableOpacity>
            <Image style={styles.stretch} source={require('../../assets/images/lockicon.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 6 }} />
      </View>
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
});

const MainText = Styled.Text`
  font-size: 40px;
  text-align: center;
  justifyContent: center;
  color: #B52E58;
`;

const Text = Styled.Text`
  font-size: 40px;
  text-align: center;
  justifyContent: center;
  line-height: 40px;
  padding: 5px;
  color: #707070;
`;
const FloorText = Styled.Text`
  font-size: 25px;
  text-align: left;
  line-height: 40px;
  padding: 30px;
  color: #707070;
`;

export default LockScreen;