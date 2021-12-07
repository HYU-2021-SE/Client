import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import colors from '../../../constants/colors';
import { WinecellarHeader } from '../../../components/Header';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ReceiptHistory = ({ navigation }) => {
  return (
    <SafeAreaView>
      <WinecellarHeader text="Share my Wine History"/>
      <SelectorBox>
        <TouchableOpacity onPress={() => navigation.navigate("Cork")}>
          <Selector color={colors.grey}>Cork</Selector>
        </TouchableOpacity>
      <Selector color={colors.red}>Receipt</Selector>
      </SelectorBox>
      <Text>영수증</Text>
    </SafeAreaView>
  );
};

export default ReceiptHistory;

const SelectorBox = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Selector = Styled.Text`
  font-size: 30px;
  color: ${props => props.color};
`;
