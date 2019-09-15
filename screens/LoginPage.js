import React, {Component} from 'react';
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onLogin() {
    const {username, password} = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    let logo = {
      uri: 'www',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title} className="Introduction">
          Shake it Off
        </Text>
        <Text style={styles.secondTitle} className="Introduction">
          Connect. Chat. Community.
        </Text>
        <Image
          source={require('./people.png')}
          style={styles.backgroundImage}
        />
        <TextInput
          value={this.state.username}
          onChangeText={username => this.setState({username})}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            style={styles.loginButton}
            title={'Login'}
            onPress={() => {
              this.props.navigation.navigate('Signup');
            }}>
            <Text style={styles.loginButtonText}> Login </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signupButton}
            title={'Sign Up'}
            onPress={() => {
              this.props.navigation.navigate('Signup');
            }}>
            <Text style={styles.signupButtonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6d365',
  },
  backgroundImage: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'stretch', // or 'stretch'
  },
  input: {
    width: 250,
    height: 44,
    padding: 15,
    borderColor: 'transparent',
    marginBottom: 25,
    fontSize: 20,
    fontFamily: 'Futura',
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 5,
    width: 150,
    borderRadius: 10,
    margin: 10,
  },
  loginButtonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'orange',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  signupButton: {
    backgroundColor: 'transparent',
    padding: 5,
    width: 150,
    borderRadius: 10,
    margin: 10,
  },
  signupButtonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  title: {
    fontWeight: 'bold',
    padding: 5,
    fontSize: 40,
    fontFamily: 'Futura',
  },
  secondTitle: {fontWeight: '100', padding: 5, fontSize: 15},
});
