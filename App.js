// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/
import "react-native-gesture-handler";

// Import React and Component
import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
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
import PrivacyScreen from "./src/screens/PrivacyScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";

const Stack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();
function AppStack({ navigation }) {
  const dimension = useWindowDimensions();
  const drawerType = dimension.width >= 700 ? 'permanent' : 'front';

  return (

    <Drawer.Navigator
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
      <Drawer.Screen name="Profile Stack" component={ProfileStackScreen}
     
     options={{
          headerShown:false,

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


const Auth = ({ navigation }) => {
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
         headerShown:false
        }}
      />
    </Stack.Navigator>
  );
};
//Profile Stack

const ProfileStackScreen = ({ navigation }) => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <ProfileStack.Navigator
      screenOptions={
        {
          //headerShown: false
        }
      }
    >

      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerLeft:() =>(
            <MaterialCommunityIcons.Button
            name="account-edit"
            size={26}
            onPress={() => navigation.openDrawer()}
            color="black"
          />
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={26}
              onPress={() => navigation.navigate('EditProfile')}
              color="black"
            />

          )
        }}


      />
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        


      />
    </ProfileStack.Navigator>
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
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;