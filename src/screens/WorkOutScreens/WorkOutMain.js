import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Picker,
} from "react-native";

const BackGround1 = require("../../../assets/WK-1.jpg");
const BackGround2 = require("../../../assets/WK-2.jpg");

const WorkOutMain = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("Day1");
  const goal = navigation.getParam("goal", "");
  return (
    <View style={styles.Container}>
      <ImageBackground source={BackGround1} style={styles.image}>
        <View style={styles.HeadV}>
          <Text
            style={{
              alignSelf: "center",
              marginTop: 25,
              fontSize: 30,
              color: "red",
              fontWeight: "bold",
            }}
          >
            {goal}
          </Text>
        </View>
        <View style={styles.textInp}>
          <Picker
            selectedValue={selectedValue}
            style={styles.PickerStyle}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label='Day1' value='Day1' />
            <Picker.Item label='Day2' value='Day2' />
            <Picker.Item label='Day3' value='Day3' />
          </Picker>
        </View>

        <View style={[styles.WorOutPlanView, { marginTop: 70 }]}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() =>
              navigation.navigate("TrainingPlan", { goal, selectedValue })
            }
          >
            <Text style={styles.TextView}>Training Plan</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.WorOutPlanView, { marginTop: 70 }]}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("WorkOutGuide", { goal })}
          >
            <Text style={styles.TextView}>Workout Guide</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.WorOutPlanView, { marginTop: 70 }]}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => navigation.navigate("SheduleWorkOut")}
          >
            <Text style={styles.TextView}>Schedule Workout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  HeadV: {
    height: 90,
    backgroundColor: "rgba(52, 52, 52, 0.9)",
  },

  image: {
    flex: 1,
    resizeMode: "stretch",
    //marginTop: 22,
  },

  WorOutPlanView: {
    height: 60,
    backgroundColor: "rgba(52, 52, 52, 0.9)",
    marginHorizontal: 30,
    borderRadius: 180,
  },

  TextView: {
    alignSelf: "center",
    color: "rgba(255,250,250,0.8)",
    fontSize: 23,
    marginTop: 10,
  },

  textInp: {
    backgroundColor: "rgba(52, 52, 52, 0.9)",
    height: 60,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 50,
  },

  PickerStyle: {
    flex: 1,
    alignSelf: "center",
    color: "#fff",
  },
});

export default WorkOutMain;
