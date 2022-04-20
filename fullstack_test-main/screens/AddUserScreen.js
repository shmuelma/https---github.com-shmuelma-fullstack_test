// screens/AddUserScreen.js

import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, View } from 'react-native';
const Add_user = 'http://10.0.2.2:5001/sever-apinode/us-central1/app/api/create';
class AddUserScreen extends Component {
  constructor(prpops) {
    super(prpops);
    this.state = {
      name: '',
    };
  }


  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  async saveItem() {
    let rjx = /[a-zA-Z]+$/
    let isvalid = rjx.test(this.state.name)
    console.warn(isvalid)
    if (!isvalid) {
      alert('the name is not leagle!')
    }
    else {
      try {
        const requestBody = {
          item: this.state.name
        };
        const createResponse =
          await fetch(Add_user, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)

          });
        alert('Success Add');
        // call select all to update the table
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder={'Name'}
            value={this.state.name}
            onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add User'
            onPress={() => this.saveItem()}
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AddUserScreen;