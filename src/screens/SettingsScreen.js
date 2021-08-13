import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import UserData from "../components/UserData";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import * as firebase from "firebase/app";
import "firebase/auth";

const BackGround = require("../../assets/WK-4.jpg");

const SettingsScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const name = navigation.getParam("name", "");
  const age = navigation.getParam("age", "");
  const gender = navigation.getParam("gender", "");
  const height = navigation.getParam("height", "");
  const weight = navigation.getParam("weight", "");
  const goal = navigation.getParam("goal", "");
  const activity = navigation.getParam("activity", "");
  const image = navigation.getParam("image", "");
  const disease = navigation.getParam("disease", "");
  const user = navigation.getParam("user", " ");

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate("Welcome");
    } catch (error) {
      setErrorMessage("Unable to sign out right now");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BackGround} style={styles.container}>
        <View style={styles.Headr}>
          <View>
            <Text
              style={{
                paddingTop: 30,
                paddingLeft: 15,
                fontWeight: "bold",
                fontSize: 20,
                color: "#fff",
              }}
            >
              Profile
            </Text>
            <View style={styles.PhotoView}>
              <Image source={{ uri: image }} style={styles.IMG} />
            </View>
          </View>
          <View style={styles.headText}>
            <Text style={{ color: "#fff", fontSize: 25 }}>Hello</Text>
            <Text style={{ color: "#fff", fontSize: 20 }}>{name}</Text>
          </View>
          <View style={styles.Editbtt}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Edit", {
                  name,
                  age,
                  weight,
                  height,
                  goal,
                  activity,
                  image,
                  user,
                })
              }
            >
              <FontAwesome name='edit' size={30} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.centerView}>
          <UserData
            name={name}
            age={age}
            gender={gender}
            height={height}
            weight={weight}
            goal={goal}
            activity={activity}
            disease={disease}
          />
        </View>
        <View style={{ marginTop: 450 }}>
          <TouchableOpacity
            onPress={() => {
              signOut();
            }}
            style={{ alignSelf: "center" }}
          >
            <Entypo name='log-out' size={40} color='orange' />
          </TouchableOpacity>
          {errorMessage ? (
            <Text style={{ color: "#F10E63" }}>{errorMessage}</Text>
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Headr: {
    height: 200,
    backgroundColor: "rgba(52, 52, 52, 0.7)",
    flexDirection: "row",
  },

  centerView: {
    height: 50,
  },

  PhotoView: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "gray",
    marginTop: 20,
    marginLeft: 10,
  },

  headText: {
    marginTop: 100,
    marginLeft: 20,
  },

  Editbtt: {
    marginTop: 117,
    marginLeft: 120,
  },

  IMG: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
  },
});

export default SettingsScreen;
