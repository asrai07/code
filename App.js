  import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import  {NavigationContainer, DefaultTheme}  from '@react-navigation/native';
import { AppRegistry ,View,Text,Linking} from 'react-native';
import { name as appName } from './app.json';


import {MD3LightTheme, 
  Provider as PaperProvider,adaptNavigationTheme
} from 'react-native-paper';


 import DrawerNavigator from "./components/Drawer";


const Stack = createStackNavigator();




const { LightTheme } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });







 const App =() => {
  

  
  return  (
   
  <PaperProvider theme={MD3LightTheme}>
  <NavigationContainer theme={LightTheme} >
  
           <DrawerNavigator/>          

  </NavigationContainer>
  </PaperProvider>
 

  );
}
export default App

AppRegistry.registerComponent(appName, () => Main);