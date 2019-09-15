import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export default class Loading extends React.Component {
  static navigationOptions = {
    title: 'Shake it Off',
  };
  render() {
    const {navigate} = this.props.navigation;
    setTimeout(() => {
      navigate('Profile', {name: 'Jane'});
    }, 3000);
    return (
      <View style={styles.container}>
        <Text style={styles.introduction}>
          Yay! {'\n'} Your shake is sending... {'\n'} Just a sec we are
          connecting with a peer...
        </Text>
        <View style={[styles.loadContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="grey" />
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
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: '30%',
    marginBottom: 50,
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
    marginTop: 150,
  },
  loadContainer: {
    marginBottom: 250,
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
