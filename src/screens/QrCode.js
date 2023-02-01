// import React in our code
import React, { useState, useEffect, useRef } from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Share,
  Image
} from 'react-native';
import { Surface } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import Colors from '../Constants/Colors';
import QRCODE from '../components/QRCODE';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { FlatList } from 'react-native-gesture-handler';

const App = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  let myQRCode = useRef();

  const handleShare =async ()=>{
    const options={
      title: 'Share is your QRcode',
      url: `data:image/png;base64,${dataURL}`,
      subject: 'Share Link', //  for email
      message: "Shubham"
   
    }
  try {
    await Share.open(options);
  } catch (err) {
    console.log(err)
  }
}
  const shareQRCode = () => {
    myQRCode.toDataURL((dataURL) => {
      console.log(dataURL);
      let shareImageBase64 = {
        title: 'React Native',
        url: `data:image/png;base64,${dataURL}`,
        subject: 'Share Link', //  for email
        message: "Shubham"
      };
      Share.share(shareImageBase64).catch((error) => console.log(error));
    });
  };
  ///

  const [users, setUsers] = useState('');
  const todoRef = firebase.firestore().collection('user.email');

  useEffect(() => {
    (async () => {
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
           // console.log("users", JSON.stringify(users));

            setUsers(users);

          }
        )
    })();


  }, []
  );


  const initialItemState = {
    name: " ",
    enroll: " ",
    section: " ",
    father: " ",
    phone: " ",
    address: " "

  }

  const [item, setItem] = useState(initialItemState);
  const [productQRref, setProductQRref] = useState();

  return (
    <FlatList
      data={users}
      numColumns={1}
      renderItem={({ item }) => (

        <SafeAreaView style={{ flex: 1, paddingTop: 15 }}>


          <Text style={styles.titleStyle}>
            Generation of QR Code in React Native
          </Text>
          <View style={(styles.container)}>
            <QRCode 

              // ref={myQRCode}
              //QR code value
              value={JSON.stringify({
                Name: item.name,
                Enroll: item.enroll,
                Section: item.section,
                Father: item.father,
                Phone: item.phone,
                Address: item.address
                


              })}
              size={300}
              //Color of the QR Code (Optional)
              color="black"
              //Background Color of the QR Code (Optional)
              backgroundColor="white"
              enableLinearGradient="true"
              logo={require('/home/shubham/Desktop/fbLogin/src/Image/Bpitqrlogo.png')}
              logoSize={30}

              logoMargin={12}

              getRef={(c) => setProductQRref(c)}
            />
            <SafeAreaView style={{ flex: 1, paddingTop: 50,borderRadius:20}}>
              <View >
                <Text style={{ color: 'black' ,paddingLeft:10,paddingRight:10,paddingBottom:5}}>
                  This is The QR_CODE For the Students Who are Studying in the Bpit College.

                </Text>
              </View>
              <View >
                <Text style={{ color: 'black' ,paddingLeft:10,paddingRight:10}}>
                  In This Qr_Code  Your Id Card detail are Present.
                </Text>
              </View>
            </SafeAreaView>


            <View style={{
              justifyContent: 'space-between',
              flexDirection: 'row-reverse'
            }}>
              
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={shareQRCode}>
                <Text style={styles.buttonTextStyle}>
                  Share QR Code
                </Text>
              </TouchableOpacity>
            </View>


          </View>
        </SafeAreaView>
      )

      }
    />
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "black",
    marginBottom: 10,
    backgroundColor: '#f0ffff',
  },
  textStyle: {
    textAlign: 'center',
    color: "black"

  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    color: "black"

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
    color: "black"
    ,
    margin: 20,

  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    textAlign: "left"
  },
});