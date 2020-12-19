import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
const BMIMet = require("../../assets/BMI.png");

const BMI = (props) => {
  const [advice, setAdvice] = useState("");
  const [result, setResult] = useState("");

  const AdviceMessage = () => {
    if (result >= 15 && result <= 18.5) {
      setAdvice("you are uderweight! you should gain weight.");
    }
    if (result > 18.5 && result <= 25) {
      setAdvice("your weight is normal! you should maintain your weight.");
    }
    if (result > 25 && result <= 30) {
      setAdvice("you are overweight! you should loss weight.");
    }
    if (result > 30 && result <= 40) {
      setAdvice("your weight is Obese! you must loss weight.");
    }
  };

  useEffect(() => {
    setResult(Math.trunc((props.weight / props.height / props.height) * 10000));

    AdviceMessage();
  });
  return (
    <View style={styles.Container}>
      <Text
        style={{
          alignSelf: "center",
          paddingTop: 10,
          fontSize: 19,
          fontWeight: "bold",
        }}
      >
        {result}
      </Text>
      <Text style={{ alignSelf: "center", paddingTop: 10, color: "#86789E" }}>
        {advice}
      </Text>
      <Image style={styles.image} source={BMIMet} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 0.2,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#772E92",
    borderWidth: 3,
    marginHorizontal: 15,
    marginTop: 20,
    paddingBottom: 10,
  },

  image: {
    alignSelf: "center",
    marginTop: 20,
  },
});

export default BMI;
