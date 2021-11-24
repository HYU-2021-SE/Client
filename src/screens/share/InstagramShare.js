import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const InstagramShare = () => {
  const shareInsta = async () => {
    const shareOptions = {
      message: '#LGwinecellar #MyWineCellar #DIOnyoS',
    };
    try {
      const response = await Share.open(shareOptions);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView
      style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '180%' }}>
      <TouchableOpacity onPress={shareInsta}>
        <Ionicons name="share-social-outline" size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
