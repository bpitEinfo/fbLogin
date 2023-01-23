import React from "react";
import { Text, View, SafeAreaView, Touchable, TouchableOpacity } from "react-native";
import RegisterationSVG from '../Image/misc/registration.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import InputField from "../components/InputField";
import Custombutton from "../components/Custombutton";
const RegisterScreen = ({ navigation }) => {
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

                <InputField label={'Full Name'}
                    icons={
                        <Ionicons
                            name="person-outline"
                            size={20}
                            color="#666"
                            style={{ marginRight: 5 }}
                        />
                    }
                />
                <InputField label={'Email Address'}
                    icons={
                        <MaterialIcons name='alternate-email' size={20} color='#666' style={{
                            marginRight: 5
                        }} />
                    }
                    keyboardType="email-address"
                />
                <InputField label={'Enter PassWord'}
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
                <Custombutton label={"Register"} onPress={() => { }} />
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