import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
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
        <TouchableOpacity style={styles.button} onPress={props.onModifySubmit}>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              color: "#F10E63",
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
    flex: 1,
  },
  BackGroundInput: {
    backgroundColor: "#898693",
    height: 40,
    borderWidth: 1,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#898693",
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
});

export default Edit;
