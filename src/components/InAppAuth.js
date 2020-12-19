import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const InAppAuth = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.BackGroundInput}>
        <AntDesign style={styles.Icon} name='mail' size={24} color='black' />
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
        <MaterialCommunityIcons
          style={styles.Icon}
          name='onepassword'
          size={24}
          color='black'
        />
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
        <TouchableOpacity style={styles.button} onPress={props.onButtonSubmit}>
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
    flex: 0.5,
    //justifyContent: "space-between",
  },
  BackGroundInput: {
    backgroundColor: "#FFF",
    height: 40,
    borderWidth: 2,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
  },
  Icon: {
    marginHorizontal: 5,
    paddingTop: 7,
  },
  button: {
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#D9DBF2",
    backgroundColor: "#D9DBF2",
    height: 40,
    borderWidth: 1,
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 5,
  },
});

export default InAppAuth;
