import React from 'react';
import Styled from 'styled-components';
import { SafeAreaView, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MyWineTopsterMain = ({ navigation }) => {
  return (
    <SafeAreaView>
      <MainText> My Wine Topster </MainText>
      <View style={{ borderBottomColor: '#707070', borderBottomWidth: 1, margin: 20 }} />
      <ContentsView>
        <Ctitle>Step 1.Set layout of topster.</Ctitle>
        <CText>You can set the rows, columns (n*n)</CText>
      </ContentsView>
      <ContentsView>
        <Ctitle>Step 2. Make wine topster.</Ctitle>
        <CText>
          You can make the collage {'\n'} based on the images of wine label {'\n'} which were saved
          in application before.
        </CText>
      </ContentsView>
      <ContentsView>
        <Ctitle>Step 3. Download & Share </Ctitle>
      </ContentsView>
      <ContentsView>
        <TouchableOpacity onPress={() => navigation.navigate('MyWineTopsterFirst')}>
          <Button title="Go" color={'#b52f59'}>Go</Button>
        </TouchableOpacity>
      </ContentsView>
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
  display: flex;
  margin: 20px;
 
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
