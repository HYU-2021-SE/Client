import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import LockScreen from './CellarLock';


class Inputs extends Component {
  state = {
    password: ""
  };
 
  handlePassword = text => {
    this.setState({ password: text });
  };
 
 
  login = (pass) => {
    alert("Your Lock Password :" + pass);
  };
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="  Set 6-digit password"
          secureTextEntry={true}
          placeholderTextColor="#707070"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.password)}
        >
          <Text style={styles.submitButtonText}>Save</Text>
        </TouchableOpacity> 
        <View style = {styles.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('CellarLock')}>
        <Ionicons name="arrow-back-outline" size={25} color = "#707070"/>
        </TouchableOpacity>
        <Text style = {styles.textt}>Back to Lock Main</Text>
        </View>
      </View>
    );
  }
}
 
export default Inputs;
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 230
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#707070",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#B52E58",
    padding: 10,
    margin: 10,
    height: 40
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  textt: {
      fontSize:15,
  },
  icon: {
      alignItems: "center",
      padding: 130,
  }
});
