import React from "react";
import { View,Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/Loginscreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen component={OnboardingScreen} name="Onboarding" />
    <Stack.Screen component={LoginScreen} name="Login"  />
    <Stack.Screen component={RegisterScreen} name="Register"  />

  </Stack.Navigator>
    )
}

export default AuthStack