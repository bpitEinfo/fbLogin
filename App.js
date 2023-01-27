// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/
import "react-native-gesture-handler";

// Import React and Component
import React from "react";
import { View, Text,useWindowDimensions } from "react-native";
// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//Drawer
import CustomDrawer from "./src/components/CustomDrawer";
import Profile from "./src/screens/Profile";
import Setting from "./src/screens/Setting";
import Privacy from "./src/screens/Privacy";
import QrCode from "./src/screens/QrCode";
//Vector icons
import SimpleLineIcons
from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// Import Screens
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/Loginscreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function AppStack () {
  const dimension = useWindowDimensions();
   const drawerType = dimension.width >= 700 ? 'permanent' : 'front';
  
  return (
    
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


const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

/* Main Navigator */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 2 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator which include Login Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppStack"
          component={AppStack}
          options={{
            headerShown: false ,     
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;