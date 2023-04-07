import { StyleSheet, View ,TouchableOpacity} from 'react-native'
import {   Button,Text, Alert} from 'react-native-paper'
// import React from 'react'
import Login1 from './Login1';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  React ,{useState, useEffect} from 'react'

const Sidebar = ({navigation}) => {

    const handleLogout = () => {
        AsyncStorage.clear();
        navigation.navigate('Login');
      };


   return (
    
  <View style={styles.container}>
   
  
  <Button  mode="contained" textColor='white' style={styles.button}onPress={handleLogout} >Logout</Button>
</View>
  )
}

export default Sidebar

const styles = StyleSheet.create({
container:{

flex:1,
justifyItems:'center',
justifyContent:'center',
},
button:{
  backgroundColor:'blue',
 //  outlineColor:'black',
  marginVertical:30,
  
  
  
},


})