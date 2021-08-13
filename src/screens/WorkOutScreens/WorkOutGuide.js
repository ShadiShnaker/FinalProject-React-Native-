import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import GainMass from "../../components/TrainngPlanComponents/GainMass";
import LoseMass from "../../components/TrainngPlanComponents/LoseMass";
const backGround2 = require("../../../assets/WK-3.jpg");

const WorkOutGuide = ({ navigation }) => {
  const goal = navigation.getParam("goal", "");
  return (
    <View style={styles.container}>
      <ImageBackground source={backGround2} style={styles.container}>
        <View style={styles.Headr}>
          <Text
            style={{
              alignSelf: "center",
              fontStyle: "italic",
              marginTop: 48,
              fontSize: 25,
              color: "#fff",
            }}
          >
            Guide For
          </Text>
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 30,
              color: "red",
            }}
          >
            {goal}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {goal === "Gain-Weight" ? <GainMass /> : null}
          {goal === "Lose-Weight" ? <LoseMass /> : null}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ComponentV: {
    marginTop: 10,
  },
  Headr: {
    height: 150,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});

export default WorkOutGuide;
