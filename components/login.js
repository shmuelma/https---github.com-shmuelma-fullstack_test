// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';


export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailerror: '',
      passworderror: '',
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  emailValodator = () => {
    if (this.state.email == "") {
      this.setState({ emailerror: "email field can not be empty" })
    }

  }
  passwordValodator = () => {
    if (this.state.password == "") {
      this.setState({ passworderror: "password field can not be empty" })
    }
    if (this.state.password.length < 8) {
      this.setState({ passworderror: "password must be length least 8 digits" })
    }
  }
  userLogin = () => {
    let rjx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isvalid = rjx.test(this.state.email)
    console.warn(isvalid)

    if (!isvalid) {
      this.setState({ emailerror: "email syntax illegal" })

    }
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    }

    else {
      auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          this.setState({
            email: '',
            password: '',
            emailerror: '',
            passworderror: ''
          })
          alert('User logged-in successfully!')
          this.props.navigation.navigate('UserScreen')
        })
        .catch(error => alert(error.message))

    }
  }
  render() {

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          onBlur={() => this.emailValodator()}
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <Text style={{ color: 'red' }}>{this.state.emailerror}</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onBlur={() => this.passwordValodator()}
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={8}
          secureTextEntry={true}
        />
        <Text style={{ color: 'red' }}>{this.state.passworderror}</Text>
        <Button
          color="#3740FE"
          title="Signin"
          onPress={() => this.userLogin()}
        />

        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('signup')}>
          Don't have account? Click here to signup
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});