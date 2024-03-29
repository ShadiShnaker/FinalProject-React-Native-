import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import InAppAuth from "../components/InAppAuth";
import * as firebase from "firebase/app";
import "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onPassReset = () => {
    const auth = firebase.auth();
    const emailAddress = email;

    try {
      auth.sendPasswordResetEmail(emailAddress);
      alert("Password Reset Request ent to you email " + email);
    } catch (error) {
      setErrorMessage("Somthing went wrong");
    }
  };

  const onSignIn = async () => {
    setIsLoading(true);
    if (email && pass) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, pass);
        if (response) {
          setIsLoading(false);
          if (firebase.auth().currentUser.emailVerified) {
            navigation.navigate("LoadingScreen");
          } else {
            alert(
              "User not verified! Please verify the email address for " +
                email +
                " ."
            );
          }
        }
      } catch (error) {
        setIsLoading(false);
        switch (error.code) {
          case "auth/user-not-found":
            setErrorMessage(
              "A user with that email does not exist. Try signing Up!"
            );
            navigation.navigate("LoadingScreen");
            break;

          case "auth/invalid-email":
            setErrorMessage("Please enter a valid email address");
            break;

          case "auth/wrong-password":
            setErrorMessage("Wrong password");
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
          <ActivityIndicator size='large' color='black' />
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
      <View style={{ alignItems: "center", flex: 0.1 }}>
        {errorMessage ? (
          <Text style={{ color: "#FFF" }}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity onPress={onPassReset}>
          <Text style={{ color: "#fff" }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "space-between",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
  View1: {
    flex: 0.1,
    alignItems: "center",
  },

  View2: {
    flex: 0.9,
    paddingTop: 100,
  },
  HeaderText: {
    paddingTop: 120,
    fontSize: 25,
    color: "#FFF",
    fontStyle: "italic",
    fontWeight: "600",
  },
});

export default SignInScreen;
