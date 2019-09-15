import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  AppRegistry,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import FilteredMultiSelect from 'react-filtered-multiselect';

class SignupPage extends React.Component {
  static navigationOptions = {
    title: 'Shake it Off',
  };
  constructor(props) {
    super(props);
    this.state = {text: '', value: ''};
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.introductionContainer}>
          <Text style={styles.introduction}>Give yourself a nickname.</Text>
          <Text style={styles.secondIntroduction}>
            Don't worry you can always change it later.
          </Text>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            placeholder={'Enter Username'}
          />
          <TouchableOpacity
            style={styles.joinButton}
            title={'Join'}
            onPress={() => {
              this.props.navigation.navigate('List');
            }}>
            <Text style={styles.joinButtonText}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6d365',
  },
  input: {
    marginTop: 30,
    fontSize: 25,
    fontFamily: 'Futura',
  },
  introductionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introduction: {
    fontFamily: 'Futura',
    fontSize: 25,
    padding: 5,
    textAlign: 'center',
  },
  secondIntroduction: {
    fontFamily: 'Futura',
    fontSize: 10,
    fontWeight: 'normal',
    padding: 5,
    textAlign: 'center',
  },
  joinButton: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 5,
    width: 150,
    borderRadius: 10,
    margin: 10,
  },
  joinButtonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'orange',
    fontSize: 20,
    fontFamily: 'Futura',
  },
});
