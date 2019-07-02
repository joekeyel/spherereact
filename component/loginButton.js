import React, { Component } from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';


const loginButton = ({onPress,children}) => {

    return(
       <TouchableOpacity style = {style.button}
       onPress = {onPress}>
        <Text style = {style.text}>{children}</Text>   
      </TouchableOpacity>     

      
    )

}
const style = StyleSheet.create({

    button:{
        marginTop : 10,
        padding: 20,
        width:'100%',
        backgroundColor:'#333',
        borderRadius:4,
        alignItems:'center'
    },
    text:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    }

})


export default loginButton