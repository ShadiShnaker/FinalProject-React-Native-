import React, { useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase/app";
import "firebase/auth";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    checkIfLoggedIn();

    return function cleanup() {
      unsubscribe();
    };
  });

  checkIfLoggedIn = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user && firebase.auth().currentUser.emailVerified) {
        //navigate to home screen
        navigation.navigate("Home", { user });
      } else {
        //navigate to Sign up
        navigation.navigate("AppStackNavigator");
      }
    });
  };

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: "#772E92",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          elevation: 1000,
        },
      ]}
    >
      <ActivityIndicator size='large' color='black' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoadingScreen;
