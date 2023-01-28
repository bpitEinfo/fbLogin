import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { Button, Surface, Card, Title, Paragraph, List } from "react-native-paper";

import { FlatList } from "react-native-gesture-handler";
import AppHeader from "../components/AppHeader";
import Colors from "../Constants/Colors";

import auth from "@react-native-firebase/auth";

const data = [
    { id: '1', title: 'BPIT', image: "https://www.bpitindia.com/wp-content/uploads/2020/10/college.jpg", favorite: true, discription: 'The foundation of Bhagwan Parshuram Institute of Technology (BPIT) was laid in 2005 by Bhartiya Brahmin Charitable Trust and is approved by the Ministry of Human Resource Development, Government of India and the Directorate of Training and Technical Education, Government of National Capital Territory, Delhi . '},
    { id: '2', title: 'College Map', image: "https://www.bpitindia.com/wp-content/uploads/2020/10/college.jpg", favorite: true, discription: 'In This We Tell About BPIT Inner Body.In this we saw a details view of College Map. ' },
    { id: '3', title: 'Admision Process', image: "https://www.bpitindia.com/wp-content/uploads/2020/10/college.jpg", favorite: true, discription: 'To qualify for B. Tech, a candidate has to pass 10+2 with 55% in Physics, Chemistry and Mathematics put together. For In both cases, it is necessary to take the IPU CET for selection. For admission to MBA, a Bachelor"s degree in any field with 50% marks is required' },
    { id: '4', title: 'Placement Records', image: "https://www.bpitindia.com/wp-content/uploads/2020/10/college.jpg", favorite: true, discription: 'The placement in BPIT is improving significantly both in terms of quality and quantity in the last few years. The average package has increased from 3.76 Lakhs per annum to 7.51 Lakhs per annum in last 5 years. The companies like Microsoft (41.86 LPA), Amazon (30.25 LPA), Hotstar (24 LPA), Myntra (24 LPA), Commvault (20 LPA), AWS (19 LPA), Mu Sigma (21 LPA), Byju’s (10 LPA), Josh Technologies (10 LPA), Hashdien (8 LPA), ZS associates (7.93 LPA) regularly visit campus besides all major mass recruiters. The prominent feature of BPIT’s placement is that the median package for 2021 batch is 7.0 LPA. There are twelve companies that offered more than 10 Lakhs per annum package and Twenty-eight companies with more than 7 Lakhs per annum offered jobs to our students for the 2021 pass out batch. The average number of offers per student is 1.6 for 2021 pass out students.' },
    
]
const CardItem =
    ({ item }) => {
        const [showMore, setShowMore] = useState(false);
        return (

            <Card style={styles.cardStyle}>
                <Card.Cover source={{ uri: item.image }} />

                <Card.Content>
                    <Title>{item.title}</Title>
                    <Paragraph numberOfLines={showMore ? 0 : 2}>{item.discription}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Like</Button>
                    <Button>Share</Button>
                    <Button onPress={
                        () => setShowMore(!showMore)
                    }>{showMore ? "Show less " : "Read More"}</Button>

                </Card.Actions>
            </Card>


        )
    }
const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);

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
              .then(() => navigation.replace("Auth"))
              .catch((error) => {
                console.log(error);
                if (error.code === "auth/no-current-user")
                  navigation.replace("Auth");
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
           

    <FlatList style={styles.List}
        data={data}
        keyExtractor={(item, index) => item.id + index.toString()}
        // ListHeaderComponent={
        //     <AppHeader
        //         title="Home" headerbg={Colors.green} IconColor={Colors.white}
        //         menu titleAlight="center" optionalBadge={2} navigation={navigation}
        //         // back
        //         right="more-vertical" rightfunction={() => console.log('right')}
        //         optionalIcon="bell" optionalFunc={() => console.log('optional')}
        //     />
        // }
        renderItem={({ item }) => (
            <CardItem item={item} />
        )}
    />
 
</View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 300,
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  cardStyle: {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    marginBottom:10

},
View: {
    marginTop: 100,
    padding: 10,
},
heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 10,
    marginRight: 155
},
text: {
    marginLeft: 15,
    marginTop: 10,
    marginRight: 155,
},
image: {
    marginLeft: '65%',
    width: 120,
    height: 120,
    paddingBottom: '15%',
    paddingRight: '25%'
},
btn: {
    backgroundColor: 'white',
    width: 150,
    marginBottom: 55,
    marginLeft: 15,
    marginTop: -55,
    borderRadius: 15,
}
});