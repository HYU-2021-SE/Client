import React, {Component, useState} from 'react';
import CellarImage from '../../assets/images/miniCellar.jpg';
import CellarImageBig from '../../assets/images/largeCellar.jpg';
import Styled from 'styled-components';
import { RedButton } from '../../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet, Text, TextInput,View, Button,Alert, Image} from "react-native";


const width_proportion = '80%';

export const Registrantion = ({navigation}) =>{
    const [model, setModel] = useState(0);
    const [serial, onChangeSerial] = useState("");
    const onClick = () =>{
        //if serial is null
        if(serial == ""){
            Alert.alert("shibal");
            return;
        }
        //todo
        // 시리얼넘버를 입력값으로 하고, 해당 시리얼넘버가 디비에 있으면
        // -> 시리얼 넘버와 모델명을 Response.data로 가져옴
        // 만약에 시리얼넘버가 디비에 없으면
        // -> 해당 시리얼 넘버는 존재하지 않는다는 알람 띄우고 다시 입력하게 하기

    }
    return(

            <Container>
                <KeyboardAwareScrollView>
                <TextCover>
                    <TextBox>
                        <DisplayText>Wine Cellar</DisplayText>
                        <DisplayText>Registeration</DisplayText>
                    </TextBox>
                </TextCover>
                <SelectionCover>
                    <SelectText>Select the wine cellar</SelectText>
                    <SelectText>you purchased</SelectText>
                    <ButtonBox>
                        <TouchableOpacity
                            onPress={()=> {
                                setModel(1);
                            }}>
                            <WineImage source = {CellarImageBig}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> {
                                setModel(2);
                            }}>
                            <WineImage source = {CellarImage}/>
                        </TouchableOpacity>
                    </ButtonBox>
                </SelectionCover>

                <SerialInputCover>
                        <Text style={{textAlign : "center", margin : "auto"}}>enter the serial number</Text>
                        <Text style={{textAlign : "center", margin : "auto"}}>of your wine cellar</Text>
                    <InputBox>
                        <TextInputCover

                            //placeholder="  useless placeholder"
                            keyboardType="default"
                            value = {serial}
                            onChangeText = {onChangeSerial}
                        />
                        <TouchableOpacity>
                            <Button
                                //anonymous function
                                onPress={()=>{
                                    onClick();
                                }}
                                title= "Shibal"
                            />
                        </TouchableOpacity>
                    </InputBox>
                </SerialInputCover>
                </KeyboardAwareScrollView>
            </Container>

    );
};

const TextInputCover  = Styled.TextInput`
    margin-top : 10px;
    border-width: 2px;
    border-radius: 34;
    text-align: center;
`

const ButtonBox = Styled.View`
    padding-top: 30px;
    margin-bottom: auto;
    margin-top: auto;
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    
    
`
const WineImage = Styled.Image`
    width: 100px;
    height: 100px;
`
const Container = Styled.View`
   height : 100%;
   
   display: flex;
   flex-direction: column;
   background-color: white;
   
`;
const TextBox = Styled.View`
    margin: auto;
    padding-bottom: 20px;
`;

const TextCover = Styled.View`
    flex: 1;
    border-bottom-width: 2px;
    border-bottom-color: black;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`;

const DisplayText = Styled.Text`
    color : #b52f59;
    font-size: 35px;
    font-weight: 900;
    text-align : center; 
`;

const SelectionCover = Styled.View`
    flex: 2;
    display: flex;
    flex-direction: column;
    border-bottom-width: 2px;
    border-bottom-color: black;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`;

const SelectText = Styled.Text`
    font-size: 25px;
    font-weight: 500;
    text-align: center;
`

const SerialInputCover = Styled.View`
    flex: 1;
    width: 70%;
    margin:auto;
    margin-top: 10px;
`;

const InputBox = Styled.View`
   width: 70%;
`

const SubmitButton = Styled.Button`
    display : flex;
    flex-direction :  column;
    width: 10%;
`
