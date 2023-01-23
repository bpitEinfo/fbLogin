import React from "react";
import { useState } from "react";
import { Text, View, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import LoginSVG from '../Image/misc/login.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomDrawer from "../components/CustomDrawer";
import Custombutton from "../components/Custombutton";
import InputField from "../components/InputField";
import auth from '@react-native-firebase/auth'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const Login = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account  signed in!');
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error");

            });
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <LoginSVG height={300} width={300} style={{ transform: [{ rotate: '-5deg' }] }} />
                </View>
                <Text style={{ fontSize: 28, fontWeight: '500', color: "black" }}>Login</Text>
                <InputField label={'Email Address'}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    labelValue={email}
                    icons={
                        <MaterialIcons name='alternate-email' size={20} color='#666' style={{
                            marginRight: 5
                        }} />
                    }
                    keyboardType="email-address"

                />
                <InputField label={'Enter PassWord'}
                    onChangeText={(userPassord) => setEmail(userPassord)}
                    labelValue={password}
                    icons={
                        <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{
                            marginRight: 5
                        }} />
                    }
                    inputType="password"
                    fieldButtonLabel={"Forgot"}
                    fieldButtonFunction={() => { }}
                />


                <Custombutton label={"Login"} onPress={() => Login(email, password)} />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text style={{ color: 'blue' }}>New To App? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;