import React from "react";
import Styled from 'styled-components';
import colors from "../../assets/colors/colors";
import { useState, useEffect } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Dimensions,
    Button,
    FlatList,
    } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get("window");

export const MyWineCellarSetting = ({ navigation, route }) => {
    const [nickName, setNickName] = useState("");
    const onChangeText = (payload) => { setNickName(payload) };
    const floor = route.params.floor;
    
    useEffect(() => {
        loadNickName();
    }, [])

    const loadNickName = () => {
        setNickName(route.params.nickName);
    };
    
    const renderItem = ({ item }) => (
        <View style={styles.temperatureFloor}>
            <Text>{item.title}</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name={'chevron-right'} size={30} color={colors.grey} />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>WineCellar Setting</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput 
                    placeholder="Nickname"
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={nickName}
                    returnKeyType="send"// 확인용
                />
            </View>

            <View style={styles.temperatureWrapper}>
                <View style={styles.controlTitle}>
                    <Text style={{...styles.headerText, fontSize: 25,}}>Temperature Control</Text>
                </View>
                <View style={styles.temperature}>
                    <FlatList
                        data={floor}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                    />
                </View>
            </View>

            <View style={styles.humidityWrapper}>
                <View style={styles.controlTitle}>
                    <Text style={{...styles.headerText, fontSize: 25,}}>Humidity Control</Text>
                </View>
                <View style={styles.humidity}>
                    <Text>75%</Text>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name={'chevron-right'} size={30} color={colors.grey} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        backgroundColor: "white",
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    controlTitle: {
        alignItems: "center",
        margin: 5,
    },
    temperatureWrapper: {
        flex: 1,
    },
    temperature: {
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 15,
        borderColor: colors.grey,
        borderWidth: 1,
        padding: 15, 
    },
    temperatureFloor: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    humidityWrapper: {
        flex: 1,
    },
    humidity: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 15,
        borderColor: colors.grey,
        borderWidth: 1,
    },  
});
