import React from 'react';
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
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Surface, Title } from 'react-native-paper';
import Unorderedlist from 'react-native-unordered-list'



const Privacy = ({ navigation }) => {
    return (
        <SafeAreaView style={{paddingLeft:10,marginBottom:5}}>

            <ScrollView>
                <Title>Privacy Policy</Title>
                <View>
                    <Text style={{ color: 'black' }}>BPIT built the BPIT app as
                        a Free app. This SERVICE is provided by
                        BPIT at no cost and is intended for use as
                        is.</Text>
                    <Text style={{ color: 'black' }}>This page is used to inform visitors regarding our
                        policies with the collection, use, and disclosure of Personal
                        Information if anyone decided to use our Service.</Text>
                    <Text style={{ color: 'black' }}>If you choose to use our Service, then you agree to
                        the collection and use of information in relation to this
                        policy. The Personal Information that we collect is
                        used for providing and improving the Service. We will not use or share your information with
                        anyone except as described in this Privacy Policy.</Text>
                    <Text style={{ color: 'black' }}>
                        The terms used in this Privacy Policy have the same meanings
                        as in our Terms and Conditions, which are accessible at
                        BPIT unless otherwise defined in this Privacy Policy.
                    </Text>
                </View>

                <Title>Information Collection and Use</Title>
                <View>
                    <Text style={{ color: 'black' }}>
                        For a better experience, while using our Service, we
                        may require you to provide us with certain personally
                        identifiable information, including but not limited to Email,Name,Phone Number,Enroll. The information that
                        we request will be retained by us and used as described in this privacy policy.
                    </Text>

                    <Text style={{ color: 'black' }}>Google Play Services.</Text>
                    <Text style={{ color: 'black' }}>Firebase Crashlytics.
                    </Text>
                    <Unorderedlist  color='black'><Text style={{color:'black'}}>Google Analytics for Firebase

</Text></Unorderedlist>
<Unorderedlist  color='black'><Text style={{color:'black'}}>To perform Service-related services; or
</Text></Unorderedlist>
<Unorderedlist  color='black'><Text style={{color:'black'}}>To assist us in analyzing how our Service is used.
</Text></Unorderedlist>

                </View>
                <View>
                    <Title>Log Data</Title>
                    <Text style={{ color: 'black' }}>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</Text>
                    <Title>Cookies</Title>
                    <Text style={{ color: "black" }}>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                        This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</Text>
                    <Title>Service Providers</Title>
                    <Text style={{ color: "black" }}>We may employ third-party companies and individuals due to the following reasons:

                    </Text>
                  <View>
                  <Unorderedlist  color='black'><Text style={{color:'black'}}>To facilitate our Service;
</Text></Unorderedlist>
<Unorderedlist  color='black'><Text style={{color:'black'}}>To provide the Service on our behalf;

</Text></Unorderedlist>
<Unorderedlist  color='black'><Text style={{color:'black'}}>To perform Service-related services; or
</Text></Unorderedlist>
<Unorderedlist  color='black'><Text style={{color:'black'}}>To assist us in analyzing how our Service is used.
</Text></Unorderedlist>

                  </View>
                    <Text style={{ color: 'black' }}>We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</Text>
                    <Title>Security</Title>
                    <Text style={{ color: "black" }}>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                    </Text>
                    <Title>Links to Other Sites</Title>
                    <Text style={{ color: "black" }}>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</Text>

                    <Title>Changes to This Privacy Policy</Title>
                    <Text style={{ color: "black" }}>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                        This policy is effective as of 2023-01-29.</Text>
                    <Title>Contact Us</Title>
                    <Text style={{ color: "black" }}>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at shubhamrai2508@gmail.com.

                        This privacy policy page was generated by App Privacy Policy Generator.</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

export default Privacy;



const styles = StyleSheet.create({
    Unorderedlist: {
        color: 'black'
    }
});