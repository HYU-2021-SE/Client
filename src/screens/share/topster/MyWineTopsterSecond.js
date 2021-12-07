import React from 'react';
import Styled from 'styled-components';
import {SafeAreaView, Text, View} from 'react-native';
import { WinecellarHeader } from '../../../components/Header';
import { useWinecellarState } from '../../../context/WinecellarContext';
import { ScrollView } from 'react-native-gesture-handler';

export const MyWineTopsterSecond = ({ route }) => {
  const state = useWinecellarState();
  const labelList = state.wines.map(wine => wine.labelImage);
  const row = route.params.row;
  const column = route.params.column;
  const width = 270 / row;
  const height = 270 / column;

  return (
    <SafeAreaView>
      <WinecellarHeader text="Share my Wine Topster" />
      <View>
        <StepText>Step.2</StepText>
      </View>
      <ContentsView>
        {Array.from({ length: column }, (c, i) => i)
          .map((index) => {
            return (
              <Row>
              {Array.from( { length: row }, (r, i) => i)
              .map((i) =>
                <Box width={width} height={height}>
                  {labelList[index * row + i] ?
                    <Image width={width} height={height} source={{ url: labelList[index * row + i] }}/>
                    : <Text>empty</Text>
                  }
                </Box>
              )}
            </Row>)
        })}
      </ContentsView>
      <ScrollView horizontal>
        {labelList.map((label, i) => <LabelImage key={i} source={{ url: label }} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

const Box = Styled.View`
  border: 1px solid;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Image = Styled.Image`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Row = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 270px;
`;

const StepText = Styled.Text`
  color: #707070;
  text-align: left;
  padding: 30px 30px 0px 30px;
  font-size: 30px;
`;

const ContentsView = Styled.View`
  display: flex;
  height: 280px;
  width: 280px;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
`;

const LabelImage = Styled.Image`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
`;
