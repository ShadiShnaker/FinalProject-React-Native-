import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const GoogleIcon = require("../../assets/google.png");

const SignIn = () => {
  return (
    <View style={styles.view1}>
      <Image source={GoogleIcon} style={styles.logo} />
      <TouchableOpacity style={{ flex: 1 }}>
        <Text style={styles.ButtonTittleStyle}>Sign in with google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "#CF495F",
    height: 45,
    borderRadius: 5,
    marginHorizontal: 30,
    flexDirection: "row",
  },

  logo: {
    width: 35,
    height: 35,
    marginTop: 5,
    marginLeft: 7,
  },

  ButtonTittleStyle: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 50,
    marginTop: 5,
  },
});

export default SignIn;
