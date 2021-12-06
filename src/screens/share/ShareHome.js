import React from 'react';
import Styled from 'styled-components';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { RedButton } from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const ShareHome = ({ navigation }) => {
  return (
    <SafeAreaView>
      <MainText> Share</MainText>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
      <View style={BView.case1}>
        <TouchableOpacity onPress={() => navigation.navigate('ShareWineCellar')}>
          <RedButton text="Share my WineCellar" />
        </TouchableOpacity>
      </View>
      <View style={BView.case2}>
        <TouchableOpacity>
          <RedButton text="Share my Wine History" />
        </TouchableOpacity>
      </View>
      <View style={BView.case3}>
        <TouchableOpacity onPress={() => navigation.navigate('MyWineTopsterMain')}>
          <RedButton text="Make my Wine Topster" />
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

const BView = StyleSheet.create({
  case1: {
    height: '30%',
  },
  case2: {
    height: '30%',
  },
  case3: {
    height: '30%',
  },
});
