import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Picker,
} from "react-native";
/*
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
*/
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const Edit = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.BackGroundInput}>
        <MaterialCommunityIcons
          style={styles.Icon}
          name='rename-box'
          size={24}
          color='black'
        />
        <TextInput
          placeholder='Name'
          autoCapitalize='none'
          autoCorrect={false}
          value={props.name}
          onChangeText={(newName) => props.onChangeName(newName)}
        />
      </View>
      <View style={styles.BackGroundInput}>
        <MaterialCommunityIcons
          name='human-male-height'
          size={24}
          color='black'
          style={styles.Icon}
        />
        <TextInput
          placeholder='Age'
          keyboardType='numeric'
          value={props.age}
          onChangeText={(newAge) => props.onChangeAge(newAge)}
        />
      </View>
      <View style={styles.BackGroundInput}>
        <FontAwesome5
          name='weight-hanging'
          size={24}
          color='black'
          style={styles.Icon}
        />
        <TextInput
          placeholder='Weight'
          keyboardType='numeric'
          value={props.weight}
          onChangeText={(newWeight) => props.onChnageWeight(newWeight)}
        />
        <Text style={{ marginLeft: 220, paddingTop: 10 }}>KG</Text>
      </View>

      <View style={styles.BackGroundInput}>
        <MaterialCommunityIcons
          name='human-male-height-variant'
          size={24}
          color='black'
          style={styles.Icon}
        />
        <TextInput
          placeholder='Height'
          keyboardType='numeric'
          value={props.height}
          onChangeText={(newHeight) => props.onChangeHeight(newHeight)}
        />
        <Text style={{ marginLeft: 220, paddingTop: 10 }}>CM</Text>
      </View>
      <View>
        <Text style={{ alignSelf: "center", color: "#fff" }}>
          chronic diseases
        </Text>
      </View>

      <View style={styles.BackGroundInput}>
        <Picker
          selectedValue={props.disease}
          style={styles.PickerStyle}
          onValueChange={(itemValue, itemIndex) =>
            props.onChangeValue(itemValue)
          }
        >
          <Picker.Item label='No' value='No' />
          <Picker.Item label='sugar disease' value='sugar disease' />
          <Picker.Item label='blood pressure' value='blood pressure' />
          <Picker.Item label='hyperlipidemia' value='hyperlipidemia' />
        </Picker>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={props.onModifySubmit}>
          <Text
            style={{
              color: "#86789E",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {props.buttonTitle}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 250,
  },
  BackGroundInput: {
    backgroundColor: "rgba(252, 252, 252, 0.8)",
    height: 40,
    borderColor: "rgba(255,255,255,0.3)",
    borderWidth: 3,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#EBD9F2",
    borderWidth: 2,
    backgroundColor: "#D9DBF2",
    height: 40,
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 5,
  },
  Icon: {
    marginHorizontal: 5,
    paddingTop: 7,
  },
  PickerStyle: {
    flex: 1,
    alignSelf: "center",
    color: "black",
  },
});

export default Edit;
