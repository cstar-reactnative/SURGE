import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common/Header';
import { Icon } from 'native-base';
import { Button } from 'native-base';

import firebase from '@firebase/app';
import '@firebase/auth';

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
    <Button onPress={() => firebase.auth().signOut()}>
      <Text>Log Out</Text>
    </Button>
    </View>
  );
  }
}

export default Profile;
