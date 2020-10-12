import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import InAppAuth from "../components/InAppAuth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <InAppAuth
          buttonTitle='Sign In'
          email={email}
          onChangeEmail={(newEmail) => setEmail(newEmail)}
          pass={pass}
          onChangePass={(newPass) => setPass(newPass)}
          onSubmitEmail={() => console.log("Email submited")}
          onSubmitPass={() => console.log("Pass submited")}
        />
      </View>
      <View>
        <Button
          title={"HomeScreen"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#52677D",
  },

  View1: {
    paddingTop: 300,
  },
});

export default SignInScreen;
