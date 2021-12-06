import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useWinecellarDispatch, useWinecellarState } from '../../context/WinecellarContext';
import { RedButton } from '../../components/Button';
import Styled from 'styled-components';
import { winecellarApi } from '../../api/winecellarApi';
import colors from '../../constants/colors';

export const MyWineCellarSetting = () => {
  const state = useWinecellarState();
  const dispatch = useWinecellarDispatch();
  const [winecellar, setWinecellar] = useState(state);

  const [nickName, setNickName] = useState(winecellar.nickName);
  const [humidity, setHumidity] = useState(winecellar.humidity);
  const [temperature, setTemperature] = useState(winecellar.temperature);

  const update = async () => {
    const dto = {
      winecellarId: winecellar.winecellarId,
      lock: winecellar.lock,
      lockPassword: winecellar.lockPassword,
      lightColor: winecellar.lightColor,
      nickName,
      humidity,
      temperature,
    };
    await winecellarApi.update({ ...dto });
    dispatch({ type: 'UPDATE_WINECELLAR', data: dto });
  };

  const onChangeNickName = (text) => {
    setNickName(text);
  };

  const onIncreasesHumidity = () => {
    let newHumidity = humidity + 1;
    if (humidity >= 90) {
      newHumidity = humidity;
    }
    setHumidity(newHumidity);
  };

  const onDecreaseHumidity = () => {
    let newHumidity = humidity - 1;
    if (humidity <= 30) {
      newHumidity = humidity;
    }
    setHumidity(newHumidity);
  };

  const onIncreasesTemperature = () => {
    let newTemperature = temperature + 1;
    if (temperature >= 30) {
      newTemperature = temperature;
    }
    setTemperature(newTemperature);
  };

  const onDecreaseTemperature = () => {
    let newTemperature = temperature - 1;
    if (temperature <= 5) {
      newTemperature = temperature;
    }
    setTemperature(newTemperature);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WineCellar Setting</Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={{ ...styles.headerText, fontSize: 25 }}>Nickname</Text>
        <TextInput
          placeholder={nickName}
          style={styles.input}
          onChangeText={onChangeNickName}
          value={nickName}
          returnKeyType="send" // 확인용
        />
      </View>

      <View style={styles.temperatureWrapper}>
        <View style={styles.controlTitle}>
          <Text style={{ ...styles.headerText, fontSize: 25 }}>Temperature Control</Text>
        </View>
        <View style={styles.temperature}>
          <TouchableOpacity onPress={onDecreaseTemperature}>
            <MaterialCommunityIcons name={'chevron-left'} size={30} color={colors.grey} />
          </TouchableOpacity>
          <Text>{temperature} C°</Text>
          <TouchableOpacity onPress={onIncreasesTemperature}>
            <MaterialCommunityIcons name={'chevron-right'} size={30} color={colors.grey} />
          </TouchableOpacity>
          {/*<FlatList data={floor} renderItem={renderItem} keyExtractor={(item) => item.title} />*/}
        </View>
      </View>

      <View style={styles.humidityWrapper}>
        <View style={styles.controlTitle}>
          <Text style={{ ...styles.headerText, fontSize: 25 }}>Humidity Control</Text>
        </View>
        <View style={styles.humidity}>
          <TouchableOpacity onPress={onDecreaseHumidity}>
            <MaterialCommunityIcons name={'chevron-left'} size={30} color={colors.grey} />
          </TouchableOpacity>
          <Text>{humidity} %</Text>
          <TouchableOpacity onPress={onIncreasesHumidity}>
            <MaterialCommunityIcons name={'chevron-right'} size={30} color={colors.grey} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={update}>
        <SettingButton>
          <RedButton text="change" />
        </SettingButton>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    padding: 20,
  },
  headerText: {
    color: colors.wine,
    fontSize: 35,
    margin: 20,
  },
  input: {
    backgroundColor: 'white',
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 15,
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  controlTitle: {
    alignItems: 'center',
    margin: 5,
  },
  temperatureWrapper: {
    flex: 1,
  },
  temperature: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginHorizontal: 15,
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 10,
  },
  temperatureFloor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  humidityWrapper: {
    flex: 1,
  },
  humidity: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    borderColor: colors.grey,
    borderWidth: 1,
  },
});

const SettingButton = Styled.View`
  margin: 5px;
`;
