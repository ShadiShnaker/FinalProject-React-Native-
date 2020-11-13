import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Edit from "../components/Edit";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");

  return (
    <View style={styles.View1}>
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
        onModifySubmit={() => console.log("Modified")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  View1: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#52677D",
  },
});

export default EditProfile;
