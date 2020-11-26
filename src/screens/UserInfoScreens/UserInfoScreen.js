import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Edit from "../../components/Edit";

const UserInfoScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const goal = navigation.getParam("goal", "");
  const gender = navigation.getParam("gender", "");

  const onInfoSubmit = () => {
    if (name != "" && age != "" && weight != "" && height != "") {
      navigation.navigate("SignUp", {
        name,
        age,
        weight,
        height,
        gender,
        goal,
      });
    } else {
      setErrorMessage("one field or more is empty! please tell us about you.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <Text style={{ alignSelf: "center", color: "#F10E63", fontSize: 20 }}>
          Tell us more
        </Text>
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
        />
        <View>
          {errorMessage ? (
            <Text
              style={{ color: "#F10E63", alignSelf: "center", fontSize: 16 }}
            >
              {errorMessage}
            </Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52677D",
  },

  View1: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 100,
  },
});

export default UserInfoScreen;
