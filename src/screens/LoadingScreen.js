import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase/app";
import "firebase/auth";

class LoadingScreen extends Component {
  componentDidMount = () => {
    this.checkIfLoggedIn();
  };

  checkIfLoggedIn = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //navigate to home screen
        this.props.navigation.navigate("Home", { user });
      } else {
        //navigate to Sign up
        this.props.navigation.navigate("AppStackNavigator");
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
            backgroundColor: "#52677D",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            elevation: 1000,
          },
        ]}
      >
        <ActivityIndicator size='large' color='#F10E63' />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default LoadingScreen;
