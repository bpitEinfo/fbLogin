import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Pressable,
} from 'react-native';
import { Paragraph, Surface, Title } from 'react-native-paper';
import {
    Avatar,

    Caption,
    TouchableRipple,
} from 'react-native-paper';
import Colors from "../Constants/Colors";
import { color } from "react-native-reanimated";
//for icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AppHeader from "../components/AppHeader";
import EditProfileScreen from "./EditProfileScreen";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { FlatList } from "react-native-gesture-handler";

// const dummyText = "My name is Shubham Rai."
// export const name = "Shubham Rai"
// export const registration = "00920807220"
// export const section = "134-CSE-B-19"
// const fatherName = "Om Prakash"
// export const phone_number = "8178352411"
const ProfileScreen = (navigation) => {


    const [user, setUser] = useState([]);
    const todoRef = firebase.firestore().collection('user.email');
    const [users, setUsers] = useState('');

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => {
            //  console.log("user", JSON.stringify(user));
            setUser(user);
        });

        return subscriber;
    }, []);



    useEffect(async () => {
        todoRef
            .onSnapshot(
                querySnapshot => {
                    const users = []
                    querySnapshot.forEach((doc) => {
                        const {
                            name,
                            enroll,
                            father,
                            phone,
                            section,
                            caption,
                            address
                        } = doc.data()
                        users.push({
                            id: doc.id,
                            name,
                            enroll,
                            father,
                            phone,
                            section,
                            caption,
                            address
                        })
                    })
                    console.log("users", JSON.stringify(users));

                    setUsers(users);

                }
            )


    }, []
    )


    return (
        <SafeAreaView style={styles.container}>
            {/* <AppHeader
                title={navigation.route.name} headerbg={Colors.green} IconColor={Colors.white}
                menu titleAlight="center" optionalBadge={2} navigation={navigation.navigation}
                // back
                right="more-vertical" rightfunction={() => console.log('right')}
                optionalIcon="bell" optionalFunc={() => console.log('optional')}
            /> */}
            <View style={styles.userInfoSection}>
                <View style={{ marginTop: 10, alignItems: "center", paddingTop: 10 }}>
                    <Avatar.Image
                        source={require('../Image/user-profile.jpg')}
                        size={100}
                    />

                    <View style={{ marginLeft: 20 }}>

                        <Text style={{ marginTop: 10, marginLeft: 0, fontSize: 18, fontWeight: 'bold', color: "black" }}>{users.name}</Text>
                        {user ? (
                            <Text style={{ marginTop: 5, width: "100%", fontSize: 14, color: "black", flexDirection: 'row' }}>
                                Welcome{" "}
                                {user.displayName
                                    ? user.name
                                    : user.email}
                            </Text>
                        ) : null}
                    </View>
                </View>
            </View>

            <View style={styles.profileContainer}>
                <FlatList
                    data={users}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <SafeAreaView >
                            <View style={{ flexDirection: 'row',backgroundColor:'blue',width:'100'}}>
                                <MaterialIcons name="account-circle" color='black' size={20} />
                                <Text style={{ color: 'black', marginBottom: 10 }}>Name : {item.name}</Text>
                            </View>
                            <View>
                                <MaterialIcons name="confirmation-number" color='black' size={20} />
                                <Text style={{ color: 'black' }}>Enrollment Number :  {item.enroll}</Text>
                            </View>
                            <View>
                                <MaterialIcons name="confirmation-number" color='black' size={20} />

                                <Text style={{ color: 'black' }}>Section :  {item.section}</Text>
                            </View>
                            <View>
                                <MaterialIcons name="supervised-user-circle" color='black' size={20} />

                                <Text style={{ color: 'black' }}>Father Name : {item.father}</Text>
                            </View>

                            <View>
                                <MaterialIcons name="phone" color='black' size={20} />

                                <Text style={{ color: 'black' }}> Phone Number{item.phone}</Text>
                            </View>

                            <View>
                                <MaterialIcons color='black' name="closed-caption" size={20} />

                                <Text style={{ color: 'black' }}> Student Caption : {item.caption}</Text>

                            </View>

                            <View>
                                <MaterialIcons name="add" color='black' size={20} />
                                <Text style={{ color: 'black' }}> Student Address {item.address}</Text>
                            </View>



                        </SafeAreaView>

                    )

                    }
                />

            </View >

        </SafeAreaView >

    )
}

export default ProfileScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    profileContainer: {
        flex: 0.7,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    userInfo: {
        flex: 1,
        marginTop: 0,
        width: 350,

    },

    textContainer: {
        alignItems: 'center',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderColor: Colors.green,
        borderWidth: 1,
    },
    bio: {
        borderRadius: 10,
        padding: 1,
        margin: 12,


    }

});