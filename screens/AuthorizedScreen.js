import React, { Component } from "react";
import { 
  View,
  StyleSheet,SafeAreaView,ScrollView,Image
} from "react-native";
import {  createAppContainer,createDrawerNavigator,DrawerItems } from "react-navigation";
import HomeScreen from './HomeScreen'



class AuthorizedScreen extends Component {
  render() {
    return (
     <MyApp/>
    );
  }
}
export default AuthorizedScreen;



const CustomDrawerComponent = (props)=>(

  <SafeAreaView style= {{flex : 1}}>

      <View style = {{height:150,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('./images/user.png')} style= {{height:120,width:120,borderRadius:60}}/>

      </View>
  <ScrollView>
   
   <DrawerItems {...props}/>
    
  </ScrollView>

  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({

  Home: HomeScreen,
  

},{
  contentComponent:CustomDrawerComponent
})

const MyApp = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});