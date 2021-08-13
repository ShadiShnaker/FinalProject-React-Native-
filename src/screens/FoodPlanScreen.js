import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import PDFReader from "rn-pdf-reader-js";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const FoodPlanScreen = ({ navigation }) => {
  const [docUri, setDocUri] = useState("");
  const [isNotull, setIstNotull] = useState(false);
  const goal = navigation.getParam("goal", "");
  const [didCacle, setDidCancle] = useState(false);

  /******/

  const getPDF = async () => {
    if (!didCacle) {
      if (goal === "Gain-Weight") {
        const URL = await firebase
          .storage()
          .ref("Food Plan/" + "Gain Weight.pdf")
          .getDownloadURL();
        setDocUri(URL);
        setIstNotull(true);
      }
      if (goal === "Lose-Weight") {
        const URL = await firebase
          .storage()
          .ref("Food Plan/" + "Losing Weight.pdf")
          .getDownloadURL();
        setDocUri(URL);
        setIstNotull(true);
        console.log(0 + 1);
      }
    }
  };

  useEffect(() => {
    getPDF();
    console.log(isNotull);

    return () => {
      clearInterval(docUri);
      setDidCancle(true);
    };
  });

  /******/
  return isNotull ? (
    <PDFReader source={{ uri: docUri }} style={styles.container} />
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 20,
  },
});

export default FoodPlanScreen;
