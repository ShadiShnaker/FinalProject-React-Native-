import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const BMR = (props) => {
  const [advice, setAdvice] = useState("");
  const [calResult, setCalResult] = useState(0);
  const [carbAdvice, setCarAdvice] = useState(0);
  const [protein, setProtein] = useState(0);
  const BMRCalc = () => {
    if (props.gender === "male") {
      return 10 * props.weight + 6.25 * props.height - 5 * props.age + 5;
    } else if (props.gender === "female") {
      return 10 * props.weight + 6.25 * props.height - 5 * props.age - 161;
    }
  };

  const CalIntake = () => {
    var BMR = BMRCalc();

    if (props.activity === "Sedentary") {
      setCalResult(Math.trunc(BMR * 1.2));
    } else if (props.activity === "lightly active") {
      setCalResult(Math.trunc(BMR * 1.375));
    } else if (props.activity === "Moderately active") {
      setCalResult(Math.trunc(BMR * 1.55));
    } else if (props.activity === "very active") {
      setCalResult(Math.trunc(BMR * 1.75));
    } else if (props.activity === "extra active") {
      setCalResult(Math.trunc(BMR * 1.9));
    }
  };

  const AdviceMessage = () => {
    if (props.goal === "Maintain-Weight") {
      setAdvice(calResult);
      setCarAdvice("Between " + 150 + " to " + 300);
    }
    if (props.goal === "Lose-Weight") {
      setAdvice("Less than " + calResult);
      setCarAdvice("Between " + 50 + " to " + 150);
    } else if (props.goal === "Gain-Weight") {
      setAdvice("More than " + calResult);
      setCarAdvice("More than " + 300);
    }
  };

  useEffect(() => {
    CalIntake();
    AdviceMessage();
    setProtein(props.weight * 0.8);

    return () => {
      clearInterval(advice, calResult, carbAdvice, protein);
    };
  });

  return (
    <View>
      <Text style={{ paddingLeft: 10, fontSize: 20, color: "#fff" }}>
        Calore intake per day:
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 18,
          color: "#4BD459",
          fontWeight: "bold",
        }}
      >
        {advice}
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          paddingTop: 5,
          fontSize: 20,
          color: "#fff",
        }}
      >
        Carb intake per day:
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 18,
          color: "#4BD459",
          fontWeight: "bold",
        }}
      >
        {carbAdvice}
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          paddingTop: 5,
          fontSize: 20,
          color: "#fff",
        }}
      >
        Protein intake per day:
      </Text>
      <Text
        style={{
          paddingLeft: 10,
          fontSize: 18,
          color: "#4BD459",
          fontWeight: "bold",
        }}
      >
        {protein}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
    marginTop: 20,
  },
});

export default BMR;
