import React from 'react';
import Styled from 'styled-components';
import { SafeAreaView, View, Image, StyleSheet, Text, Button } from 'react-native';

export const MyWineTopsterFirst = () => {
  return (
    <SafeAreaView>
      <MainText> Share my Wine Topster </MainText>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
      <View>
        <Text style={textx.title}>Step.1</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          height: 300,
          width: 300,
          margin: 40,
          borderColor: '#707070',
          borderWidth: 2,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}></View>
    </SafeAreaView>
  );
};

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

const textx = StyleSheet.create({
  container: {
    paddingTop: 230,
  },
  title: {
    color: '#707070',
    textAlign: 'left',
    padding: 30,
    fontSize: 30,
  },
});
