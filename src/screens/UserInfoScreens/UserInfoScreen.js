import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import Edit from "../../components/Edit";

const UserInfoScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disease, setDisease] = useState("No");

  const goal = navigation.getParam("goal", "");
  const gender = navigation.getParam("gender", "");
  const activity = navigation.getParam("activity", " ");

  const onInfoSubmit = () => {
    if (name != "" && age != "" && weight != "" && height != "") {
      navigation.navigate("SignUp", {
        name,
        age,
        weight,
        height,
        gender,
        goal,
        activity,
        disease,
      });
    } else {
      setErrorMessage("one field or more is empty! please tell us about you.");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: "center",
          color: "#FFF",
          fontSize: 20,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        Tell us more
      </Text>

      {errorMessage ? (
        <Text style={{ color: "#FFF", alignSelf: "center", fontSize: 16 }}>
          {errorMessage}
        </Text>
      ) : null}
      <Edit
        name={name}
        onChangeName={(newName) => setName(newName)}
        age={age}
        onChangeAge={(newAge) => setAge(newAge)}
        weight={weight}
        onChnageWeight={(newWeight) => setWeight(newWeight)}
        height={height}
        onChangeHeight={(newHeight) => setHeight(newHeight)}
        buttonTitle='Modify'
        onModifySubmit={onInfoSubmit}
        disease={disease}
        onChangeValue={(newValue) => setDisease(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    paddingTop: 60,
  },
});

export default UserInfoScreen;
