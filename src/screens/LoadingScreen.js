import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../config/config";

class LoadingScreen extends Component {
  componentDidMount = () => {
    this.checkIfLoggedIn();
  };

  checkIfLoggedIn = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //navigate to home screen
        this.props.navigation.navigate("Home", { user: user });
      } else {
        //navigate to Sign up
        this.props.navigation.navigate("SignUp");
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };
  render() {
    return (
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
        <ActivityIndicator size='large' color='blue' />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default LoadingScreen;
