import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import InAppAuth from "../components/InAppAuth";
import * as firebase from "firebase/app";
import "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSignIn = async () => {
    setIsLoading(true);
    if (email && pass) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, pass);
        if (response) {
          setIsLoading(false);
          navigation.navigate("LoadingScreen");
        }
      } catch (error) {
        setIsLoading(false);
        switch (error.code) {
          case "auth/user-not-found":
            alert("A user with that email does not exist. Try signing Up!");
            navigation.navigate("LoadingScreen");
            break;

          case "auth/invalid-email":
            alert("Please enter an email address");
        }
      }
    } else {
      alert("Please enter email and password");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <InAppAuth
          buttonTitle='Log In'
          email={email}
          onChangeEmail={(newEmail) => setEmail(newEmail)}
          pass={pass}
          onChangePass={(newPass) => setPass(newPass)}
          onButtonSubmit={onSignIn}
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

export default SignInScreen;
