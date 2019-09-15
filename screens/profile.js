import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Shake it Off',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.introduction}>
          A peer recieved your Shake! {'\n'} Amy says Hello!
        </Text>
        <Image style={styles.backgroundImage} source={require('./girl.png')} />
        <Text style={styles.nameTextStyle}>Amy</Text>
        <View style={styles.startContainter}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigate('Home', {name: 'Jane'})}>
            <Text style={styles.startButtonText}> Start Messaging </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigate('myProfile', {name: 'Jane'})}>
            <Text style={styles.cancelButtonText}> Cancel </Text>
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
    marginTop: '10%',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'stretch', // or 'stretch'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 10,
  },
  startButton: {
    backgroundColor: 'white',
    padding: 10,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: '30%',
  },
  cancelButton: {
    padding: 5,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 30,
  },
  startButtonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'orange',
    fontSize: 20,
    fontFamily: 'Futura',
    marginTop: 5,
  },
  startContainter: {
    marginRight: '55%',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: '60%',
  },
  cancelButtonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  cancelContainter: {
    justifyContent: 'center',
  },
  introduction: {
    fontFamily: 'Futura',
    fontSize: 25,
    padding: 10,
    textAlign: 'center',
    // marginTop: 150,
  },
  nameTextStyle: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 50,
  },
});
