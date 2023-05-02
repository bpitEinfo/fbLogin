import React, { useState, createRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//fire base module.
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import firebase from '@react-native-firebase/app';

const RegisterScreen = ({ navigation }) => {
  //User NAme
  const [userName, setUserName] = useState("");
  //phone
  const [addPhone, setAddPhone] = useState('');
  //Enroll
  const [addenroll, setAddEnroll] = useState("");
  //AddSection
  const [addsection, setAddSection] = useState("");
  //AddFather
  const [addfather, setAddFather] = useState("");
  //Addaddress
  const [addaddress, setAddAddress] = useState("");
  //Add Caption
  const [addcaption, setAddCaption] = useState("");
  //User Email
  const [userEmail, setUserEmail] = useState("");
  //User Pass
  const [userPassword, setUserPassword] = useState("");
  //Errror
  const [errortext, setErrortext] = useState("");
  const userNameInputRef = createRef();
  const emailInputRef = createRef();
  const passwordInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext("");
    if (!userEmail) return alert("Please fill Email");
    if (!userPassword) return alert("Please fill Address");

    auth()
      .createUserWithEmailAndPassword(
        userEmail,
        userPassword,

      )
      .then((user) => {
        user.user.sendEmailVerification()
        alert("Verification Mail Sent ")
        console.log(
          "Registration Successful. Please Login to proceed"
        );
        console.log(user);
        if (user) {
          firestore().collection('Users').doc(user.user.email).set({
            name: userName,
            email: userEmail,
            phone: addPhone,
            enroll: addenroll,
                section: addsection,
                father: addfather,
                address: addaddress,
          }).then(() => {
            console.log('User Added')

          }).catch((error) => {
            alert(error);
            //   console.error(error);
          });
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          setErrortext(
            "That email address is already in use!"
          );
        } else {
          setErrortext(error.message);
        }
      });



  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "black", paddingTop: 0 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../Image/BPIT-Logo.png")}
            style={{
              width: "50%",
              height: 100,
              resizeMode: "contain",
              margin: 0,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userName) =>
                setUserName(userName)
              }
              underlineColorAndroid="#f000"
              placeholder="User Name"
              placeholderTextColor="#8b9cb5"
              ref={userNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>


          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(phone) =>
                setAddPhone(phone)
              }
              underlineColorAndroid="#f000"
              placeholder="Phone Number"
              placeholderTextColor="#8b9cb5"
              ref={userNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(enroll) =>
                setAddEnroll(enroll)
              }
              underlineColorAndroid="#f000"
              placeholder="Enrollment Number"
              placeholderTextColor="#8b9cb5"
              ref={userNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(section) =>
                setAddSection(section)
              }
              underlineColorAndroid="#f000"
              placeholder="134-CSE-B-19"
              placeholderTextColor="#8b9cb5"
              ref={userNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(father) =>
                setAddFather(father)
              }
              underlineColorAndroid="#f000"
              placeholder="Father Name"
              placeholderTextColor="#8b9cb5"
              ref={userNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(addaddress) =>
                setAddAddress(addaddress)
              }
              underlineColorAndroid="#f000"
              placeholder="Address"
              placeholderTextColor="#8b9cb5"
              ref={userNameInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(userEmail) =>
                setUserEmail(userEmail)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}>
              {" "}
              {errortext}{" "}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}

          >
            <Text style={styles.buttonTextStyle}>
              REGISTER
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#307ecc",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
});