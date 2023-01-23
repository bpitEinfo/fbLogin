// Generation of QR Code in React Native
// https://aboutreact.com/generation-of-qr-code-in-react-native/

// import React in our code
import React, { useState, useRef } from 'react';
import AppHeader from '../Components/AppHeader';
import Profile  from './Profile';
import { registration ,phone_number,name,section} from './Profile';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Share,
} from 'react-native';
import { Surface } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import Colors from '../Constants/Colors';

const App = (props) => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  let myQRCode = useRef();

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

  return (

    <SafeAreaView style={{ flex: 1, paddingTop: 0 }}>
      <View>
        <AppHeader
          title={props.route.name} headerbg={Colors.green} IconColor={Colors.white}
          menu titleAlight="center" optionalBadge={2} navigation={props.navigation}
          // back
          right="more-vertical" rightfunction={() => console.log('right')}
          optionalIcon="bell" optionalFunc={() => console.log('optional')}
        />
      </View>
      <View style={(styles.container)}>

        <Text style={styles.titleStyle}>
          Generation of QR Code in React Native
        </Text>
        <QRCode

          getRef={(ref) => (myQRCode = ref)}
          // ref={myQRCode}
          //QR code value
          value={qrvalue ? qrvalue : 'NA'}
          //size of QR Code
          size={230}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          enableLinearGradient="true"
          logo={require('/home/shubham/Desktop/project/Header/assets/Bpitqrlogo.png')}
          logoSize={35}
          logoMargin={2}
        />
        <Text style={styles.textStyle}>
          Please insert any value to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(inputText) => setInputText(inputText)}
         // placeholder="Enter Any Value"
          value={registration}
        />
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setQrvalue(registration)}>
            <Text style={styles.buttonTextStyle}>
              Generate QR Code
            </Text>
          </TouchableOpacity>
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
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
  },
  textInputStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
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
    margin: 20,

  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    textAlign: "left"
  },
});