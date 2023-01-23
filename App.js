import React, { useContext, useState ,useEffect} from 'react';
import 'react-native-gesture-handler'
import {
  StyleSheet,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import { AuthContext } from './src/navigation/AuthProvider';
import { AuthProvider } from './src/navigation/AuthProvider';
//firebase
import auth  from '@react-native-firebase/auth';
const Stack= createNativeStackNavigator();
const App = () =>{

const [user,setUser] = useState();
const [initializing,setinitializing] = useState(true);
function onAuthStateChanged(user){
  setUser(user);
  if(initializing) setinitializing(false);
}
useEffect(()=>{
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber;
},[]);
// const onAuthStateChanged=(user)=>{
// setUser(user);
// if(initializing)setinitializing(false);
// }
// useEffect(() => {
//   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//   return subscriber; // unsubscribe on unmount
// }, []);

if(initializing) return null;
return(

 
 <NavigationContainer>
   {/* {user ? <AppStack/> : <AuthStack/>}  */}
   {user ?<AuthStack/>:<AppStack/>} 
  {/* LoginScreen */}
  {/* <AuthStack/>  */}
 {/* //HomeScreen */}
   {/* <AppStack/>  */}

 </NavigationContainer>
)
}


const styles = StyleSheet.create({
  container: {

    flex: 1
  }
});

export default App;
