import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 70 }}>Settings</Text>
      <Button title='Lof Off' onPress={() => navigation.navigate("Welcome")} />
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
