import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";

const UserGenderScreen = ({ navigation }) => {
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selected, setselected] = useState("");
  const [value, setValue] = useState("");
  const goal = navigation.getParam("goal", "");
  const activity = navigation.getParam("activity", " ");

  //handle click function
  const _handleClick = (flag) => {
    if (flag == 1) {
      setselected(true);
    }
    setValue(flag);
  };

  const onGenderSubmit = () => {
    if (gender != "") {
      navigation.navigate("UserInfo", { gender, goal, activity });
    } else {
      setErrorMessage("Please select your gender!");
    }
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: "center",
          paddingTop: 180,
          fontSize: 15,
          color: "#FFF",
        }}
      >
        Select your gender:
      </Text>
      <View style={styles.genderView}>
        <View
          style={{
            backgroundColor:
              value === "flag1" ? "#CCE5FF" : "rgba(52, 52, 52, 0)",
          }}
        >
          <TouchableHighlight
            onPress={(newGender) => {
              _handleClick("flag1");
              setGender((newGender = "male"));
            }}
            underlayColor='#fff'
          >
            <Foundation name='male-symbol' size={150} color='black' />
          </TouchableHighlight>
        </View>
        <View
          style={{
            backgroundColor:
              value === "flag2" ? "#FFCCFF" : "rgba(52, 52, 52, 0)",
          }}
        >
          <TouchableHighlight
            onPress={(newGender) => {
              _handleClick("flag2");
              setGender((newGender = "female"));
            }}
            underlayColor='#fff'
          >
            <Foundation name='female-symbol' size={150} color='black' />
          </TouchableHighlight>
        </View>
      </View>
      <TouchableHighlight
        style={{ alignSelf: "center", paddingTop: 50 }}
        onPress={onGenderSubmit}
        underlayColor='#fff'
      >
        <MaterialCommunityIcons
          name='checkbox-multiple-marked-circle-outline'
          size={45}
          color='black'
        />
      </TouchableHighlight>
      {errorMessage ? (
        <Text style={{ color: "#fff", alignSelf: "center" }}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    //justifyContent: "center",
  },

  genderView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 100,
  },
});

export default UserGenderScreen;
