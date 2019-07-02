
import React, { Component } from 'react'
import {StyleSheet, Text, View,Platform} from 'react-native';
import {Input} from './input'




 const main = () => {

  
    return (
     
         <View style={styles.container}>
          
            <Text style={styles.welcome}>Welcome to React Native! Hasanul Isyraf </Text>
             <Text style={styles.instructions}>To get started</Text>
             <Input placeholder = "Username"></Input>
        </View>
      
    );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });


  export default main
