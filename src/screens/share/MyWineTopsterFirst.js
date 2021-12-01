import React from 'react';
import Styled from 'styled-components';
import { SafeAreaView, View, Image, StyleSheet, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MyWineTopsterFirst = () => {
        return (
          <SafeAreaView>
          <MainText> Share my Wine Topster </MainText>
          <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
         </SafeAreaView>
      );


    }


const MainText = Styled.Text`
  font-size: 40px;
  text-align: center;
  justifyContent: center;
  color: #B52E58;
`;

const ContentsView = Styled.View`
flex: 20%;
`;

const Ctitle = Styled.Text`
font-size: 25px;
padding : 10px;
text-align: center;
justifyContent: center;
color: #707070;
`;

const CText = Styled.Text`
font-size: 20px;
text-align: center;
justifyContent: center;
color: #707070;
`;


export default MyWineTopsterFirst;  