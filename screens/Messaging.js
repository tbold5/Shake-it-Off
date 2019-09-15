import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';

export default class Messaging extends React.Component {
  static navigationOptions = {
    title: 'Connect',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.introduction}>
          Ready to connect? {'\n'} Whenever you're ready.
        </Text>
        <Image style={styles.backgroundImage} source={require('./shake.png')} />
        <View style={styles.shakeContainter}>
          <TouchableOpacity
            style={styles.shakeButton}
            onPress={() => navigate('Load', {name: 'Jane'})}>
            <Text style={styles.shakeButtonText}> Shake Your Phone! </Text>
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
    height: 250,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'stretch', // or 'stretch'
    marginBottom: 50,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 10,
  },
  shakeButton: {
    backgroundColor: 'white',
    padding: 5,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: '30%',
  },
  shakeButtonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'orange',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  shakeContainter: {
    paddingRight: '25%',
    justifyContent: 'center',
  },
  introduction: {
    fontFamily: 'Futura',
    fontSize: 25,
    padding: 10,
    textAlign: 'center',
  },
  cancelButton: {
    padding: 5,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 30,
    marginLeft: '30%',
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
  startContainter: {
    marginRight: '55%',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: '60%',
  },
});
