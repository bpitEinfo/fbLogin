import React, { useState,useEffect } from 'react';
import { Button, View, Text, Switch, StyleSheet, Share,TouchableOpacity,Alert } from 'react-native';
import { Surface } from 'react-native-paper';
import Colors from '../Constants/Colors';
import Rate ,{AndroidMarket} from 'react-native-rate';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AppHeader from '../components/AppHeader';
import { color } from 'react-native-reanimated';
import auth from "@react-native-firebase/auth";

//import Share from 'react-native-share';
const Setting = ({navigation}) => {
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
    const [isLocationTrackingEnabled, setIsLocationTrackingEnabled] = useState(false);
    const onRatePress = () => {
        Rate.rate({
            platform: Platform.OS === 'ios' ? 'ios' : 'android',
            type: Platform.OS === 'ios' ? 'app-store' : AndroidMarket.Google,
            appName: 'Your App Name'
        }, success => {
            if (success) {
                // this callback is executed on success
            }
        });
    }

    const onSharePress = () => {
        Share.share({
            title: 'Share App',
            message: 'Check out this awesome app!',
            url: 'https://your-app-store-link.com',
            subject: 'Share App'
        });
    }
    // For logout function
    const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);
  const changePassword = () => {
    firebase.auth().sendPasswordResetEmail(firebase.auth(user.email)
    .then(()=>{
  alert("Password reset email sent")
    }).catch((error)=>{
      alert(error)
    })
    )
  }

    const logout = () => {
        Alert.alert(
          "Logout",
          "Are you sure? You want to logout?",
          [
            {
              text: "Cancel",
              onPress: () => {
                return null;
              },
            },
            {
              text: "Confirm",
              onPress: () => {
                auth()
                  .signOut()
                  .then(() => navigation.navigate("Auth"),
                    alert("Logout Successful. ")
                
                  )
                  .catch((error) => {
                    console.log(error);
                    if (error.code === "auth/no-current-user")
                    navigation.navigate("Auth");
                    else alert(error);
                  });
              },
            },
          ],
          { cancelable: false }
        );
      };
    return (

        <View>
          

            <View style={[styles.setting]}>
                <Text style={[styles.text]}>Notifications</Text>
                <Switch
                    value={isNotificationsEnabled}
                    onValueChange={setIsNotificationsEnabled}
                />
            </View>
            <View style={[styles.setting]}>
                <Text style={[styles.text]}>Location Tracking</Text>
                <Switch
                    value={isLocationTrackingEnabled}
                    onValueChange={setIsLocationTrackingEnabled}
                />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onRatePress}>
                    <Text style={styles.buttonTextStyle}>
                        Rate Us
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onSharePress}>
                    <Text style={styles.buttonTextStyle}>
                        Share App
                    </Text>
                </TouchableOpacity>
                <DrawerItem style={{ paddingTop: 300 }}
                    label="Logout"
                    onPress={logout}
                    icon={({ size, color }) => (
                        <MaterialIcons name="logout" size={size} color={color} />

                    )}
                />
            </View>
          
        </View>


    );
};

export default Setting;

const styles = StyleSheet.create({
    setting: {
        marginVertical: 10,
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'space-between'
    },
    text: {
        marginVertical: 15,
        marginLeft:15,
        color:"black"
    },

    buttonStyle: {
        backgroundColor: '#51D8C7',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#51D8C7',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 30,
        padding: 10,
        width: 200,
        marginLeft: 75,

    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        textAlign: "left"
    },
});