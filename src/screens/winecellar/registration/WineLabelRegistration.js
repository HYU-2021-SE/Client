import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WinecellarHeader } from '../../../components/Header';
import colors from '../../../constants/colors';
import { RedButton } from '../../../components/Button';
import CalendarPicker from 'react-native-calendar-picker';
import { useWinecellarState } from '../../../context/WinecellarContext';
import { wineApi } from '../../../api/wineApi';

const WineLabelRegistration = ({ navigation, route }) => {
  const img = route.params.img;
  const label = route.params.label;
  const labelData = label[0].classes;
  const [name, setName] = useState(JSON.stringify(labelData).split('"')[1]);
  const v = name.split(' ')[name.split(' ').length - 1];
  const [vintage, setVintage] = useState(isNaN(v) ? ' ' : v);
  const [purchasedDate, setDate] = useState(new Date());

  const state = useWinecellarState();

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
      location: 1,
      labelImage: img,
      vintage: vintage,
      purchaseDate: purchasedDate,
      producedDate: undefined,
    });

    console.log(response);
    navigation.navigate('MyWineCellar Home');
  };

  return (
    <Container>
      <WinecellarHeader text="Wine Registration" />
      <Box>
        <Title>Name</Title>
        <TextInput placeholder={name} onChangeText={onChangeName} value={name} />
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
          <RedButton text={'Save'} />
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
`;

const Title = Styled.Text`
  color: ${colors.wine};
  fontSize: 35px;
  margin: 0 20px 20px 20px;
`;

const TextInput = Styled.TextInput`
  fontSize: 18px;
  borderColor: ${colors.grey};
  borderWidth: 1px;
  borderRadius: 10px;
  margin: 10px;
`;
