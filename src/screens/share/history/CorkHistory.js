import React from 'react';
import { SafeAreaView } from 'react-native';
import colors from '../../../constants/colors';
import { WinecellarHeader } from '../../../components/Header';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useWinecellarState } from '../../../context/WinecellarContext';

const CorkHistory = ({ navigation }) => {
  const winecellar = useWinecellarState();
  const wines = winecellar.wines.filter(wine => wine.location === -1);

  return (
    <SafeAreaView>
      <WinecellarHeader text="Share my Wine History"/>
      <SelectorBox>
        <Selector color={colors.red}>Cork</Selector>
        <TouchableOpacity onPress={() => navigation.navigate("Receipt")}>
          <Selector color={colors.grey}>Receipt</Selector>
        </TouchableOpacity>
      </SelectorBox>
      <CorkContainer>
        <CorkBox>
          {wines.map(wine => <Cork key={wine.wineId} source={{ uri: wine.corkImage }}/>)}
        </CorkBox>
        <TagBox>
          <Tag>#LGwinecellar #MyWineCellar</Tag>
          <Tag>#DIOnyoS</Tag>
        </TagBox>
      </CorkContainer>
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
  font-size: 30px;
  color: ${props => props.color};
`;

const CorkContainer = Styled.View`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 300px;
  height: 400px;
  margin: 20px auto auto;
  padding: 10px;
`;

const Cork = Styled.Image`
  width: 80px;
  height: 80px;
`;

const CorkBox = Styled.View`
  display: flex;
  flex-direction: row;
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
