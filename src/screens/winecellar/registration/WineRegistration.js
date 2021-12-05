import React, { useState } from 'react';
import Styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WinecellarHeader } from '../../../components/Header';
import { imageUploadApi } from '../../../api/uploadApi';
import { defineLabelApi } from '../../../api/wineDefinitionApi';

const WineRegistration = ({ navigation }) => {
  const [imgUrl, setImgUrl] = useState('');

  const onTake = async (value) => {
    setImgUrl(value);
    await getLabel();
  };

  const getLabel = async () => {
    const response = await imageUploadApi.upload(imgUrl);
    const img = response.data;
    const labelResponse = await defineLabelApi.define(imgUrl);
    const label = labelResponse.data.results[0].entities;
    console.log(img);
    console.log(label);
    goNextPage(img, label);
    // navigation.navigate('CheckLabel');
  };

  const goNextPage = (img, label) => {
    navigation.navigate('CheckLabel', { img: img, label: label });
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
  width: 80;
  height: 80;
`;

const BtnBox = Styled.View`
  margin: auto;
`;
