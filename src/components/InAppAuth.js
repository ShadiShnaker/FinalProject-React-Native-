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
          placeholder='Email'
          autoCapitalize='none'
          autoCorrect={false}
          value={props.email}
          onChangeText={(newEmail) => props.onChangeEmail(newEmail)}
          onEndEditing={props.onSubmitEmail}
        />
      </View>
      <View style={styles.BackGroundInput}>
        <TextInput
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          value={props.pass}
          onChangeText={(newPass) => props.onChangePass(newPass)}
          onEndEditing={props.onSubmitPass}
        />
      </View>

      <View>
        <TouchableOpacity
          style={[styles.BackGroundInput, { backgroundColor: "blue" }]}
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
