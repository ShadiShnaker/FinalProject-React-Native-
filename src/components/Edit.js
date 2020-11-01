import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";

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
          value={props.weight}
          onChangeText={(newWeight) => props.onChangeWeight(newWeight)}
        />
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
          value={props.height}
          onChangeText={(newHeight) => props.onChangeHeight(newHeight)}
        />
      </View>
      <View style={{ flex: 0.3 }}>
        <Text style={{ marginHorizontal: 30, fontSize: 15, color: "#c8b7b3" }}>
          Select your gender:
        </Text>
        <View style={styles.genderView}>
          <View>
            <TouchableOpacity>
              <Foundation name='male-symbol' size={70} color='#0846c1' />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Foundation name='female-symbol' size={70} color='#c5287e' />
            </TouchableOpacity>
          </View>
        </View>
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
    //justifyContent: "space-between",
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

  genderView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
  },
});

export default Edit;
