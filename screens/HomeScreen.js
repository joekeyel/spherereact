import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {Header,Left,Right,Icon} from "native-base"
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


class Tab1 extends Component {
    render() {
      return (
          <View style={styles.container}>
          <Header>
              <Left>
                  
                 <Icon name = 'menu' onPress = {()=>this.props.navigation.openDrawer()}/>
              </Left>
              <Right />
          </Header>
  
              <View style = {styles.container2}>
              <Text >Tab 1</Text>
          </View>
          </View>
      );
    }
  }
  
  class Tab2 extends Component {
    render() {
      return (
          <View style={styles.container}>
          <Header>
              <Left>
                  
                 <Icon name = 'menu' onPress = {()=>this.props.navigation.openDrawer()}/>
              </Left>
              <Right />
          </Header>
  
              <View style = {styles.container2}>
              <Text >Tab 2</Text>
          </View>
          </View>
      );
    }
  }
  
  const TabNavigator2 = createBottomTabNavigator({
    Tab1: Tab1,
    Tab2: Tab2,
  });
  
  export default createAppContainer(TabNavigator2);

const styles = StyleSheet.create({
    container: {
        flex: 1
       
     
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});