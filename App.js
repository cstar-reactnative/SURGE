import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import Settings from './src/components/Settings';
import Notifications from './src/components/Notifications';
import History from './src/components/History';
import Payment from './src/components/Payment';
import Help from './src/components/Help';
import Rewards from './src/components/Rewards';
import Profile from './src/components/Profile';

const { width } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Notifications: Notifications,
  History: History,
  Rewards: Rewards,
  Payment: Payment,
  Help: Help,
  Settings: Settings,
  Profile: Profile
}, {
  contentComponent: CustomDrawerComponent,
})

const AppContainer = createAppContainer(AppNavigator);