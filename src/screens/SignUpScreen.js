import React, { useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import InAppAuth from "../components/InAppAuth";
import * as firebase from 'firebase/app'
import 'firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSignUp = async () => {
    setIsLoading(true);
    if(email && pass){
      try{
        const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass);
        if(response){
          setIsLoading(false);
          navigation.navigate('SignIn');
        }
      }catch(error){
        setIsLoading(false);
        switch(error.code){
          case 'auth/email-already-in-use':
            alert('user already Exists. Try loggin in')
          break;

          case 'auth/invalid-email':
            alert('Email is not correct')
        }
      }
    }
    else{
      alert('Please enter email and password');
    }
}
  return (
    <View style={styles.container}>
      {isLoading ?
      <View style = {[StyleSheet.absoluteFill,{alignItems:'center', justifyContent:'center',
      zIndex: 1000, elevation:1000}]}>
        <ActivityIndicator size='large' color= 'blue'/>
      </View>
      :null}
      <View style={styles.View1}>
        <InAppAuth
          buttonTitle='Sign Up'
          email={email}
          onChangeEmail={(newEmail) => setEmail(newEmail)}
          pass={pass}
          onChangePass={(newPass) => setPass(newPass)}
          onButtonSubmit={onSignUp}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#52677D",
  },

  View1: {
    paddingTop: 300,
  },
});

export default SignUpScreen;
