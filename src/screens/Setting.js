import React, { useState } from 'react';
import { Button, View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';
import Colors from '../Constants/Colors';
import Rate ,{AndroidMarket} from 'react-native-rate';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AppHeader from '../components/AppHeader';

//import Share from 'react-native-share';
const Setting = (props) => {
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
    return (

        <View>
            <AppHeader
                title={props.route.name} headerbg={Colors.green} IconColor={Colors.white}
                menu titleAlight="center" optionalBadge={2} navigation={props.navigation}
                // back
                right="more-vertical" rightfunction={() => console.log('right')}
                optionalIcon="bell" optionalFunc={() => console.log('optional')}
            />

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
        marginVertical: 15
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