import React, { useRef } from 'react';
import Styled from 'styled-components';
import { SafeAreaView, Text } from 'react-native';
import { WinecellarHeader } from '../../../components/Header';
import { useWinecellarState } from '../../../context/WinecellarContext';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { RedButton } from '../../../components/Button';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const MyWineTopsterSecond = ({ route }) => {
  const topsterRef = useRef(null);
  const state = useWinecellarState();
  const labelList = state.wines.map(wine => wine.labelImage);
  const row = route.params.row;
  const column = route.params.column;
  const width = 270 / row + 3;
  const height = 270 / column + 3;

  const shareImages = async () => {
    const uri = await captureRef(topsterRef, { format: 'png', quality: 1, width: 270, height: 270 });
    Share.open({ url: uri })
      .then((res) => console.log(res))
      .catch();
  };

  return (
    <SafeAreaView>
      <WinecellarHeader text="Share my Wine Topster" />
      <TitleBox>
        <StepText>Step.2</StepText>
        <TouchableOpacity onPress={shareImages}>
            <Ionicons name="share-social-outline" size={30} />
          </TouchableOpacity>
      </TitleBox>
      <ContentsView ref={topsterRef}>
        {Array.from({ length: column }, (c, i) => i)
          .map((index) => {
            return (
              <Row>
              {Array.from( { length: row }, (r, i) => i)
              .map((i) =>
                <Box width={width} height={height}>
                  {labelList[index * row + i] ?
                    <Image width={width} height={height} source={{ url: labelList[index * row + i] }}/>
                    : <Text>DIOnyoS
                    </Text>
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

const TitleBox = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 30px;
`;

const StepText = Styled.Text`
  color: #707070;
  text-align: left;
  font-size: 30px;
`;

const ContentsView = Styled.View`
  display: flex;
  height: 270px;
  width: 270px;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
`;

const Row = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 270px;
`;

const Box = Styled.View`
  border: 1px solid;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Image = Styled.Image`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const LabelImage = Styled.Image`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
`;
