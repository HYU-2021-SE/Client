import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import {SafeAreaView} from 'react-native';
import {TouchableOpacity } from 'react-native-gesture-handler';
const ShareInstagram = () => {
  const ShareInsta = async() => {
  const shareOptions = {
    message: '#LGwinecellar #MyWineCellar #DIOnyoS',
  }
  try {
    const ShareResponse = await Share.open(shareOptions);
  }
  catch(error) {
    console.log('Error =>', error);
  }};
return (
<SafeAreaView style = {{justifyContent: 'center', alignItems: 'center',
width: '100%', height: '180%',}}>
    <TouchableOpacity onPress = {ShareInsta}>
      <Ionicons name = "share-social-outline" size = {30}/>
    </TouchableOpacity>
</SafeAreaView>
);
};
