import React, { Component } from 'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';


const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => 
{

 return (

   
        <TextInput  style = {Styles.input}
        autoCorrect = {false}
        onChangeText = {onChangeText}
        placeholder = {placeholder}
        secureTextEntry = {secureTextEntry}
        value = {value}
        style = {Styles.input}
        label = {label}
        />

     
      
    );
  }

  const Styles = StyleSheet.create({

    container :{

        marginTop: 10,
        width:'100%',
        borderColor: '#eee',
        borderBottomWidth: 2
    },
    label :{

        padding : 5,
        paddingBottom: 0,
        color: '#333',
        fontWeight: '700',
        width: '100%',
        fontSize:17
    },
    input:{
        paddingRight : 5,
        paddingLeft: 5,
        paddingBottom:2,
        color:'#333',
        fontSize:18,
        fontWeight: '700'
    }


  })

  export default Input
