import React, { useState, useEffect } from 'react';
import colors from '../../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useWinecellarDispatch, useWinecellarState } from '../../context/WinecellarContext';
import { winecellarApi } from '../../api/winecellarApi';

export const MyWineCellar = ({ navigation }) => {
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
    console.log(state);
    setWinecellar(state);
  }, [state]);

  const floor = winecellar.type ? winecellar.type.floor : 1;

  const RenderWineImage = ({ item }) => {
    return (
      <View style={styles.wineWrapper}>
        <TouchableOpacity>
          <Image source={item.image} style={styles.wineImage} />
        </TouchableOpacity>
        <Text style={styles.wineName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 (와인셀러) */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My WineCellar</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MyWineCellar Setting', {
              nickName: winecellar.nickname ? winecellar.nickname : winecellar.type,
              floor,
            })
          }>
          <MaterialCommunityIcons name="set-all" size={30} />
        </TouchableOpacity>
      </View>

      {/* 와인 선반 */}
      <View style={styles.wineListWrapper}>
        {Array.from({ length: floor }, (v, i) => i).map((index) => (
          <View key={index} contentContainerStyle={styles.wineList}>
            <View style={styles.wineListHeader}>
              <Text style={styles.wineListHeaderText}>Floor {index + 1}</Text>
            </View>
            {winecellar.wines ? (
              <FlatList
                horizontal
                data={winecellar.wines.map((wine) => wine.location === index + 1)}
                renderItem={({ item }) => <RenderWineImage item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
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
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
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
    flex: 9,
    padding: 10,
  },
  wineList: {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  wineListHeader: {
    paddingTop: 20,
    paddingLeft: 20,
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
  wineImage: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },
  wineName: {
    fontSize: 15,
    padding: 2,
  },
});
