import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeStackNavigator from './HomeStack'






const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {

 




  return (
    <Drawer.Navigator drawerContent={props=> <Sidebar {...props}/>}>
          
        <Drawer.Screen name="HomeStack" component={HomeStackNavigator} options={{headerShown:false,}} /> 
   
      
      
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;
