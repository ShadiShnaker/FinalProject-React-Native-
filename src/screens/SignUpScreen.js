import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import InAppAuth from "../components/InAppAuth";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.View1}>
        <InAppAuth
          buttonTitle='Sign Up'
          email={email}
          onChangeEmail={(newEmail) => setEmail(newEmail)}
          pass={pass}
          onChangePass={(newPass) => setPass(newPass)}
          onSubmitEmail={() => console.log("Email submited")}
          onSubmitPass={() => console.log("Pass submited")}
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

export default SignUpScreen;
