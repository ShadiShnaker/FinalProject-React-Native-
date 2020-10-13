import React, { useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
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
      setIsLoading(false);
      alert("Please enter email and password");
    }
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              elevation: 1000,
            },
          ]}
        >
          <ActivityIndicator size='large' color='#F10E63' />
        </View>
      ) : null}
      <View style={styles.View1}>
        <Text style={styles.HeaderText}>Sign In</Text>
      </View>
      <View style={styles.View2}>
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
    flex: 0.1,
    alignItems: "center",
  },

  View2: {
    flex: 1,
    paddingTop: 100,
  },
  HeaderText: {
    paddingTop: 120,
    fontSize: 25,
    color: "#F10E63",
    fontStyle: "italic",
    fontWeight: "600",
  },
});

export default SignInScreen;
