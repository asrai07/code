import React from 'react'

import Screen from './Screen'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons ,Entypo,AntDesign} from '@expo/vector-icons';

import Starred from './Starred'

import Shared from './Shared';
import Products from './Products';
import Files from './Files';




const Tab = createMaterialBottomTabNavigator();



 
const HomeStackNavigator = () => {
  return (

    <Tab.Navigator>
    <Tab.Screen name="Home" component={Screen} options={{headerShown:false,tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color="black" />)}} />
    
      <Tab.Screen name="Starred" component={Starred} options={{tabBarIcon: ({ color }) => (
            <AntDesign name="exclamationcircle" size={24} color="black" />)}}/> 

     <Tab.Screen name="Shared" component={Shared} options={{tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />)}} />
    
              <Tab.Screen name="Files" component={Files} options={{tabBarIcon: ({ color }) => (
            <AntDesign name="book" size={24} color="black" />)}} />
    
              <Tab.Screen name="Products" component={Products} options={{tabBarIcon: ({ color }) => (
            <AntDesign name="barschart" size={24} color="black" />)}} />

  </Tab.Navigator>
   
  );
};

export default HomeStackNavigator;