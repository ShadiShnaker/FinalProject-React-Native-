import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const NutritionScreen = () => {
  const [ingr, setIngr] = useState();
  const [fat, setFat] = useState();
  const [carps, setCarps] = useState();
  const [cal, setCal] = useState();
  const [totWight, setTotWight] = useState();
  const [sug, setSug] = useState();
  const [protien, setProtien] = useState();
  const [didCacle, setDidCancle] = useState(false);

  const BackGround = require("../../assets/WK-1.jpg");

  const options = {
    method: "GET",
    url: "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data",
    params: { ingr: { ingr } },
    headers: {
      "x-rapidapi-key": "93eb0ef4b2msh27f53165eeeb779p1869d6jsne1da4a04ce12",
      "x-rapidapi-host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
    },
  };

  const APIreq = () => {
    if (!didCacle) {
      const source = axios
        .request(options)
        .then(function (response) {
          setCal(response.data.calories);
          setTotWight(response.data.totalWeight);
          setFat(response.data.totalNutrients.FAT.quantity);
          setCarps(response.data.totalNutrients.CHOCDF.quantity);
          setSug(response.data.totalNutrients.SUGAR.quantity);
          setProtien(response.data.totalNutrients.PROCNT.quantity);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BackGround} style={styles.container}>
        <Text style={styles.HeaderTextStyle}>Nutrition Analysis</Text>
        <View style={styles.BackGroundInput}>
          <MaterialCommunityIcons
            name='food-apple'
            style={styles.Icon}
            size={24}
            color='black'
          />
          <TextInput
            placeholder='An ingredient line with quantity and measure'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(newIngr) => setIngr(newIngr)}
          />
        </View>

        <View style={styles.BttV}>
          <TouchableOpacity style={{ alignSelf: "center" }} onPress={APIreq}>
            <MaterialIcons name='analytics' size={40} color='black' />
          </TouchableOpacity>
        </View>

        <View style={styles.DispV}>
          <Text style={styles.DispHeadV}>{ingr}</Text>
          <Text style={styles.mainTextV}>Total Weight: {totWight}G.</Text>
          <Text style={styles.mainTextV}>Calories: {cal}</Text>
          <Text style={styles.mainTextV}>Protein: {protien}G</Text>
          <Text style={styles.mainTextV}>Carbs: {carps}G</Text>
          <Text style={styles.mainTextV}>Sugar: {sug}G</Text>
          <Text style={styles.mainTextV}>Fat: {fat}G</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#772E92",
  },

  HeaderTextStyle: {
    alignSelf: "center",
    marginTop: 45,
    fontSize: 35,
    fontWeight: "bold",
  },
  BackGroundInput: {
    marginTop: 40,
    backgroundColor: "#fff",
    height: 40,
    borderColor: "#EBD9F2",
    borderWidth: 3,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
  },

  Icon: {
    marginHorizontal: 5,
    paddingTop: 4,
  },

  BttV: {
    marginTop: 10,
  },

  DispV: {
    backgroundColor: "rgba(255,255,255,0.75)",
    marginHorizontal: 30,
    borderRadius: 5,
    height: 350,
    marginTop: 40,
  },

  DispHeadV: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },

  mainTextV: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
});

export default NutritionScreen;
