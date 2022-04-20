// screens/UserDetailScreen.js

import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
const update_user = 'http://10.0.2.2:5001/sever-apinode/us-central1/app/api/update'
class UpdateUser extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      update_name: '',
      isLoading: true
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  async updateUser(item) {
    try {
      
      const requestBody = {
        item: item.item
      };

      this.props.navigation.navigate('UserScreen');
    }
    catch (error) {
      alert(error);
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
          <TextInput
            placeholder={'Update_Name'}
            value={this.state.update_name}
            onChangeText={(val) => this.inputValueUpdate(val, 'update_name')}
          />
        </View>
        <View>
          <Button
            title='Update'
            onPress={() => this.updateUser()}
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
  },
  button: {
    marginBottom: 7,
  }
})

export default UpdateUser;