import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import GoogleSignIn from "../components/GoogleSignIn";

const backGround = require("../../assets/img1.jpg");

const SignInScreen = () => {
  return (
    <View style={styles.Container}>
      <ImageBackground source={backGround} style={styles.backImg}>
        <View style={styles.view1}>
          <GoogleSignIn />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  backImg: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
  },

  view1: {
    paddingTop: 600,
  },
});

export default SignInScreen;
