import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Container, Content, Form, Item, Label } from 'native-base';
import firebase from '@firebase/app';
import '@firebase/auth';
// import Container from '../../native-base-theme/components/Container';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  static navigationOptions = {
    title: 'Please sign in',
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true  });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
  // if else logic
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <Form style={styles.formStyle}>
            <Item>
              <Input
              label='Email'
              placeholder='user@email.com'
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              />
            </Item>

            <Item>
              <Input
              placeholder='password'
              label='Password'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
              />
            </Item>

            <Item>
              <Text style={styles.errorTextStyle} >
                {this.state.error}
              </Text>
            </Item>

            <Item>
              {this.renderButton()}
            </Item>

            <Item>
              <Button style={styles.textStyle}>Forget Password</Button>
            </Item>

            <Item last>
              <Button style={styles.textStyle}>
                Sign Up
              </Button>
            </Item>
          </Form>
        </Content>
      </Container>
      
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view: {
    paddingLeft: 0,
    marginLeft: 0
  },
  item: {
    paddingLeft: 0,
    marginLeft: 0
  },
  formStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  textStyle: {
    fontSize: 20,
    justifyContent: 'center'
  },
};

export default LoginForm;
