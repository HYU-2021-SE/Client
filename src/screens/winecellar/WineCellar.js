import React, { useState, useContext } from 'react';
import inMyWineCellar from '../../assets/data/inMyWineCellar';
import colors from '../../assets/colors/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useWinecellarDispatch,
  useWinecellarState,
  WinecellarDispatch,
  WinecellarState,
} from '../../context/WinecellarContext';

const { height, width } = Dimensions.get('window');

export const MyWineCellar = ({ navigation }) => {
  const state = useWinecellarState();
  const dispatch = useWinecellarDispatch();
  const [wineCellar, setWineCellar] = useState(inMyWineCellar);
  const [wine, setWine] = useState([]);

  console.log(state);

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
              nickName: wineCellar.nickname,
              floor: wineCellar.floor,
            })
          }>
          <MaterialCommunityIcons name="set-all" size={30} />
        </TouchableOpacity>
      </View>

      {/* 와인 선반 */}
      <View style={styles.wineListWrapper}>
        <SectionList
          contentContainerStyle={styles.wineList}
          sections={wineCellar.floor}
          renderSectionHeader={({ section }) => (
            <View>
              <View style={styles.wineListHeader}>
                <Text style={styles.wineListHeaderText}>{section.title}</Text>
              </View>
              <FlatList
                horizontal
                data={section.data}
                renderItem={({ item }) => <RenderWineImage item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          )}
          renderItem={({ item, section }) => {
            return null;
          }}
        />
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
