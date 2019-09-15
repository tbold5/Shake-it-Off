import React from 'react';
import {Image, View} from 'react-native';

export default class myProfile extends React.Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Image source={require('./dashboard.png')} />
      </View>
    );
  }
}
