import React, { useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import InAppAuth from "../components/InAppAuth";
import * as firebase from "firebase/app";
import "firebase/auth";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSignUp = async () => {
    setIsLoading(true);
    if (email && pass) {
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, pass)
          .then((res) => {
            res.user
              .sendEmailVerification()
              .then(() => {
                alert("A verification link has sent to your email account.");
                navigation.navigate("SignIn");
              })
              .catch((err) => {
                console.log("err");
              });
          });
        if (response) {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("user already Exists. Try loggin in");
            break;

          case "auth/invalid-email":
            alert("Email is not correct");
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default SignUpScreen;
