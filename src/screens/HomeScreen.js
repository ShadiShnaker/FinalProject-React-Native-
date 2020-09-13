import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Assets } from "react-navigation-stack";

const backGround2 = require("../../assets/background2.jpg");

const HomeScreen = ({ navigation }) => {
  return (
    // Parent View
    <View style={styles.container}>
      {/* Header View */}
      <View style={styles.View1}>
        <Text style={styles.HeaderText1}>Welcome to</Text>
        <Text style={styles.HeaderText2}>AllinFit</Text>
      </View>
      {/* Back Ground Image for the second View */}
      <ImageBackground source={backGround2} style={styles.image}>
        {/* Second View */}
        <View style={styles.View2}>
          {/* Sign Up Button */}
          <TouchableOpacity
            style={[styles.signUpButtonStyle, styles.ButtonStyle]}
            onPress={() => navigation.navigate("signUp")}
          >
            <Text style={styles.HeaderText2}>Sign Up</Text>
          </TouchableOpacity>
          {/* Sign In Button */}
          <View style={{ flex: 0.07 }}>
            <Text style={styles.text}>If you already have an account</Text>
          </View>
          <TouchableOpacity
            style={[styles.signInButtonStyle, styles.ButtonStyle]}
            onPress={() => navigation.navigate("signIn")}
          >
            <Text style={styles.HeaderText2}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    //backgroundColor: "#ECFCFC",
    justifyContent: "space-between",
  },

  View1: {
    flex: 0.25,
    backgroundColor: "#52677D",
    borderBottomColor: "#6BE11D",
    justifyContent: "center",
    alignItems: "center",
  },

  View2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  HeaderText1: {
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#fff",
  },

  HeaderText2: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "600",
    color: "#F10E63",
  },

  ButtonStyle: {
    paddingBottom: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#fff",
  },

  signUpButtonStyle: {
    paddingLeft: 85,
    paddingRight: 85,
    marginTop: 70,
    marginBottom: -25,
  },

  signInButtonStyle: {
    paddingLeft: 88,
    paddingRight: 94,
    marginTop: 50,
    marginBottom: -170,
  },

  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
  },

  text: {
    marginTop: 55,
    fontSize: 15,
    color: "#fff",
  },
});

export default HomeScreen;
