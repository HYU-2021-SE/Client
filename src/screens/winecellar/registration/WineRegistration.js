import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WinecellarHeader } from '../../../components/Header';
import { imageUploadApi } from '../../../api/uploadApi';
import { defineLabelApi } from '../../../api/wineDefinitionApi';

const WineRegistration = ({ navigation, route }) => {
  const [imgUrl, setImgUrl] = useState('');

  const onTake = async (value) => {
    setImgUrl(value);
    await getLabel(value);
  };

  const getLabel = async (url) => {
    const response = await imageUploadApi.upload(url);
    const img = response.data;
    const labelResponse = await defineLabelApi.define(url);
    const label = labelResponse.data.results[0].entities;
    goNextPage(img, label);
  };

  const goNextPage = (img, label) => {
    navigation.navigate('CheckLabel', { img: img, label: label, location: route.params.location });
  };

  return (
    <Container>
      <WinecellarHeader text="Wine Registration" />
      <TouchableOpacity onPress={() => navigation.navigate('Camera', { onTake: onTake })}>
        <BtnBox>
          <Image source={require('../../../assets/images/camera.png')} />
        </BtnBox>
      </TouchableOpacity>
    </Container>
  );
};

export default WineRegistration;

const Container = Styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Image = Styled.Image`
  width: 100;
  height: 100;
  margin: auto;
  height: 30;
  width: 40;

`;

const BtnBox = Styled.View`
  margin: 180px auto auto;
  background-color: #ffffff;

  borderTopLeftRadius: 20;
  borderTopRightRadius: 20;
  borderBottomLeftRadius: 20;
  borderBottomRightRadius: 20;
  justifyContent: center;
  alignItems: center;
  height: 100;
  width: 200;
  
`;
