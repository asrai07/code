import { StyleSheet, View, TouchableOpacity ,ScrollView,Animated} from 'react-native'
 import React from 'react'
 import {  MD3LightTheme as DefaultTheme, Text,Button, FAB } from 'react-native-paper';
 import  {material,human}  from 'react-native-typography';
 
 import { Entypo,MaterialCommunityIcons ,FontAwesome ,AntDesign } from '@expo/vector-icons';

 




 



const Screen = ({navigation}) => {




  return (


   
    <View style={styles.container}>
      
       <View style={styles.menu}>
          <TouchableOpacity onPress={()=>{navigation.toggleDrawer()}} >
             <Entypo  name="menu" size={40} color="black" />
             </TouchableOpacity>
             
       </View> 
       
      <ScrollView>

         <View style={styles.show}>
               <View style={styles.one}>
                    <Text variant='titleLarge'>Folders</Text>
                    <Entypo name="circle-with-plus" size={30} color="green" />
               </View>
               <View style={styles.two}>
                    <Text variant='titleMedium'>View all</Text>
                  <View style={styles.icon1}>
                     <MaterialCommunityIcons name="greater-than" size={15} color="black" />
                  </View>
               </View>
         </View>

      <ScrollView horizontal={true} >

<View style={styles.temp}>
      <View style={styles.show1} >

              <View  >
                   <FontAwesome name="folder-open" size={40} color="yellow" />
              </View>
              <View style={styles.show3} >
                   <AntDesign name="star" size={24} color="yellow" />
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
         <View style={styles.all}>
              <Text variant='titleLarge'>Docs</Text>
         </View>
              <Text style={[material.caption]}>2.4 GB . 100 files</Text>
</View>
       
       <View style={styles.temp}>
            <View style={styles.show1} >

              <View>
                 <FontAwesome name="folder-open" size={40} color="yellow" />
              </View>
              <View style={styles.show3} >
                 <AntDesign name="star" size={24} color="yellow" />
                 <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
            </View>
         <View style={styles.all}>
            <Text variant='titleLarge'>Projects</Text>
         </View>
            <Text style={[material.caption]}>1.2 GB . 200 files</Text>
       </View>

       <View style={styles.temp}>
           <View style={styles.show1} >

              <View  >
                 <FontAwesome name="folder-open" size={40} color="yellow" />
              </View>
              <View style={styles.show3} >
                 <AntDesign name="star" size={24} color="yellow" />
                 <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
           </View>
              <View style={styles.all}>
                   <Text variant='titleLarge'>Work</Text>
              </View>
                   <Text style={[material.caption]}>800 MB . 300 files</Text>
       </View>

     <View style={styles.temp}>
     <View style={styles.show1} >

              <View  >
                 <FontAwesome name="folder-open" size={40} color="yellow" />
              </View>
              <View style={styles.show3} >
                 <AntDesign name="star" size={24} color="yellow" />
                 <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
         <View style={styles.all}>
              <Text variant='titleLarge'>Training</Text>
         </View>
              <Text style={[material.caption]}>600 MB . 400 files</Text>
    </View>


       <View style={styles.temp}>
       <View style={styles.show1} >

              <View>
                 <FontAwesome name="folder-open" size={40} color="yellow" />
              </View>
              <View style={styles.show3} >
                 <AntDesign name="star" size={24} color="yellow" />
                 <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
       </View>
              <View style={styles.all}>
               <Text variant='titleLarge'>Sport</Text>
              </View>
               <Text style={[material.caption]}>480 MB . 500 files</Text>
       </View>

       <View style={styles.temp}>
       <View style={styles.show1} >

              <View >
                  <FontAwesome name="folder-open" size={40} color="yellow" />
              </View>
              <View style={styles.show3} >
                 <AntDesign name="star" size={24} color="yellow" />
                 <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
       </View>
       <View style={styles.all}>
              <Text variant='titleLarge'>Foods</Text>
       </View>
              <Text style={[material.caption]}>400 MB . 600 files</Text>
       </View>

  </ScrollView>


  <View style={styles.show}>
             <View style={styles.one}>
                    <Text variant='titleLarge'>Recent Files</Text>
                    <Entypo name="circle-with-plus" size={30} color="green" />
             </View>
                <View style={styles.two}>
                     <Text variant='titleMedium'>View all</Text>
                  <View style={styles.icon1}>
                     <MaterialCommunityIcons name="greater-than" size={15} color="black" />
                  </View>
               </View>



  </View>




  <View style={styles.temp1}>
     <View style={styles.show1} >

              <View  >
                   <MaterialCommunityIcons name="file-image" size={40} color="green" />
              </View>
              <View style={styles.show3} >
                 <AntDesign name="star" size={24} color="yellow" />
                 <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
       </View >
       <View style={styles.side}>
             <Text variant='titleMedium'>cover_2.jpg</Text>
       
              <Text style={[material.caption,styles.all]}>48 MB . 10 Mar 2023 9:42 AM </Text>
       </View>
       
       </View>

       <View style={styles.temp1}>
     <View style={styles.show1} >

              <View  >
                     <MaterialCommunityIcons name="file-music" size={40} color="blue" />
              </View>
              <View style={styles.show3} >
                     <AntDesign name="star" size={24} color="yellow" />
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
       </View>
       <View style={styles.side}>
               <Text variant='titleMedium'>design_suriname_2015.mp3</Text>
               
 
                <Text style={[material.caption,styles.all]}>24 MB . 09 Mar 2023 8:42 AM </Text>
       </View>
       </View>

       <View style={styles.temp1}>
     <View style={styles.show1} >

              <View  >
                     <MaterialCommunityIcons name="file-video" size={40} color="orange" />
              </View>
              <View style={styles.show3} >
                 <AntDesign name="star" size={24} color="yellow" />
                 <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
       </View>
       <View style={styles.side}>
            <Text variant='titleMedium'>expertise_2015_conakry_sao-tome-and-principe_gende...</Text>
       
            <Text style={[material.caption,styles.all]}>16 MB . 08 Mar 2023 7:42 AM </Text>
       </View>
       </View>


       <View style={styles.temp1}>
     <View style={styles.show1} >

              <View>
                    <AntDesign name="pdffile1" size={40} color="red" />
              </View>
              <View style={styles.show3} >
                   <AntDesign name="star" size={24} color="yellow" />
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
       </View>
       <View style={styles.side}>
             <Text variant='titleMedium'>money-popup-rack.pdf</Text>
       
             <Text style={[material.caption,styles.all]}>12 MB . 07 Mar 2023 6:42 AM </Text>
       </View>
       </View>


       <View style={styles.temp1}>
     <View style={styles.show1} >

              <View  >
                 <MaterialCommunityIcons name="file-image" size={40} color="green" />
              </View>
              <View style={styles.show3} >
                 <AntDesign name="star" size={24} color="yellow" />
                 <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
       </View>
       <View style={styles.side}>
             <Text variant='titleMedium' >cover_4.jpg</Text>
       
       <Text style={[material.caption,styles.all]}>9.6 MB . 06 Mar 2023 5:42 AM </Text>
       </View>
       
       </View>
       <FontAwesome name="plus-circle" size={24} color="white" />
       </ScrollView>
     
<FAB  style={styles.fab}  icon="plus"/>


</View> 

  )
}

