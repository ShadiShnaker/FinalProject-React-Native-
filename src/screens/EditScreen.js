import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  Picker,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

const BackGround = require("../../assets/WK-3.jpg");

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState(navigation.getParam("name", ""));
  const [age, setAge] = useState(navigation.getParam("age", ""));
  const [weight, setWeight] = useState(navigation.getParam("weight", ""));
  const [height, setHeight] = useState(navigation.getParam("height", ""));
  const [goal, setGoal] = useState(navigation.getParam("goal", ""));
  const [activity, setActivity] = useState(navigation.getParam("activity", ""));
  const image = navigation.getParam("image", "");
  const [imageUri, setImageUri] = useState(null);
  const currentUser = navigation.getParam("user", " ");

  const UpdateProfile = () => {
    firebase
      .database()
      .ref("users/" + currentUser.uid)
      .update({
        name: name,
        age: age,
        weight: weight,
        height: height,
        goal: goal,
        activity: activity,
      });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      const response = await fetch(result.uri);
      const Blob = await response.blob();
      const ref = firebase.storage().ref("user image/" + currentUser.uid);
      const snapshot = await ref.put(Blob);
      const snapshot2 = await ref.getDownloadURL();
      await firebase
        .database()
        .ref("users/" + currentUser.uid)
        .update({
          profileImgUrl: snapshot2,
        });
    }
  };

  useEffect(() => {
    async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
      }
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    };
  }, [1]);

  return (
    <View style={styles.Headr}>
      <View style={styles.View1}>
        <View style={styles.photoView}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.IMG} />
          ) : (
            <Image source={{ uri: image }} style={styles.IMG} />
          )}
        </View>

        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity onPress={pickImage}>
            <Entypo name='edit' size={24} color='orange' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View2}>
        <View style={styles.textInp}>
          <MaterialCommunityIcons
            style={styles.Icon}
            name='rename-box'
            size={24}
            color='black'
          />
          <TextInput
            value={name}
            placeholder='name'
            onChangeText={(newName) => setName(newName)}
          />
        </View>

        <View style={styles.textInp}>
          <MaterialCommunityIcons
            name='human-male-height'
            size={24}
            color='black'
            style={styles.Icon}
          />
          <TextInput
            value={age}
            keyboardType='numeric'
            placeholder='age'
            onChangeText={(newAge) => setAge(newAge)}
          />
        </View>

        <View style={styles.textInp}>
          <FontAwesome5
            name='weight-hanging'
            size={24}
            color='black'
            style={styles.Icon}
          />
          <TextInput
            value={weight}
            keyboardType='numeric'
            placeholder='weight'
            onChangeText={(newWeight) => setWeight(newWeight)}
          />
        </View>

        <View style={styles.textInp}>
          <MaterialCommunityIcons
            name='human-male-height-variant'
            size={24}
            color='black'
            style={styles.Icon}
          />
          <TextInput
            value={height}
            keyboardType='numeric'
            placeholder='height'
            onChangeText={(newHeight) => setHeight(newHeight)}
          />
        </View>
        <View style={styles.textInp}>
          <Picker
            selectedValue={goal}
            style={styles.PickerStyle}
            onValueChange={(itemValue, itemIndex) => {
              setGoal(itemValue);
            }}
          >
            <Picker.Item label='Maintain-Weight' value='Maintain-Weight' />
            <Picker.Item label='Lose-Weight' value='Lose-Weight' />
            <Picker.Item label='Gain-Weight' value='Gain-Weight' />
          </Picker>
        </View>

        <View style={styles.textInp}>
          <Picker
            selectedValue={activity}
            style={styles.PickerStyle}
            onValueChange={(itemValue, itemIndex) => {
              setActivity(itemValue);
            }}
          >
            <Picker.Item label='Sedentary' value='Sedentary' />
            <Picker.Item label='lightly active' value='lightly active' />
            <Picker.Item label='Moderately active' value='Moderately active' />
            <Picker.Item label='very active' value='very active' />
            <Picker.Item label='extra active' value='extra active' />
          </Picker>
        </View>

        <View>
          <TouchableOpacity
            style={styles.btt}
            onPress={() => {
              UpdateProfile();
              navigation.navigate("Home");
            }}
          >
            <Text
              style={{
                color: "#86789E",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Headr: { flex: 1, backgroundColor: "rgba(52, 52, 52, 0.8)" },
  View1: {
    flex: 0.4,
  },

  View2: {
    flex: 0.6,
  },

  photoView: {
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "gray",
    alignSelf: "center",
    marginTop: 90,
  },

  IMG: {
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    alignSelf: "center",
  },

  textInp: {
    backgroundColor: "#fff",
    height: 40,
    borderColor: "#EBD9F2",
    borderWidth: 3,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
  },

  Icon: {
    marginHorizontal: 5,
    paddingTop: 7,
  },
  btt: {
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

  PickerStyle: {
    flex: 1,
    alignSelf: "center",
  },
});

export default EditProfile;
