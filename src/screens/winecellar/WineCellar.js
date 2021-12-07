import React, { useEffect, useRef, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Image,
  Linking,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useWinecellarDispatch, useWinecellarState } from '../../context/WinecellarContext';
import { winecellarApi } from '../../api/winecellarApi';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
import Styled from 'styled-components';
import colors from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { WinecellarHeader } from '../../components/Header';

export const MyWineCellar = ({ navigation }) => {
  const viewRef = useRef();
  const [showInstagramStory, setShowInstagramStory] = useState(false);
  const state = useWinecellarState();
  const dispatch = useWinecellarDispatch();

  const [winecellar, setWinecellar] = useState(state);
  const fetch = async () => {
    const newWinecellar = await winecellarApi.get();
    dispatch({ type: 'GET_WINECELLAR', data: newWinecellar.data });
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    setWinecellar(state);
  }, [state]);

  const floor = winecellar.type ? winecellar.type.floor : 1;

  const setOsConfig = async () => {
    if (Platform.OS === 'ios') {
      Linking.canOpenURL('instagram://')
        .then((res) => (res ? setShowInstagramStory(true) : setShowInstagramStory(false)))
        .catch(() => setShowInstagramStory(false));
    } else {
      Share.isPackageInstalled('com.instagram.android')
        .then(({ isInstalled }) => setShowInstagramStory(isInstalled))
        .catch((err) => console.error(err));
    }
  };

  const ShareImages = async () => {
    await setOsConfig();
    try {
      const uri = await captureRef(viewRef, { format: 'png', quality: 0.7 });
      if (showInstagramStory) {
        await Share.shareSingle({
          stickerImage: uri,
          method: Share.InstagramStories.SHARE_STICKER_IMAGE,
          social: Share.Social.INSTAGRAM_STORIES,
          backgroundBottomColor: 'white',
          backgroundTopColor: 'white',
        });
      } else {
        Share.open({ url: uri })
          .then((res) => console.log(res))
          .catch();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const RenderWineImage = (item) => {
    return (
      <View style={styles.wineWrapper}>
        <TouchableOpacity>
          <Image source={{ url: item.wine.labelImage }} style={styles.wineImage} />
        </TouchableOpacity>
        <Text style={styles.wineName}>{item.wine.wineName}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} ref={viewRef}>
      {/* 헤더 (와인셀러) */}
      <View style={styles.header}>
        <WinecellarHeader text="My WineCellar" underBar={false} />
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 23 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MyWineCellar Setting', {
                nickName: winecellar.nickName ? winecellar.nickName : winecellar.type,
                floor,
              })
            }>
            <MaterialCommunityIcons name="cog" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={ShareImages}>
            <Ionicons name="share-social-outline" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      {/* 와인 선반 */}
      <View style={styles.wineListWrapper}>
        {Array.from({ length: floor }, (v, i) => i).map((index) => (
          <View key={index} contentContainerStyle={styles.wineList}>
            <View style={styles.wineListHeader}>
              <Text style={styles.wineListHeaderText}>Floor {index + 1}</Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MyWineCellar Registration', {
                    screen: 'Registration',
                    params: { location: index + 1 },
                  })
                }>
                <AddButton>
                  <Image style={styles.icon} source={require('../../assets/images/add.png')} />
                </AddButton>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView} horizontal={true}>
              {winecellar.wines
                ? winecellar.wines
                  .filter((wine) => wine.location === index + 1)
                  .map((w) => (
                    <View key={w.wineId}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Wine Information', {
                            image: w.labelImage,
                            wine: w
                          });
                        }}>
                        <RenderWineImage wine={w} />
                      </TouchableOpacity>
                    </View>
                  ))
                : null}
            </ScrollView>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  headerText: {
    color: colors.wine,
    fontSize: 35,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  tabNavigator: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wineListWrapper: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  wineList: {
    display: 'flex',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    height: 100,
  },
  wineListHeader: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wineListHeaderText: {
    fontSize: 25,
    fontWeight: '300',
  },
  wineWrapper: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  wineBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  wineImage: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
  wineName: {
    fontSize: 15,
    padding: 2,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

const AddButton = Styled.View`
  display: flex;
`;