export default Screen

const styles = StyleSheet.create({

  container:{

flex:1,


  },
  one:{
flexDirection:'row',
marginLeft:20,
 
  },

  all:{
   paddingVertical:10,
   paddingBottom:5,
   

  },
  two:{

    flexDirection:'row',
    marginRight:20,
    paddingVertical:5,
  },
  show:{

    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10,
    marginBottom:10,
    
  },
  icon1:{
    paddingVertical:4,
    paddingLeft:5,
  },
  temp:{
    borderRadius:16,
    borderWidth:1,
    borderColor:'#d4d4d4',
    marginLeft:15,
         marginRight:15,
     marginVertical:20,
     paddingHorizontal:10,
  paddingVertical:10,
   paddingTop:15,
  
    width:220,
  
  },
show1:{
  flexDirection:'row',
  justifyContent:'space-between',



},



show3:{

 flexDirection:'row',

},
temp1:{
   borderColor:'#d4d4d4',
  borderRadius:16,
  borderWidth:1,
   marginLeft:15,
    marginRight:15,
marginVertical:20,
    paddingHorizontal:10,

paddingVertical:10,
 paddingTop:15,
 

},
menu:{
  marginTop:30,
  paddingVertical:15,
  paddingBottom:10,

   paddingLeft:15,
position:'relative',
flexDirection:'row',


},
foot:{

  flexDirection:'row',
  justifyContent:'space-evenly',
paddingVertical:20,

},
side:{
    paddingTop:10,
   paddingHorizontal:7,
   
},

fab: {
   position: 'absolute',
   
   right: 0,
   bottom:10 ,
    margin: 16,
    backgroundColor: 'white',
},

})





















