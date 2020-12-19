import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground, LogBox } from "react-native";
import BMI from "../components/BMI";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const backGround = require("../../assets/HOME.jpg");

const HomeScreen = ({ navigation }) => {
  LogBox.ignoreLogs(["Setting a timer"]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const getUserData = async () => {
    const user = navigation.getParam("user", " ");

    const currentUserData = await firebase
      .database()
      .ref("users/" + user.uid)
      .once("value", (snapshot) => {
        setName(snapshot.val().name);
        setWeight(snapshot.val().weight);
        setHeight(snapshot.val().height);
      });

    setCurrentUser(currentUserData);
  };

  useEffect(() => {
    var houres = new Date().getHours();

    if (houres >= "16" || houres < "03") {
      setWelcomeMessage("GOOD EVNING");
    } else if (houres >= "10" || houres < "16") {
      setWelcomeMessage("GOOD AFTERNOON");
    } else {
      setWelcomeMessage("GOOD MORNING");
    }

    getUserData();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground source={backGround} style={styles.image}>
        <Text
          style={{
            paddingTop: 55,
            paddingLeft: 20,
            fontSize: 11,
            color: "#C1B8D0",
          }}
        >
          {welcomeMessage}
        </Text>

        <Text
          style={{
            paddingLeft: 20,
            fontSize: 25,
            color: "#FFF",
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>

        <BMI weight={weight} height={height} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52677D",
  },

  image: {
    flex: 1,
  },
});

export default HomeScreen;
