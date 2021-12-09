import React, { useRef } from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import colors from '../../../constants/colors';
import { WinecellarHeader } from '../../../components/Header';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';
import { useWinecellarState } from '../../../context/WinecellarContext';

const ReceiptHistory = ({ navigation }) => {
  const receiptRef = useRef(null);
  const winecellar = useWinecellarState();
  const now = new Date();

  const shareImages = async () => {
    const uri = await captureRef(receiptRef, { format: 'png', quality: 1, width: 330, height: 400 });
    Share.open({ url: uri })
      .then((res) => console.log(res))
      .catch();
  };

  return (
    <SafeAreaView>
      <WinecellarHeader text="My Wine History"/>
      <SelectorBox>
        <TouchableOpacity onPress={() => navigation.navigate("Cork")}>
          <Selector color={colors.grey}>Cork</Selector>
        </TouchableOpacity>
      <Selector color={colors.red}>Receipt</Selector>
      </SelectorBox>
      <ReceiptContainer ref={receiptRef}>
        <ReceiptBox>
          <Text center>DIOnysoS</Text>
          <Text center fontSize='18px'>{now.toDateString()}</Text>
          <Text center>My Wine History</Text>
          <Text center>***********************</Text>
          <WineList>
            {winecellar.wines.map((wine, i) =>
              i < 5 ?
                <Text numberOfLines={1} ellipsizeMode="tail" fontSize='18px' marginBottom='5px'>{wine.wineName}</Text>
                : null
            )}
            <Text center fontSize='18px'>...</Text>
          </WineList>
          <Text center>***********************</Text>
          <Text center fontSize='18px'>Total            {winecellar.wines.length}</Text>
        </ReceiptBox>
        <TagBox>
          <Tag>#LGwinecellar #MyWineCellar</Tag>
          <Tag>#DIOnyoS</Tag>
        </TagBox>
      </ReceiptContainer>
      <TouchableOpacity onPress={shareImages}>
        <Button title = "Share" color={'#b52f59'}/>
      </TouchableOpacity>
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
  font-size: 18px;
  color: ${props => props.color};
`;

const ReceiptContainer = Styled.View`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 300px;
  height: 400px;
  margin: 10px auto 20px auto;
  padding: 10px;
`;

const ReceiptBox = Styled.View`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 330px;
  padding-right: 25px;
`;

const WineList = Styled.View`
  height: 160px;
`;

const Text = Styled.Text`
  font-size: ${props => props.fontSize ? props.fontSize : '24px'};
  text-align: ${props => props.center ? 'center' : 'left'};
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
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

