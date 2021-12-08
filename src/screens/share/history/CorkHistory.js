import React, { useRef } from 'react';
import { SafeAreaView, Button } from 'react-native';
import colors from '../../../constants/colors';
import { WinecellarHeader } from '../../../components/Header';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useWinecellarState } from '../../../context/WinecellarContext';
import {captureRef} from 'react-native-view-shot';
import Share from 'react-native-share';


const CorkHistory = ({ navigation }) => {
  const corkRef = useRef(null);
  const winecellar = useWinecellarState();
  const wines = winecellar.wines.filter(wine => wine.location === -1);

  const shareImages = async () => {
    const uri = await captureRef(corkRef, { format: 'png', quality: 1, width: 330, height: 400 });
    Share.open({ url: uri })
      .then((res) => console.log(res))
      .catch();
  };

  return (
    <SafeAreaView>
      <WinecellarHeader text="Share my Wine History"/>
      <SelectorBox>
        <Selector color={colors.red}>Cork</Selector>
        <TouchableOpacity onPress={() => navigation.navigate("Receipt")}>
          <Selector color={colors.grey}>Receipt</Selector>
        </TouchableOpacity>
      </SelectorBox>
      <CorkContainer ref={corkRef}>
        <CorkBox>
          {wines.map(wine => <Cork key={wine.wineId} source={{ uri: wine.corkImage }}/>)}
        </CorkBox>
        <TagBox>
          <Tag>#LGwinecellar #MyWineCellar</Tag>
          <Tag>#DIOnyoS</Tag>
        </TagBox>
      </CorkContainer>
      <TouchableOpacity onPress={shareImages}>
        <Button title = "Share"/>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CorkHistory;

const SelectorBox = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Selector = Styled.Text`
  font-size: 18px;
  color: ${props => props.color};
`;

const CorkContainer = Styled.View`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 300px;
  height: 400px;
  margin: 10px auto 20px auto;
  padding: 10px;
`;

const Cork = Styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const CorkBox = Styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  padding-right: 20px;
  width: 300px;
  height: 330px;
`;

const TagBox = Styled.View`
  align-items: flex-end;
  width: 100%;
`;

const Tag = Styled.Text`
  text-align: left;
  color: ${colors.grey};
  font-size: 18px;
`;
