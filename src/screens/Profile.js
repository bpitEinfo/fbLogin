import { StatusBar } from 'react-native';
import react, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImagePickerIOS } from 'react-native';
import {
    Avatar,
    Button,
    Caption,
    TouchableRipple,
} from 'react-native-paper';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Paragraph, Surface, Title } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../Constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import ImagePicker, { openPicker } from 'react-native-image-picker';
import ImagePicker,{openPicker} from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import imgPlaceHolder from '/home/shubham/Desktop/fbLogin/src/Image/avtar.jpeg'
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
const dummyText = "My name is Shubham Rai."
export const name = "Shubham Rai"
export const registration = "00920807220"
export const section = "134-CSE-B-19"
const fatherName = "Om Prakash"
export const phone_number = "8178352411"
const Profile = (props) => {
    const myCustomShare = async() => {
        const shareOptions = {
          message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
          url: files.appLogo,
          // urls: [files.image1, files.image2]
        }
    
        try {
          const ShareResponse = await Share.open(shareOptions);
          console.log(JSON.stringify(ShareResponse));
        } catch(error) {
          console.log('Error => ', error);
        }
      };
    
    const [profile, setProfile] = useState(null);


    const imagePick = () => {
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setProfile(image.path)
        });

    }

    return (
        <View style={[styles.container]}>
            <AppHeader
                title={props.route.name} headerbg={Colors.green} IconColor={Colors.white}
                menu titleAlight="center" optionalBadge={2} navigation={props.navigation}
                // back
                right="more-vertical" rightfunction={() => console.log('right')}
                optionalIcon="bell" optionalFunc={() => console.log('optional')}
            />
            
            <View style={styles.profileContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.image} source={profile ? { uri: profile } : imgPlaceHolder} />
                    <TouchableOpacity onPress={(imagePick)}
                        style={{ alignItems: 'flex-end', top: -10 }}>
                        <Entypo name="pencil" size={30} color={Colors.green} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Title>{name}</Title>
                </View>
                <View style={styles.userInfo} >
                    <Surface style={styles.bio}>
                        <Title>Roll_Number</Title>
                        <Paragraph numberOfLines={4}> {registration} </Paragraph>
                    </Surface>
                    <Surface style={styles.bio}>
                        <Title>Section</Title>
                        <Paragraph numberOfLines={4}> {section} </Paragraph>
                    </Surface>
                    <Surface style={styles.bio}>
                        <Title>Father Name</Title>
                        <Paragraph numberOfLines={4}> {fatherName} </Paragraph>
                    </Surface>
                    <Surface style={styles.bio}>
                        <Title>Phone Number</Title>
                        <Paragraph numberOfLines={4}> {phone_number} </Paragraph>
                    </Surface>
                </View>
            </View> 
            <Button onPress={() => navigation.editProfileScreen()}>Edit</Button>
          
        </View>
    )
}

export default Profile;

 const styles = StyleSheet.create
     ({
         container: {
             flex: 1,
         },
         profileContainer: {
             flex: 0.7,
             marginTop: 10,
             justifyContent: 'center',
             alignItems: 'center',

         },
         userInfo: {
             flex: 1,
             marginTop: 40,
             width:350
         },
         imgContainer: {
             paddingTop: 10,
             marginTop: 10

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
     })