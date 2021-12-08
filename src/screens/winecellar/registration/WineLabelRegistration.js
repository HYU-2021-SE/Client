import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WinecellarHeader } from '../../../components/Header';
import colors from '../../../constants/colors';
import CalendarPicker from 'react-native-calendar-picker';
import {useWinecellarDispatch, useWinecellarState} from '../../../context/WinecellarContext';
import { wineApi } from '../../../api/wineApi';
import { Button } from 'react-native';
import {winecellarApi} from '../../../api/winecellarApi';

const WineLabelRegistration = ({ navigation, route }) => {
  const img = route.params.img;
  const label = route.params.label;
  const labelData = label[0].classes;
  const [name, setName] = useState(JSON.stringify(labelData).split('"')[1]);
  const v = name.split(' ')[name.split(' ').length - 1];
  const [vintage, setVintage] = useState(isNaN(v) ? ' ' : v);
  const [purchasedDate, setDate] = useState(new Date());

  const state = useWinecellarState();
  const dispatch = useWinecellarDispatch();

  const fetch = async () => {
    const newWinecellar = await winecellarApi.get();
    dispatch({ type: 'GET_WINECELLAR', data: newWinecellar.data });
  };

  const onChangeName = (value) => {
    setName(value);
  };

  const onChangVintage = (value) => {
    setVintage(value);
  };

  const onDateChange = (date) => {
    setDate(date);
  };

  const save = async () => {
    const response = await wineApi.create({
      winecellarId: state.winecellarId,
      wineName: name,
      location: route.params.location,
      labelImage: img,
      vintage: vintage,
      purchaseDate: purchasedDate,
      producedDate: undefined,
    });
    await fetch();
    navigation.navigate('MyWineCellar Home');
  };

  return (
    <Container>
      <WinecellarHeader text="Wine Registration" />
      <Box>
        <Title>Name</Title>
        <TextInput placeholder={ name} onChangeText={onChangeName} value={name} />
      </Box>
      <Box>
        <Title>Vintage</Title>
        <TextInput placeholder={vintage} onChangeText={onChangVintage} value={vintage} />
      </Box>
      <Box>
        <Title>Date of Purchase</Title>
        <CalendarPicker
          textStyle={{
            fontSize: 8,
          }}
          height={230}
          width={300}
          onDateChange={onDateChange}
        />
      </Box>
      <Box>
        <TouchableOpacity onPress={save}>
          <Button title = "Save"/>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default WineLabelRegistration;

const Container = Styled.View`
  display: flex;
`;

const Box = Styled.View`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const Title = Styled.Text`
  color: ${colors.wine};
  fontSize: 30px;
  margin: 5px 20px 10px 10px;
`;

const TextInput = Styled.TextInput`
  fontSize: 18px;
  borderColor: ${colors.grey};
  borderWidth: 1px;
  borderRadius: 20px;
  margin: 1px;
  height: 35px;
  width: 350px;
  padding: 10px;
`;

