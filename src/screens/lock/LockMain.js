import React  from 'react';
import { useWinecellarState } from '../../context/WinecellarContext';
import Styled from 'styled-components';
import {Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LockApp = ({ navigation }) => {
  const state = useWinecellarState();
  const lock = state.lock;

  return (
    <Container>
      {lock ? <TextBox>
          <Text>Your winecellar is locked.</Text>
          <Text>Do you want to open the winecellar?</Text>
        <ButtonBox>
          <TouchableOpacity onPress={() => navigation.navigate("LockGate")}>
            <Button title="YES"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("MyWineCellar Home")}>
            <Button title="NO"/>
          </TouchableOpacity>
        </ButtonBox>
      </TextBox> :
        <TextBox>
          <Text>Your winecellar is not locked.</Text>
          <Text>Do you want to lock the winecellar?</Text>
          <ButtonBox>
            <TouchableOpacity onPress={() => navigation.navigate("CellarLock")}>
              <Button title="YES"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MyWineCellar Home")}>
              <Button title="NO"/>
            </TouchableOpacity>
          </ButtonBox>
        </TextBox>
      }
    </Container>
  );
};

export default LockApp;

const Container = Styled.View`
  display: flex;
  align-items: center;
  margin: auto;
`;

const TextBox = Styled.View`
  margin: auto;
  align-items: center;
  backgroundColor: #ffffff; 
  border-radius: 20px;
  opacity: 0.9;
  padding: 25px;

`;

const Text = Styled.Text`
  font-size: 20px;
  padding-bottom: 20px;
`;

const ButtonBox = Styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
  backgroundColor: #ffffff; 
  border-radius: 20px;
  opacity: 0.9;
  padding: 10px;
  
`;

