// <Button onPress={() => firebase.auth().signOut()}>
//   Log Out
//   </Button>

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';


class Profile extends Component {
  render() {
    return (
    <View>
    <Header headerText="Profile" />
    <Text> Home Screen </Text>
    <Text> Home Screen </Text>
    <Text> Home Screen </Text>
    </View>
  );
  }
}

export default Profile;
