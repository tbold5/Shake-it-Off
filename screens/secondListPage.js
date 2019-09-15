import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
export default class secondListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataSource: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    this.setState({loading: true});
    Promise.resolve([
      {
        albumId: 1,
        id: 1,
        title: 'Family',
        url:
          'https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_large.png?v=1542446801',
      },
      {
        albumId: 1,
        id: 2,
        title: 'Relationship',
        url: 'https://via.placeholder.com/600/771796',
      },
      {
        albumId: 1,
        id: 3,
        title: 'Health',
        url: 'https://via.placeholder.com/600/771796',
      },
      {
        albumId: 1,
        id: 4,
        title: 'Bullying',
        url: 'https://via.placeholder.com/600/771796',
      },
      {
        albumId: 1,
        id: 5,
        title: 'Depression',
        url: 'https://via.placeholder.com/600/771796',
      },
    ])
      // .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.map(item => {
          item.isSelect = false;
          item.selectedClass = styles.list;
          return item;
        });
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => {
        this.setState({loading: false});
      });
  };
  FlatListItemSeparator = () => <View style={styles.line} />;
  selectItem = data => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;
    const index = this.state.dataSource.findIndex(
      item => data.item.id === item.id,
    );
    this.state.dataSource[index] = data.item;
    this.setState({
      dataSource: this.state.dataSource,
    });
  };
  goToStore = () =>
    this.props.navigation.navigate('Expenses', {selected: this.state.selected});
  renderItem = data => (
    <TouchableOpacity
      style={[styles.list, data.item.selectedClass]}
      onPress={() => this.selectItem(data)}>
      <Image
        source={{uri: data.item.thumbnailUrl}}
        style={{width: 40, height: 40, margin: 6}}
      />
      <Text style={styles.lightText}>
        {' '}
        {data.item.title.charAt(0).toUpperCase() +
          data.item.title.slice(1)}{' '}
      </Text>
    </TouchableOpacity>
  );
  render() {
    const {navigate} = this.props.navigation;
    const itemNumber = this.state.dataSource.filter(item => item.isSelect)
      .length;
    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="purple" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>I want to chat about...</Text>
        <Text style={styles.secondTitle}>select all that apply</Text>
        <FlatList
          style={{height: 300, overflow: 'hidden'}}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
          extraData={this.state}
        />
        <TouchableOpacity
          style={styles.shakeButton}
          onPress={() => navigate('Message', {name: 'Jane'})}>
          <Text style={styles.shakeButtonText}> Next </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#f6d365',
  },
  title: {
    marginTop: '25%',
    fontFamily: 'Futura',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  secondTitle: {
    fontFamily: 'Futura',
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginBottom: 25,
  },
  loader: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  list: {
    fontFamily: 'Futura',
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    // marginLeft: '25%',
    padding: 10,
  },
  lightText: {
    fontFamily: 'Futura',
    color: 'black',
    width: 200,
    paddingLeft: 15,
    fontSize: 20,
  },
  line: {
    padding: 3,
    height: 0.5,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 290,
    zIndex: 1,
  },
  selected: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
  },
  shakeButton: {
    backgroundColor: 'white',
    padding: 5,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: '30%',
    marginBottom: 200,
  },
  shakeButtonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'orange',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  shakeContainter: {
    marginTop: '15%',
    marginBottom: '50%',
    paddingBottom: 200,
  },
  footer: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
