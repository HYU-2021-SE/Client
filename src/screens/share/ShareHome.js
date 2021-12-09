import React from 'react';
import Styled from 'styled-components';
import { SafeAreaView, View, StyleSheet, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../constants/colors';

export const ShareHome = ({ navigation }) => {
  return (
    <SafeAreaView>
      <MainText> Share</MainText>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
      
      <BView>
      <TouchableOpacity onPress={() => navigation.navigate('History')}>
      <Text style = {{fontSize: 30, color: '#b52f59',}}>            Share </Text>
      <Text style = {{fontSize: 30, color: '#b52f59',}}>   My Wine History</Text>
      </TouchableOpacity>
      </BView>
      <BView>
      <TouchableOpacity onPress={() => navigation.navigate('MyWineTopsterMain')}>
      <Text style = {{fontSize: 30, color: '#b52f59',}}>             Make</Text>
      <Text style = {{fontSize: 30, color: '#b52f59',}}>   My Wine Topster</Text>
      </TouchableOpacity>
      </BView>

    </SafeAreaView>
  );
};

const MainText = Styled.Text`
  font-size: 40px;
  text-align: center;
  justifyContent: center;
  color: #B52E58;
  padding-top: 20px;
`;

const BView = Styled.View`
  padding: 60px;
`;