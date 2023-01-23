import React, { useContext,useState } from "react";
import { Text, View, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import RegisterationSVG from '../Image/misc/registration.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputField from "../components/InputField";
import Custombutton from "../components/Custombutton";
import auth from '@react-native-firebase/auth'

const RegisterScreen = ({ navigation }) => {
const[email,setEmail] =useState();
const [password,setPassword] = useState();
const Register=()=>{
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
}
return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <RegisterationSVG height={300} width={300} style={{ transform: [{ rotate: '-5deg' }] }} />
                </View>
                <Text style={{ fontSize: 28, fontWeight: '500', color: "black" }}>Register</Text>
                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>

                </View>

               
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
                                onChangeText={(userPassord) => setPassword(userPassord)}
                labelValue={password}
                    icons={
                        <Ionicons name='ios-lock-closed-outline' size={20} color='#666' style={{
                            marginRight: 5
                        }} />
                    }
                    inputType="password"
                />

                <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25
                }}>
                </View>
                <Custombutton label={"Register"} onPress={() => Register(email,password)}/>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text style={{ color: 'blue' }}>Already Register?    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ color: '#AD40AF', fontWeight: '700' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen;