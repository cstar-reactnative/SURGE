// <Button onPress={() => firebase.auth().signOut()}>
//   Log Out
//   </Button>

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common/Header';
import { Icon } from 'native-base';


class Profile extends Component {
  static navigationOptions = {
    drawerIcon : () => (
      <Icon name="md-contact" style={{ fontSize: 24 }} />
          )
  }
  render() {
    return (
    <View>
    <Header headerText="Profile" />
    <Text> Profile Screen </Text>
    <Text> Profile Screen </Text>
    <Text> Profile Screen </Text>
    </View>
  );
  }
}

export default Profile;
