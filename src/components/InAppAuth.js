import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

const InAppAuth = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.BackGroundInput}>
        <TextInput
          placeholder='abc@example.com'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          value={props.email}
          onChangeText={(newEmail) => props.onChangeEmail(newEmail)}
        />
      </View>
      <View style={styles.BackGroundInput}>
        <TextInput
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry
          value={props.pass}
          onChangeText={(newPass) => props.onChangePass(newPass)}
        />
      </View>

      <View>
        <TouchableOpacity
          style={[styles.BackGroundInput, { backgroundColor: "blue" }]}
          onPress={props.onButtonSubmit}
        >
          <Text style={{ alignSelf: "center", color: "#fff" }}>
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
    justifyContent: "space-between",
  },
  BackGroundInput: {
    backgroundColor: "#F0EEEE",
    height: 40,
    borderWidth: 1,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default InAppAuth;
