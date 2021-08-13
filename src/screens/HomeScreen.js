import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  LogBox,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import BMI from "../components/BMI";
import BMR from "../components/BMR";
import FoodPlan from "../components/FoodPlan";
import MotivationQ from "../components/MotivationQ";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const backGround = require("../../assets/HOME.jpg");
const backGround2 = require("../../assets/WK-3.jpg");

const HomeScreen = ({ navigation }) => {
  LogBox.ignoreLogs(["Setting a timer"]);
  LogBox.ignoreLogs([
    "Your project is accessing the following APIs from a deprecated global rather than a module import: Constants (expo-constants).",
  ]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [activity, setActivity] = useState("");
  const [image, setImage] = useState(null);
  const [disease, setDisease] = useState("");
  const user = navigation.getParam("user", " ");

  const getUserData = async () => {
    firebase
      .database()
      .ref("users/" + user.uid)
      .on("value", (snapshot) => {
        setName(snapshot.val().name);
        setAge(snapshot.val().age);
        setWeight(snapshot.val().weight);
        setHeight(snapshot.val().height);
        setGender(snapshot.val().gender);
        setDisease(snapshot.val().disease);
        setGoal(snapshot.val().goal);
        setActivity(snapshot.val().activity);
        setImage(snapshot.val().profileImgUrl);
      });
  };

  useEffect(() => {
    let mount = true;
    var houres = new Date().getHours();

    if (houres >= "16" || houres < "03") {
      setWelcomeMessage("GOOD EVNING");
    } else if (houres >= "10" || houres < "16") {
      setWelcomeMessage("GOOD AFTERNOON");
    } else {
      setWelcomeMessage("GOOD MORNING");
    }

    if (mount) {
      getUserData();
    }

    return () => {
      mount = false;
    };
  }, [1]);

  return (
    <View style={styles.container}>
      <ImageBackground source={backGround2} style={styles.image}>
        {/* Header View */}
        <View style={styles.HeadrV}>
          <View style={{ flex: 0.5 }}>
            <Text style={{ fontSize: 13, color: "black", fontWeight: "bold" }}>
              {welcomeMessage}
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 25,
                color: "black",
                fontWeight: "bold",
              }}
            >
              {name}
            </Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              style={[styles.imageBtt, { marginLeft: 100 }]}
              onPress={() =>
                navigation.navigate("Settings", {
                  name,
                  age,
                  weight,
                  height,
                  gender,
                  goal,
                  activity,
                  image,
                  disease,
                  user,
                })
              }
            >
              <Image source={{ uri: image }} style={styles.imageBtt} />
            </TouchableOpacity>
          </View>
        </View>
        {/****************/}
        {/* Second View (Health quotes) */}
        <View style={styles.SecondV}>
          <MotivationQ />
        </View>
        {/****************/}
        {/**Scroll View **/}

        <ScrollView style={styles.ScView}>
          {/* BMI View */}
          <View style={styles.BMIV}>
            <BMI weight={weight} height={height} />
          </View>
          {/**************/}
          {/* BMR View */}
          <View style={styles.BMRV}>
            <BMR
              age={age}
              gender={gender}
              weight={weight}
              height={height}
              goal={goal}
              activity={activity}
            />
          </View>
          {/***************/}
          {/*****Food Dual View */}
          <View style={styles.DualFoodV}>
            <View style={styles.FoodPV}>
              <FoodPlan
                goal={goal}
                onModifySubmit={() => navigation.navigate("FoodP", { goal })}
              />
            </View>
            <View style={styles.FoodAn}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => navigation.navigate("Nutrition")}
              >
                <Text style={[styles.FoodAnTextV, { marginTop: 20 }]}>
                  Food Analysis
                </Text>
                <MaterialIcons
                  name='analytics'
                  size={60}
                  color='rgba(255,255,255,0.7)'
                  style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/*******************/}
          {/* Vitamine intake per day View */}
          <View style={styles.VitamineIntakeV}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => navigation.navigate("Vitamine", { gender })}
            >
              <Text style={[styles.VitanineTextV, { marginTop: 13 }]}>
                Suggested Vitamin Intake per day
              </Text>
            </TouchableOpacity>
          </View>
          {/************************/}
          {/* Special Food Plan */}
          {disease != "No" ? (
            <View style={styles.VitamineIntakeV}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() =>
                  navigation.navigate("chronicDiseases", { disease })
                }
              >
                <Text style={[styles.VitanineTextV, { marginTop: 13 }]}>
                  Special Food Plan
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          {/************************/}
          {/* Work Out View */}
          <View style={[styles.DualFoodV, { height: 100 }]}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => navigation.navigate("WorkOutMain", { goal })}
            >
              <View style={styles.workoutv}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.workouttextV}>Work</Text>
                  <Text
                    style={[
                      styles.workouttextV,
                      { fontSize: 24, color: "red" },
                    ]}
                  >
                    Out
                  </Text>
                </View>
                <MaterialIcons
                  name='fitness-center'
                  size={60}
                  color='red'
                  style={styles.dumbleIV}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  },

  HeadrV: {
    marginHorizontal: 20,
    marginTop: 45,
    height: 100,
    flexDirection: "row",
  },

  imageBtt: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "gray",
  },

  SecondV: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    marginHorizontal: 20,
    height: 120,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  ScView: {
    //backgroundColor: "black",
    marginHorizontal: 20,
    marginTop: 10,
  },

  BMIV: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.3)",
    height: 160,
  },

  BMRV: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.3)",
    height: 190,
    marginTop: 10,
  },

  DualFoodV: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.3)",
    height: 142,
    flexDirection: "row",
    marginTop: 10,
  },

  FoodPV: {
    flex: 0.5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.4)",
  },

  FoodAn: {
    flex: 0.5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.4)",
  },

  FoodAnTextV: {
    alignSelf: "center",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },

  VitamineIntakeV: {
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.3)",
    height: 65,
    flexDirection: "row",
    marginTop: 10,
  },

  VitanineTextV: {
    alignSelf: "center",
    fontSize: 20,
    color: "#4BD459",
    fontWeight: "bold",
  },

  workoutv: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "rgba(52, 52, 52, 0.9)",
    flexDirection: "row",
  },

  workouttextV: {
    alignSelf: "center",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 80,
  },

  dumbleIV: {
    alignSelf: "center",
    paddingLeft: 80,
  },
});

export default HomeScreen;
