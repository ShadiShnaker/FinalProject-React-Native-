import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const FoodPlan = (props) => {
  const [message, setMessage] = useState("");

  /*

  const AdviceMessage = () => {
    if (props.goal === "Maintain-Weight") {
      setMessage("Food plan for maintaining weight");
    }

    if (props.goal === "Gain-Weight") {
      setMessage("Food plan for Gaining weight");
    }

    if (props.goal === "Lose-Weight") {
      setMessage("Food plan for losing weight");
    }
  };

  useEffect(() => {
    AdviceMessage();
  });

  */

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.messageText}>Food Plan</Text>
      <TouchableOpacity onPress={props.onModifySubmit} style={{ flex: 1 }}>
        <FontAwesome
          name='list-alt'
          size={60}
          color='rgba(255,255,255,0.7)'
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  messageText: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
  },
});

export default FoodPlan;
