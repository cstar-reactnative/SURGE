import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Header, Left, Right, Icon, Body, Title, Container, Button } from 'native-base';


class HomeScreen extends Component {
  state = { currentUser: null }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;


// npm install native-base
// DrawerNavigator -> link to individual page - > npm install react-navigation@2.6.2 or 3.0 & npm install
//Mapview with markers -> link to backend api to show markers
//location button -> pull location finder from phone
//list Button -> link to list page
//ScanQR Button -> list to QR page
