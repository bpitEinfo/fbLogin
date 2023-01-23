import React, { useState } from "react";
import { StyleSheet,View,Text,TextInput,TouchableOpacity, Button} from "react-native";
import auth from '@react-native-firebase/auth';





const LoginScreen = ()=> {
  const [email,setEmail] = useState('');
  const[password, setPassword] =useState('');

  const attemptLogin=() =>{
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
  }

  return(
    // <View>
    //   <Text>
    //     Login Page
    //   </Text>
    //   <Button title="Submit" onPress={attemptLogin}> </Button>
    // </View>
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Email or username"
      placeholderTextColor="#999"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={text => setEmail(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="#999"
      secureTextEntry={true}
      onChangeText={text => setPassword(text)}
    />
    <TouchableOpacity style={styles.buttonContainer} onPress={attemptLogin}>
      <Text style={styles.buttonText}>Sign in</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('SignUp')}
    >
      <Text style={styles.buttonText}>Sign up</Text>
    </TouchableOpacity>
  </View>
  )
}
export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color:'#f0f'
  },
  input: {
    height: 48,
    width:200,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#4BB0EE',
    height: 48,
    width:100,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
