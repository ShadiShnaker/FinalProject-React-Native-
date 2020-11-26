import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UserGoalScreen = ({ navigation }) => {
  const [goal, setGoal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState("");

  //Handli Click function
  const _handleClick = (flag) => {
    if (flag == 1) {
      setSelected(true);
    }
    setValue(flag);
  };

  const onGoalSubmit = () => {
    if (goal != "") {
      navigation.navigate("UserGender", { goal });
    } else {
      setErrorMessage("Please select your goal!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>What's your goal?</Text>
      <View style={styles.ButtonView}>
        <TouchableHighlight
          style={[
            styles.ButtonStyle,
            {
              paddingHorizontal: 55,
              backgroundColor: value === "flag1" ? "#FF99CC" : "#F10E63",
            },
          ]}
          onPress={(newGoal) => {
            _handleClick("flag1");
            setGoal((newGoal = "Maintain-Weight"));
          }}
          underlayColor='#fff'
        >
          <View>
            <Text style={[styles.TextStyle, { fontSize: 18 }]}>
              Maintain Weight
            </Text>
            <Text style={[styles.TextStyle, { fontSize: 12, color: "#fff" }]}>
              Optimize your well-being
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.ButtonView}>
        <TouchableHighlight
          style={[
            styles.ButtonStyle,
            {
              paddingHorizontal: 25,
              backgroundColor: value === "flag2" ? "#FF99CC" : "#F10E63",
            },
          ]}
          onPress={(newGoal) => {
            _handleClick("flag2");
            setGoal((newGoal = "Gain-Weight"));
          }}
          underlayColor='#fff'
        >
          <View>
            <Text style={[styles.TextStyle, { fontSize: 18 }]}>
              Gain Weight
            </Text>
            <Text style={[styles.TextStyle, { fontSize: 12, color: "#fff" }]}>
              Build strength with high-protein food
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.ButtonView}>
        <TouchableHighlight
          style={[
            styles.ButtonStyle,
            { backgroundColor: value === "flag3" ? "#FF99CC" : "#F10E63" },
          ]}
          onPress={(newGoal) => {
            _handleClick("flag3");
            setGoal((newGoal = "Lose-Weight"));
          }}
          underlayColor='#fff'
        >
          <View>
            <Text style={[styles.TextStyle, { fontSize: 18 }]}>
              Lose Weight
            </Text>
            <Text style={[styles.TextStyle, { fontSize: 12, color: "#fff" }]}>
              Manage your weight by eating smarter
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <TouchableHighlight onPress={onGoalSubmit} underlayColor='#fff'>
        <MaterialCommunityIcons
          name='checkbox-multiple-marked-circle-outline'
          size={45}
          color='black'
        />
      </TouchableHighlight>
      {errorMessage ? (
        <Text style={{ color: "#F10E63" }}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#52677D",
    justifyContent: "center",
    alignItems: "center",
  },

  ButtonStyle: {
    backgroundColor: "#F10E63",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#fff",
  },

  ButtonView: {
    marginVertical: 20,
  },

  TextStyle: {
    alignSelf: "center",
  },
});
export default UserGoalScreen;
