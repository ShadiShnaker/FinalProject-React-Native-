import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  LogBox,
} from "react-native";
import InAppAuth from "../components/InAppAuth";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const SignUpScreen = ({ navigation }) => {
  LogBox.ignoreLogs(["Setting a timer"]);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const name = navigation.getParam("name", "");
  const age = navigation.getParam("age", "");
  const weight = navigation.getParam("weight", "");
  const height = navigation.getParam("height", "");
  const disease = navigation.getParam("disease", "");
  const gender = navigation.getParam("gender", "");
  const goal = navigation.getParam("goal", "");
  const activity = navigation.getParam("activity", " ");

  const onSignUp = async () => {
    setIsLoading(true);
    if (email && pass) {
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, pass);

        if (response) {
          setIsLoading(false);
          const user = await firebase
            .database()
            .ref("users/" + response.user.uid)
            .set({
              email: response.user.email,
              name: name,
              age: age,
              gender: gender,
              weight: weight,
              height: height,
              disease: disease,
              goal: goal,
              activity: activity,
              uid: response.user.uid,
            });
          await firebase.auth().currentUser.sendEmailVerification();
          alert("A verification link has sent to your email account.");
          navigation.navigate("SignIn");
        }
      } catch (error) {
        setIsLoading(false);
        switch (error.code) {
          case "auth/email-already-in-use":
            setErrorMessage("User already Exists. Try loggin in");
            break;

          case "auth/invalid-email":
            setErrorMessage("Email is not correct");
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
        <Text style={styles.HeaderText}>Sign Up</Text>
      </View>
      <View style={styles.View2}>
        <InAppAuth
          buttonTitle='REGISTER'
          email={email}
          onChangeEmail={(newEmail) => setEmail(newEmail)}
          pass={pass}
          onChangePass={(newPass) => setPass(newPass)}
          onButtonSubmit={onSignUp}
        />
      </View>
      <View style={styles.View1}>
        {errorMessage ? (
          <Text style={{ color: "#F10E63" }}>{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#772E92",
  },
  View1: {
    flex: 0.1,
    alignItems: "center",
  },
  View2: {
    flex: 0.5,
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

export default SignUpScreen;
