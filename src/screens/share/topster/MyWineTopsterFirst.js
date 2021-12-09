import React, { useState } from 'react';
import Styled from 'styled-components';
import { SafeAreaView, View, Button,  } from 'react-native';
import colors from '../../../constants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { WinecellarHeader } from '../../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const MyWineTopsterFirst = ({ navigation }) => {
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);

  const onIncreaseRow = () => {
    setRow(row + 1);
  };
  const onDecreaseRow = () => {
    if (row === 1) return;
    setRow(row - 1);
  };
  const onIncreaseColumn = () => {
    setColumn(column + 1);
  };
  const onDecreaseColumn = () => {
    if (column === 1) return;
    setColumn(column - 1);
  };

  return (
    <SafeAreaView>
      <WinecellarHeader text="Share my Wine Topster" />
      <View>
        <StepText>Step.1</StepText>
      </View>
      <ContentsView>
        <SelectBox>
          <SelectText>Rows  </SelectText>
          <TouchableOpacity onPress={onDecreaseRow}>
            <MaterialCommunityIcons name={'chevron-left'} size={30} color={colors.grey} />
          </TouchableOpacity>
          <Number>{row}</Number>
          <TouchableOpacity onPress={onIncreaseRow}>
            <MaterialCommunityIcons name={'chevron-right'} size={30} color={colors.grey} />
          </TouchableOpacity>
        </SelectBox>
        <SelectBox>
          <SelectText>Columns  </SelectText>
          <TouchableOpacity onPress={onDecreaseColumn}>
            <MaterialCommunityIcons name={'chevron-left'} size={30} color={colors.grey} />
          </TouchableOpacity>
          <Number>{column}</Number>
          <TouchableOpacity onPress={onIncreaseColumn}>
            <MaterialCommunityIcons name={'chevron-right'} size={30} color={colors.grey} />
          </TouchableOpacity>
        </SelectBox>
      </ContentsView>
      <TouchableOpacity onPress={() => navigation.navigate('MyWineTopsterSecond', { row, column })}>
        <Button title="Go" color={'#b52f59'}>Go</Button>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const StepText = Styled.Text`
  color: #707070;
  text-align: left;
  padding: 20px 20px 0px 20px,
  font-size: 30px;
`;

const ContentsView = Styled.View`
  display: flex;
  height:300;
  width: 300;
  margin: 40px;
  padding: 20px;
  justify-content: space-evenly
  border-color: ${colors.grey};
  border-width: 2px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

`;

const Number = Styled.Text`
  font-size: 25px;
  padding : 10px;
  text-align: center;
  color: #707070;
  width: 80px;
`;

const SelectText = Styled.Text`
  font-size: 24px;
  border-color: ${colors.grey};
  margin: auto 0;
  width: 120px;
`;

const SelectBox = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
