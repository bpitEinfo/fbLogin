import React from "react";
import { View, Text,useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/Loginscreen";
import HomeScreen from "../screens/HomeScreen";
import PrivacyScreen from "../screens/PrivacyScreen";
import SettingScreen from "../screens/SettingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CustomDrawer from "../components/CustomDrawer";
import SimpleLineIcons
from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import Privacy from "../screens/Privacy";
import QrCode from  "../screens/QrCode";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  const dimension = useWindowDimensions();
   const drawerType = dimension.width >= 700 ? 'permanent' : 'front';
  
  return (
    //     <Drawer.Navigator drawerContent={props=> <CustomDrawer{...props}/>} screenOptions={{headerShown:false}}>
    // <Drawer.Screen component={Home} name="Home" options={{
    //        drawerIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="home" size={size} color={color} />
    //        )
    //      }} />
    // <Drawer.Screen component={Profile} name="Profile" />
    // <Drawer.Screen component={Setting} name="Setting" />
    // <Drawer.Screen component={Privacy} name="Privacy" />

    //   </Drawer.Navigator>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false

      }}
      drawerStyle={{
        //backgroundColor: 'transparent',
        width: 240,
      }}
      drawerType={drawerType}
      edgeWidth={100}

      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />

          )
        }}
      />
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons
            name="verified-user" color={color} size={size} />

          )
        }} />
      <Drawer.Screen name="Setting" component={Setting}
        options={{
          drawerIcon: ({ color, size }) => (
            < MaterialIcons name="settings" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen name="Privacy Policy" component={Privacy}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="privacy-tip" color={color} size={size} />
          )
        }}

      />


      <Drawer.Screen name="Qr Code" component={QrCode}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="qrcode-edit" color={color} size={size} />
          )
        }}

      />

    </Drawer.Navigator>
  )
}

export default AppStack