import React from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity, ImageBackground, TextInput, Keyboard, Alert, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { color } from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from "react-native-reanimated";
import { Image } from "react-native-svg";
import ImagePicker from "react-native-image-crop-picker";
import { useState, useEffect } from "react";
import ManageExternalStorage from 'react-native-manage-external-storage';
import auth, { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';






const EditProfileScreen = () => {

    const [user, setUser] = useState();


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => {
            console.log("user", JSON.stringify(user));
            setUser(user);
        });

        return subscriber;
    }, []);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [userData, setUserData] = useState(null);
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            croping: true,
        }).then(image => {
            console.log(image)
        });

    }
    const todoRef = firebase.firestore().collection('newData');
    const [addData, setAddData] = useState();
    const [addPhone, setAddPhone] = useState();
    const [addenroll, setAddEnroll] = useState();
    const [addsection, setAddSection] = useState();
    const [addfather, setAddFather] = useState();
    const [addaddress, setAddAddress] = useState();
    const [addcaption, setAddCaption] = useState();
    const AddField = () => {
        if (addData && addData.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                name: addData,
                createdAt: timestamp,
                phone: addPhone,
                enroll: addenroll,
                section: addsection,
                father: addfather,
                address: addaddress,
                caption: addcaption,

            };
            todoRef
                .add(data)
                .then(() => {
                    //release the new field
                    setAddData('');
                    //release keyboard
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    alert(error);
                })
        }
    }


    const imagePick = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);

        });

    }


    renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle} onPress={takePhotoFromCamera}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle} onPress={imagePick}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}
                onPress={() => this.bs.current.snapTo(1)}
            >
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>

        </View>
    )
    renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    )



    bs = React.createRef();
    fall = new Animated.Value(1);



    return (
        <ScrollView>
            <View style={styles.container}>
                <BottomSheet
                    ref={this.bs}
                    snapPoints={[330, 0]}
                    renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                />
                <Animated.View style={{
                    margin: 20,
                    opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
                }}>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.bs.current.snapTo(0)}>
                            <View style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <ImageBackground
                                    source={require('../Image/user-profile.jpg')}

                                    style={{
                                        height: 100, width: 100
                                    }}
                                    imageStyle={{ borderRadius: 15 }}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Icon
                                            name="camera" size={35} color="#fff"
                                            style={{
                                                opacity: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderWidth: 1,
                                                borderColor: '#fff',
                                                borderRadius: 10,
                                            }}
                                        />
                                    </View>

                                </ImageBackground>

                            </View>
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold', color: "black" }}>Shubham Rai</Text>
                        {user ? (
                            <Text style={{ marginTop: 5, fontSize: 15, color: "black" }}>
                                Welcome{" "}
                                {user.displayName
                                    ? user.name
                                    : user.uid}
                            </Text>
                        ) : null}
                    </View>
                    <View style={styles.action}>
                        <FontAwesome color={color.text} name="user-o" size={20} />
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={(name) => setAddData(name)}
                            value={addData}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome color={color.text} name="user-o" size={20} />
                        <TextInput
                            placeholder="Phone Number"
                            keyboardType="number-pad"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={(phone) => setAddPhone(phone)}
                            value={addPhone}
                        />
                    </View>

                    <View style={styles.action}>
                        <FontAwesome color={color.text} name="user-o" size={20} />
                        <TextInput
                            placeholder="Enrollment Number "
                            placeholderTextColor="#666666"
                            keyboardType="number-pad"
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={(enroll) => setAddEnroll(enroll)}
                            value={addenroll}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome color={color.text} name="user-o" size={20} />
                        <TextInput
                            placeholder="Section "
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={(section) => setAddSection(section)}
                            value={addsection}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome color={color.text} name="user-o" size={20} />
                        <TextInput
                            placeholder="Father Name"
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={(father) => setAddFather(father)}
                            value={addfather}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome color={color.text} name="user-o" size={20} />
                        <TextInput
                            placeholder="Address "
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={(address) => setAddAddress(address)}
                            value={addaddress}
                        />
                    </View>
                    <View style={styles.action}>
                        <FontAwesome color={color.text} name="user-o" size={20} />
                        <TextInput
                            placeholder="Caption "
                            placeholderTextColor="#666666"
                            autoCorrect={false}
                            style={styles.textInput}
                            onChangeText={(caption) => setAddCaption(caption)}
                            value={addcaption}
                        />
                    </View>

                    <TouchableOpacity style={styles.commandButton} onPress={AddField}><Text style={styles.panelButtonTitle}>Submit</Text></TouchableOpacity>

                </Animated.View>
            </View>

        </ScrollView>
    )
}

export default EditProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 14,
        backgroundColor: 'black',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 45,
        color: 'black'
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 0,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});