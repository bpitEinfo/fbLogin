import React from "react";
import {View,Text, StyleSheet,ImageBackground} from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { Image } from "react-native-svg";
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
        <View style={{flex:1}}>
    <UserView /> 
        <DrawerContentScrollView {...props} contentContainerStyle={{borderRadius:50}}>
         
         <View style={{flex:1,backgroundColor:'#fff', paddingTop:10}}>
         <DrawerItemList {...props}/>
         </View>
        </DrawerContentScrollView>
        <View>
            <Text>Custom Text</Text>
            </View>
        </View>
    )
      
}

export default CustomDrawer;


const styles = StyleSheet.create({
    image: {
  
      marginTop: 50,
      width: 120,
      height: 120,
      borderRadius: 60,
      borderColor: Colors.green,
      borderWidth: 1,
    },
  
  })
  