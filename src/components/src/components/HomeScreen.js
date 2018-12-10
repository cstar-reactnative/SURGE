// Home.js is the homepage where you would see the map markers.

import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
//import { Header } from './components/common';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import Notification from './Notification';
import History from './History';
import Rewards from './Rewards';
import Payment from './Payment';
import Help from './Help';
import Settings from './Settings';
import Profile from './Profile';
import { Header, Left, Right, Icon } from 'native-base';


class HomeScreen extends Component {
  render() {
    return (
      <AppDrawerNavigator />
    <View>
    <Header headerText="SURGE" />
    <Text> Home Screen </Text>
    <Text> Home Screen </Text>
    <Text> Home Screen </Text>
    </View>
  );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
  <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center',
  justifyContent: 'center' }}>
  <Image source={require('../assets/logo.png')}
  style={{ height: 120, width: 120, borderRadius: 60 }} />
  </View>
  <ScrollView>
    <DrawerItems {...props} />
    </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home:HomeScreen,
  Notification:Notification,
  History:History,
  Rewards:Rewards,
  Payment:Payment,
  Help:Help,
  Settings:Settings,
  Profile:Profile
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  }
})
export default HomeScreen;


// npm install native-base
// DrawerNavigator -> link to individual page - > npm install react-navigation@2.6.2 or 3.0 & npm install
//Mapview with markers -> link to backend api to show markers
//location button -> pull location finder from phone
//list Button -> link to list page
//ScanQR Button -> list to QR page
