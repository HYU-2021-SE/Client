import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import colors from '../../constants/colors';
import {wineApi} from '../../api/wineApi';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AlertAsync from 'react-native-alert-async';
import {imageUploadApi} from '../../api/uploadApi';

export const WineInformation = ({ navigation, route }) => {
  const [wine, setWine] = useState(route.params.wine);
  const [imgUrl, setImgUrl] = useState('');

  const fetch = async () => {
    const response = await wineApi.get(route.params.wine.wineId);
    setWine(response.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  const drink = async () => {
    const drank = await AlertAsync(
      'Did you drink the wine?',
      '',
      [
        {text: 'Yes', onPress: () => true},
        {text: 'No', onPress: () => Promise.resolve(false)},
      ],
      {
        cancelable: true,
        onDismiss: () => false,
      },
    );
    if (!drank) return;

    const camera = await AlertAsync(
      'Do you want to take a cork image?',
      '',
      [
        {text: 'Yes', onPress: () => true},
        {text: 'No', onPress: () => Promise.resolve(false)},
      ],
      {
        cancelable: true,
        onDismiss: () => false,
      },
    );

    if (!camera) return;

    navigation.navigate('Camera', { onTake: onTake });
  };

  const onTake = async (value) => {
    setImgUrl(value);
    getCork();
  };

  const getCork = async () => {
    const response = await imageUploadApi.upload(imgUrl);
    const img = response.data;
    wineApi.update(wine.wineId, img);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerTextListWrapper}>
            <View style={styles.headerTextWrapper}>
              <Text style={styles.headerTextTitle}>Name</Text>
              <Text style={styles.headerText}>{wine.wineName}</Text>
            </View>
            <View style={styles.headerTextWrapper}>
              <Text style={styles.headerTextTitle}>Vintage</Text>
              <Text style={styles.headerText}>{wine.vintage}</Text>
            </View>
            <View style={styles.headerTextWrapper}>
              <Text style={styles.headerTextTitle}>Date of Purchase</Text>
              <Text style={styles.headerText}>{new Date(Date.parse(wine.purchaseDate)).toDateString()}</Text>
            </View>
          </View>
          <Image style={styles.wineImage} source={{ url: wine.labelImage }} />
        </View>

        {/* Summary */}
        <View style={styles.summaryWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Summary</Text>
          </View>
          <View style={styles.bodyTextListWrapper}>
            <View style={styles.bodyTextWrapper}>
              <Text style={styles.bodyTextTitle}>Region</Text>
              <Text style={styles.bodyText}>Wine Region</Text>
            </View>
            <View style={styles.bodyTextWrapper}>
              <Text style={styles.bodyTextTitle}>Grapes</Text>
              <Text style={styles.bodyText}>Which Grapes</Text>
            </View>
            <View style={styles.bodyTextWrapper}>
              <Text style={styles.bodyTextTitle}>Average Price</Text>
              <Text style={styles.bodyText}>Wine Price</Text>
            </View>
          </View>
        </View>

        <View style={{ ...styles.summaryWrapper }}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Information</Text>
          </View>
          <View style={styles.bodyTextListWrapper}>
            <View style={styles.bodyTextWrapper}>
              <Text style={styles.bodyTextTitle}>Tasting Notes</Text>
              <Text style={styles.bodyText}>Wine Taste</Text>
            </View>
            <View style={styles.bodyTextWrapper}>
              <Text style={styles.bodyTextTitle}>Food Paring</Text>
              <Text style={styles.bodyText}>Food</Text>
            </View>
            <View style={styles.bodyTextWrapper}>
              <Text style={styles.bodyTextTitle}>Management Method</Text>
              <Text style={styles.bodyText}>Wine Management</Text>
            </View>
            <View style={styles.bodyTextWrapper}>
              <Text style={styles.bodyTextTitle}>Recommended Glasses</Text>
              <Text style={styles.bodyText}>Which Glass</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={drink}>
            <Text style={styles.emptyText}>Empty?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 15,
  },
  wineImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginRight: 15,
  },
  headerTextListWrapper: {
    padding: 15,
    maxWidth: 250,
  },
  headerTextWrapper: {
    marginVertical: 2,
  },
  headerTextTitle: {
    fontSize: 25,
  },
  headerText: {
    fontSize: 20,
  },
  summaryWrapper: {
    flex: 1,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  titleWrapper: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  titleText: {
    color: colors.wine,
    fontSize: 30,
  },
  bodyTextListWrapper: {
    padding: 15,
  },
  bodyTextWrapper: {
    marginVertical: 2,
  },
  bodyTextTitle: {
    fontSize: 25,
  },
  bodyText: {
    fontSize: 20,
  },
  emptyText: {
    color: colors.red,
    paddingBottom: 20,
    paddingRight: 20,
    textAlign: 'right',
  }
});
