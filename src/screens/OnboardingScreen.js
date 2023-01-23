import React from 'react';
import { View, Text, Image,SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Onboarding from 'react-native-onboarding-swiper'
import GamingImg from '../Image/misc/gaming.svg'

const OnboardingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor:'#fff'
          }}>
            <View style={{marginTop:20}}> 
              <Text style={{ fontSize: 30, fontWeight: 'bold', color:"black" }}>BPIT</Text>
            </View>
            <View style={{flex:1,justifyContent:'center', alignItems:'center',}}>
            <GamingImg width={300} height={300}  style={{transform:[{rotate:'-15deg'}]}}/>
            </View>
            <TouchableOpacity  onPress={()=> navigation.navigate('Login')}
            style={{ backgroundColor: '#AD40AF', padding: 30, width: '90%',marginBottom:50, flexDirection: 'row', borderRadius: 10, justifyContent: 'space-between' }}>
              <Text>Let's Begin</Text>
              <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
            </TouchableOpacity>
          </SafeAreaView>
      
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});