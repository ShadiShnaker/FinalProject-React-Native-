import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import * as firebase from "firebase/app";
import "firebase/auth";

const SettingsScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate("Welcome");
    } catch (error) {
      setErrorMessage("Unable to sign out right now");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 70 }}>Settings</Text>
      <Button title='Lof Out' onPress={() => signOut()} />
      {errorMessage ? (
        <Text style={{ color: "#F10E63" }}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default SettingsScreen;
