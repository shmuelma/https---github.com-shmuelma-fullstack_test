// screens/UserScreen.js

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, Button, View } from 'react-native';
import { ListItem } from 'react-native-elements'
const list_user = 'http://10.0.2.2:5001/sever-apinode/us-central1/app/api/read';
const delete_user = 'http://10.0.2.2:5001/sever-apinode/us-central1/app/api/delete/'

class UserScreen extends Component {
  constructor() {
    super();
    this.state = {
      userArr: [],

    };
  }
  async componentDidMount() {
    await this.selectAll()

  }

  async selectAll() {
    try {

      const output = await fetch(list_user);
      const outputJSON = await output.json();
      this.setState({ userArr: outputJSON })
    } catch (error) {
      alert(error);
    }
  }
  async deleteUser(item_id) {
    await fetch(delete_user + item_id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    this.selectAll();
  }

  render() {

    return (


      <ScrollView style={styles.container}>
        <View>
          <Button
            title='Add User'
            onPress={() => this.props.navigation.navigate('AddUserScreen')}
            color="#19AC52"
          />
          <Button
            title='Update User'
            onPress={() => this.props.navigation.navigate('UpdateUser')}
            color="#E37399"
          />
        </View>
        {

          this.state.userArr.map((item, i) => {
            return (
              <ListItem
                key={i}
                chevron
                bottomDivider
                title={item.item}
              >

                <Text> {item.item} </Text>
                <Button title="delete" onPress={() => this.deleteUser(item.id)}>

                </Button>

              </ListItem>
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 22
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

export default UserScreen;