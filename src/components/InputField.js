import React from "react";
import { View, Text, TouchableOpacity,TextInput } from "react-native";

export default function InputField({ label, icons, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction }) {
    return (


        <View style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25
        }}>
            {icons}
            { inputType == 'password' ? (
                <TextInput
                    style={{ backgroundColor: '#ccd', paddingVertical: 1, flex: 1 }}
                    placeholder="Password"
                    keyboardType={keyboardType}
                    secureTextEntry={true}
                />) : (<TextInput
                    style={{ backgroundColor: '#ccd', paddingVertical: 1, flex: 1 }}
                    placeholder={label}
                    keyboardType={keyboardType}
                />)
            }
            <TouchableOpacity onPress={fieldButtonFunction}>
                <Text style={{ color: "#AD40AF", fontWeight: '700' }}>{fieldButtonLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}