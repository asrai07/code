import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {List,Appbar,Text} from 'react-native-paper';
import { AntDesign,Entypo,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';


const Screen1 = () => {
  return (

    
    <ScrollView>
    <View style={styles.container}>
      

      <List.Item 

title="Classroom"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="folder"/>}
right={props=><List.Icon{...props}icon="dots-vertical"/>}
/>

<List.Item

title="folder"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="folder"/>}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>

<List.Item

title="Getting started"
description="modified 15 Jan"
 left={props=><List.Icon{...props}icon="file-pdf-box" />}
right={props=><List.Icon{...props} icon="dots-vertical"/>}
/>


    </View>
    </ScrollView>
  );
};

const Screen2 = () => {
  return (

    <ScrollView>
     <View style={styles.container}>
    
   <View style={{flexDirection:'row'}}>

      <View style={styles.temp}>
<View style={{paddingLeft:20}}>
            <FontAwesome name="folder" size={120} color="black" />
            </View>
      <View style={styles.show1} >
   

              <View style={{paddingTop:10,paddingLeft:20}}>
                  
                   <Text  variant="bodyLarge">Classroom</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
        
</View>


<View style={styles.temp}>
<View style={{paddingLeft:20}}>
<FontAwesome name="folder" size={120} color="black" />
</View>

      <View style={styles.show1} >
   

              <View style={{paddingTop:10,paddingLeft:20}}>
                 
                   <Text variant="bodyLarge">Folder</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
         
  </View>

</View>

<View style={{flexDirection:'row'}}>
     <View style={styles.temp}>

     <AntDesign name="pdffile1" size={120} color="black" />
      <View style={styles.show1} >
   

              <View style={{flexDirection:'row',paddingTop:10}} >
              <MaterialCommunityIcons name="file-pdf-box" size={24} color="black" /> 
                   <Text variant="bodyLarge">Getting started</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
      
</View>


<View style={styles.temp}>

<AntDesign name="pdffile1" size={120} color="black" />
      <View style={styles.show1} >
   

              <View style={{flexDirection:'row',paddingTop:10}} >
              <MaterialCommunityIcons name="file-pdf-box" size={24} color="black" />
                   <Text variant="bodyLarge">Getting started</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
         
    </View>
    
 </View>
 

 <View style={{flexDirection:'row'}}>

<View style={styles.temp}>

<AntDesign name="pdffile1" size={120} color="black" />
      <View style={styles.show1} >
   

              <View style={{flexDirection:'row',paddingTop:10}} >
              <MaterialCommunityIcons name="file-pdf-box" size={24} color="black" />
                   <Text variant="bodyLarge">Getting started</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
      
</View>





<View style={styles.temp}>

<AntDesign name="pdffile1" size={120} color="black" />
      <View style={styles.show1} >
   

              <View style={{flexDirection:'row',paddingTop:10}} >
              <MaterialCommunityIcons name="file-pdf-box" size={24} color="black" /> 
                   <Text variant="bodyLarge">Getting started</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
        
</View>

</View>

<View style={{flexDirection:'row'}}>
<View style={styles.temp}>

<AntDesign name="pdffile1" size={120} color="black" />
      <View style={styles.show1} >
   

              <View style={{flexDirection:'row',paddingTop:10}} >
              <MaterialCommunityIcons name="file-pdf-box" size={24} color="black" />
                   <Text variant="bodyLarge">Getting started</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
         
</View>






<View style={styles.temp}>

<AntDesign name="pdffile1" size={120} color="black" />
      <View style={styles.show1} >
   

              <View style={{flexDirection:'row',paddingTop:10}} >
              <MaterialCommunityIcons name="file-pdf-box" size={24} color="black" /> 
                   <Text variant="bodyLarge">Getting started</Text>
              </View>
              <View style={styles.show3} >
                
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
       
</View>


</View>

<View style={{flexDirection:'row'}}>
<View style={styles.temp}>

<AntDesign name="pdffile1" size={120} color="black" />
      <View style={styles.show1} >
   

              <View style={{flexDirection:'row',paddingTop:10}} >
              <MaterialCommunityIcons name="file-pdf-box" size={24} color="black" />
                   <Text variant="bodyLarge">Getting started</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
         
</View>




<View style={styles.temp}>

<AntDesign name="pdffile1" size={120} color="black" />
      <View style={styles.show1} >
   

              <View style={{flexDirection:'row',paddingTop:10}} >
              <MaterialCommunityIcons name="file-pdf-box" size={24} color="black" />
                   <Text variant="bodyLarge">Getting started</Text>
              </View>
              <View style={styles.show3} >
                   
                   <Entypo name="dots-three-vertical" size={24} color="#808080" />
              </View>

           
     </View>
       
</View>


</View>
</View>
    
    </ScrollView>
  );
};

export default function Files() {
  const [currentScreen, setCurrentScreen] = useState('screen1');
  const [currentIcon, setCurrentIcon] = useState('list');

  const toggleScreen = () => {
    if (currentScreen === 'screen1') {
      setCurrentScreen('screen2');
      setCurrentIcon('grid');
    } else {
      setCurrentScreen('screen1');
      setCurrentIcon('list');
    }
  };

  return (
    <View style={styles.container}>
       <Appbar.Header>
       <AntDesign name="arrowup" size={24} color="black" style={{marginLeft:20}} />
      <Appbar.Content title="Name" />
     
    
         <Entypo onPress={toggleScreen} name={currentIcon} size={30} color="black"  style={{marginRight:20}}/>
  
        
       </Appbar.Header>  
      {currentScreen === 'screen1' && <Screen1 />}
      {currentScreen === 'screen2' && <Screen2 />}

    </View>
  );
}

 const styles = StyleSheet.create({

   container:{
  
      flex:1,
       
      },


temp:{
  borderRadius:16,
  borderWidth:1,
  borderColor:'#d4d4d4',
  marginLeft:15,
     //   marginRight:15,
 marginVertical:10,
   paddingHorizontal:10,
   
paddingVertical:10,
//  paddingTop:15,

  width:175,
  alignItems:'stretch',

},


show1:{
  flexDirection:'row',
  justifyContent:'space-between',



},



show3:{

 flexDirection:'row',
 paddingVertical:5,
 

},
all:{
  paddingVertical:10,
  paddingBottom:5,
  

 },
    
   })