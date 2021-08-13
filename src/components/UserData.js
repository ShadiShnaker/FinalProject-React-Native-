import React, { useState } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Foundation,
  Feather,
} from "@expo/vector-icons";

const UserData = (props) => {
  return (
    <View>
      <View style={styles.textInp}>
        <MaterialCommunityIcons
          style={styles.Icon}
          name='rename-box'
          size={24}
          color='rgba(255,255,255,0.7)'
        />
        <Text style={styles.Textin}>{props.name}</Text>
      </View>
      <View style={styles.textInp}>
        <MaterialCommunityIcons
          name='human-male-height'
          size={24}
          color='rgba(255,255,255,0.7)'
          style={styles.Icon}
        />
        <Text style={styles.Textin}>{props.age}</Text>
      </View>
      <View style={styles.textInp}>
        <FontAwesome5
          name='weight-hanging'
          size={24}
          color='rgba(255,255,255,0.7)'
          style={styles.Icon}
        />
        <Text style={styles.Textin}>{props.weight}</Text>
      </View>
      <View style={styles.textInp}>
        <MaterialCommunityIcons
          name='human-male-height-variant'
          size={24}
          color='rgba(255,255,255,0.7)'
          style={styles.Icon}
        />
        <Text style={styles.Textin}>{props.height}</Text>
      </View>
      <View style={styles.textInp}>
        <FontAwesome5
          name='transgender'
          size={24}
          color='rgba(255,255,255,0.7)'
          style={styles.Icon}
        />
        <Text style={styles.Textin}>{props.gender}</Text>
      </View>
      <View style={styles.textInp}>
        <Foundation
          name='target-two'
          size={24}
          color='rgba(255,255,255,0.7)'
          style={styles.Icon}
        />
        <Text style={styles.Textin}>{props.goal}</Text>
      </View>
      <View style={styles.textInp}>
        <Feather
          name='activity'
          size={24}
          color='rgba(255,255,255,0.7)'
          style={styles.Icon}
        />
        <Text style={styles.Textin}>{props.activity}</Text>
      </View>
      {props.disease != "No" ? (
        <View style={styles.textInp}>
          <FontAwesome5
            name='disease'
            size={24}
            color='rgba(255,255,255,0.7)'
            style={styles.Icon}
          />
          <Text style={styles.Textin}>{props.disease}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    flex: 1,
  },
  textInp: {
    backgroundColor: "rgba(52, 52, 52, 0.9)",
    height: 40,
    borderColor: "rgba(255,255,255,0)",
    borderWidth: 3,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 13,
  },
  Icon: {
    marginHorizontal: 5,
    paddingTop: 7,
  },

  Textin: {
    fontSize: 20,
    alignSelf: "center",
    marginLeft: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default UserData;
