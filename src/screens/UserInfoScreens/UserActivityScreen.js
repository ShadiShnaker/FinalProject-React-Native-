import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const UserActivityScreen = ({ navigation }) => {
  const [activity, setActivity] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState("");
  const goal = navigation.getParam("goal", "");

  //Handli Click function
  const _handleClick = (flag) => {
    if (flag == 1) {
      setSelected(true);
    }
    setValue(flag);
  };

  const onActiveSubmit = () => {
    if (activity != "") {
      navigation.navigate("UserGender", { activity, goal });
    } else {
      setErrorMessage("Please tell us how active are you!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1 }}>
        <Text
          style={{
            alignSelf: "center",
            paddingTop: 50,
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          How active you are?
        </Text>
      </View>
      <View style={styles.ButtonView}>
        <TouchableHighlight
          style={[
            styles.btt,
            {
              backgroundColor: value === "flag1" ? "#EBD9F2" : "#fff",
            },
          ]}
          onPress={(newAct) => {
            _handleClick("flag1");
            setActivity((newAct = "Sedentary"));
          }}
          underlayColor='#fff'
        >
          <View>
            <Text style={styles.TextStyle}>Sedentary </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.ButtonView}>
        <TouchableHighlight
          style={[
            styles.btt,
            {
              backgroundColor: value === "flag2" ? "#EBD9F2" : "#fff",
            },
          ]}
          onPress={(newAct) => {
            _handleClick("flag2");
            setActivity((newAct = "lightly active"));
          }}
          underlayColor='#fff'
        >
          <View>
            <Text style={styles.TextStyle}>lightly active </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.ButtonView}>
        <TouchableHighlight
          style={[
            styles.btt,
            {
              backgroundColor: value === "flag3" ? "#EBD9F2" : "#fff",
            },
          ]}
          onPress={(newAct) => {
            _handleClick("flag3");
            setActivity((newAct = "Moderately active"));
          }}
          underlayColor='#fff'
        >
          <View>
            <Text style={styles.TextStyle}>Moderately active</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.ButtonView}>
        <TouchableHighlight
          style={[
            styles.btt,
            {
              backgroundColor: value === "flag4" ? "#EBD9F2" : "#fff",
            },
          ]}
          onPress={(newAct) => {
            _handleClick("flag4");
            setActivity((newAct = "very active"));
          }}
          underlayColor='#fff'
        >
          <View>
            <Text style={styles.TextStyle}>very active</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.ButtonView}>
        <TouchableHighlight
          style={[
            styles.btt,
            {
              backgroundColor: value === "flag5" ? "#EBD9F2" : "#fff",
            },
          ]}
          onPress={(newAct) => {
            _handleClick("flag5");
            setActivity((newAct = "extra active"));
          }}
          underlayColor='#fff'
        >
          <View>
            <Text style={styles.TextStyle}>extra active</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 0.1 }}>
        <TouchableHighlight
          onPress={onActiveSubmit}
          style={{ alignSelf: "center", paddingTop: 60 }}
          underlayColor='#fff'
        >
          <MaterialCommunityIcons
            name='checkbox-multiple-marked-circle-outline'
            size={45}
            color='black'
          />
        </TouchableHighlight>
        {errorMessage ? (
          <Text style={{ color: "#FFF" }}>{errorMessage}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },

  ButtonView: {
    flex: 0.1,
    backgroundColor: "#FFF",
    borderRadius: 30,
    borderColor: "#772E92",
    borderWidth: 3,
    marginHorizontal: 20,
    marginTop: 30,
  },

  btt: {
    flex: 1,
    borderRadius: 30,
  },

  TextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
  },
});
export default UserActivityScreen;
