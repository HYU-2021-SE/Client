import React  from 'react';
import { useWinecellarState } from '../../context/WinecellarContext';
import Styled from 'styled-components';
import { RedButton } from '../../components/Button';
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
          <TouchableOpacity onPress={() => navigation.navigate("CellarLock")}>
            <RedButton text="YES"/>
          </TouchableOpacity>
          <RedButton text="NO"/>
        </ButtonBox>
      </TextBox> :
        <TextBox>
          <Text>Your winecellar is not locked.</Text>
          <Text>Do you want to lock the winecellar?</Text>
          <ButtonBox>
            <TouchableOpacity onPress={() => navigation.navigate("CellarLock")}>
              <RedButton text="YES"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MyWineCellar Home")}>
              <RedButton text="NO"/>
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
`;

const Text = Styled.Text`
  font-size: 20px;
  padding-bottom: 20px;
`;

const ButtonBox = Styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
`;
