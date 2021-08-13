import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import axios from "axios";

const MotivationQ = () => {
  const [quote, setQuote] = useState("");
  const [didCacle, setDidCancle] = useState(false);

  const options = {
    method: "GET",
    url: "https://bodybuilding-quotes.p.rapidapi.com/random-quote",
    headers: {
      "x-api-key": "{{api-key}}",
      "x-rapidapi-key": "93eb0ef4b2msh27f53165eeeb779p1869d6jsne1da4a04ce12",
      "x-rapidapi-host": "bodybuilding-quotes.p.rapidapi.com",
    },
  };

  useEffect(() => {
    if (!didCacle) {
      const sourse = axios
        .request(options)
        .then(function (response) {
          console.log(response.data.quote);
          setQuote(response.data.quote);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    return () => {
      setDidCancle(true);
    };
  }, [1]);

  return (
    <View>
      <Text style={styles.text}>{quote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 17,
    fontStyle: "italic",
    marginHorizontal: 5,
  },
});

export default MotivationQ;
