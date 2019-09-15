import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import ListPage from './screens/ListPage';
import Messaging from './screens/Messaging';
import Loading from './screens/loading';
import Profile from './screens/profile';
import myProfile from './screens/myProfile';
import secondListPage from './screens/secondListPage';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginPage},
  Home: {screen: HomePage},
  Signup: {screen: SignupPage},
  List: {screen: ListPage},
  Message: {screen: Messaging},
  Load: {screen: Loading},
  Profile: {screen: Profile},
  myProfile: {screen: myProfile},
  secondListPage: {screen: secondListPage},
});

const App = createAppContainer(MainNavigator);

export default App;
