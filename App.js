import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Input from './component/input'
import LoginButton from './component/loginButton'
import DetailsScreen from './screens/AuthorizedScreen'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Input placeholder = "Username" label = "Username"/>
        <Input placeholder = "Password" secureTextEntry label = "Password"/>
        <LoginButton
          children="LOgin"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}