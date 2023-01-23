import React from "react";
import { View,Text,TouchableOpacity } from "react-native";

export default function Custombutton({label,onPress}) {
    return(
        <TouchableOpacity onPress={onPress} style={{
            backgroundColor: "#AD40AF",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
            //width:"90%"
            
        }}>
            <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16, color: '#fff'}}>{label}</Text>

        </TouchableOpacity>
    )
}