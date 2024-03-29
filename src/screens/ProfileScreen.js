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
//Vector Icon is user for render Icons 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
//Flat List is used for rendser the similar structured data in scrollable list.
import { FlatList } from "react-native-gesture-handler";

// const dummyText = "My name is Shubham Rai."
// export const name = "Shubham Rai"
// export const registration = "00920807220"
// export const section = "134-CSE-B-19"
// const fatherName = "Om Prakash"
// export const phone_number = "8178352411"
const ProfileScreen = (navigation) => {

    //UseState hook is used to  create state variables for our component. State variables are used to store dynamic data in our component which can user interacts with it.
    //User store data in todoRef variable
    const user = firebase.auth().currentUser;

    const todoRef = firebase.firestore().collection('Users').doc(user.email);
    const [users, setUsers] = useState('');
    //useEffect hook is used  to allow us to respond to cahnge in the component 
    //It is used  update data
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => {
            //  console.log("user", JSON.stringify(user));
            //store in user data
            // setUser(user);
        });

        // return subscriber;
    }, []);
    firestore()
        .collection('Users')
        .get()
        .then(querySnapshot => {
            //  console.log('Total users: ', querySnapshot.size);
            const users = []
            querySnapshot.forEach(documentSnapshot => {
                const {
                    name,
                    enroll,
                    father,
                    phone,
                    section,
                    caption,
                    address
                } = documentSnapshot.data()
                users.push({
                    id: documentSnapshot.id,
                    name,
                    enroll,
                    father,
                    phone,
                    section,
                    caption,
                    address
                })

            });
            setUsers(users);

        });




    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.userInfoSection}>
                <View style={{ marginTop: 10, alignItems: "center", paddingTop: 10 }}>
                    {/* It is used Avatar Image */}
                    <Avatar.Image
                        source={require('../Image/user-profile.jpg')}
                        size={100}
                    />

                    <View style={{ marginLeft: 20 }}>

                        <Text style={{ marginTop: 10, marginLeft: 0, fontSize: 18, fontWeight: 'bold', color: "black" }}>{ }</Text>

                        <Text style={{ marginTop: 5, width: "100%", fontSize: 14, color: "black", flexDirection: 'row' }}>
                            Welcome : {user.email}

                        </Text>

                    </View>
                </View>
            </View>

            <View style={styles.profileContainer}>
                {/* //FlatList component displays the similar structured data in a scrollable list */}

                <FlatList
                    data={users}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <SafeAreaView >
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 350, height: 34, borderRadius: 50, marginBottom: 10 }}>
                                <MaterialIcons name="account-circle" color='black' size={25} style={{ marginBottom: 1, marginLeft: 4, marginTop: 4 }} />
                                <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, marginTop: 6 }}>Name : {item.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 350, height: 34, borderRadius: 50, marginBottom: 10 }}>
                                <MaterialIcons name="confirmation-number" color='black' size={20} style={{ marginBottom: 1, marginLeft: 4, marginTop: 4 }} />
                                <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, marginTop: 6 }}>Enrollment Number :  {item.enroll}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 350, height: 34, borderRadius: 50, marginBottom: 10 }}>
                                <MaterialIcons name="confirmation-number" color='black' size={20} style={{ marginBottom: 1, marginLeft: 4, marginTop: 4 }} />

                                <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, marginTop: 6 }}>Section :  {item.section}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 350, height: 34, borderRadius: 50, marginBottom: 10 }}>
                                <MaterialIcons name="supervised-user-circle" color='black' size={20} style={{ marginBottom: 1, marginLeft: 4, marginTop: 4 }} />

                                <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, marginTop: 6 }}>Father Name : {item.father}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 350, height: 34, borderRadius: 50, marginBottom: 10 }}>
                                <MaterialIcons name="phone" color='black' size={20} style={{ marginBottom: 1, marginLeft: 4, marginTop: 4 }} />

                                <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, marginTop: 6 }}> Phone Number{item.phone}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 350, height: 34, borderRadius: 50, marginBottom: 10 }}>
                                <MaterialIcons color='black' name="closed-caption" size={20} style={{ marginBottom: 1, marginLeft: 4, marginTop: 4 }} />

                                <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, marginTop: 6 }}> Student Caption : {item.caption}</Text>

                            </View>

                            <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 350, height: 34, borderRadius: 50, marginBottom: 10 }}>
                                <MaterialIcons name="add" color='black' size={20} style={{ marginBottom: 1, marginLeft: 4, marginTop: 4 }} />
                                <Text style={{ color: 'black', marginBottom: 10, marginLeft: 10, marginTop: 6 }}> Student Address : {item.address}</Text>
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