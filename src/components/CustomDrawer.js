import React from "react";
import {View,Text, Image,StyleSheet,ImageBackground} from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";

import { Title } from "react-native-paper";
import Colors from "../Constants/Colors";
const imgPlaceHolder ='/home/shubham/Desktop/fbLogin/src/Image/user-profile.jpg'
const UserView=()=>{
return(
    <View style={{ alignItems: 'center', justifyContent: 'center', height: 200 }}>
    <Image source={require('../Image/user-profile.jpg')} />
    <Title>Shubham Rai</Title>
  </View>
)
}
const CustomDrawer=(props)=>{
    return(
        <View style={{flex:1,backgroundColor:'#fff8dc',paddingBottom:10}}>
    
    <View style={{ alignItems: 'center', justifyContent: 'center', height: 200, backgroundColor: 'transparent' }}>
    <Image style={styles.image} source={require('../Image/user-profile.jpg')} />
    <Title style={{marginTop:10}}>Shubham Rai</Title>
  </View>
  
        <DrawerContentScrollView {...props} contentContainerStyle={{borderRadius:50}}>
         
         <View style={{flex:1,backgroundColor:'#ffebcd', paddingTop:10}}>
         <DrawerItemList {...props}/>
         </View>
        </DrawerContentScrollView>
        
        </View>
    )
      
}

export default CustomDrawer;


const styles = StyleSheet.create({
    image: {
  
      marginTop: 10,
      width: 120,
      height: 120,
      borderRadius: 30,
      borderColor: '#ffebcd',
      borderWidth: 1,
    },
  
  })
  