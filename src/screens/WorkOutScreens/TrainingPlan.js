import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import PDFReader from "rn-pdf-reader-js";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const TrainingPlan = ({ navigation }) => {
  const [docUri, setDocUri] = useState("");
  const [isNotull, setIstNotull] = useState(false);
  const [didCancle, setDidCancle] = useState(false);
  const goal = navigation.getParam("goal", "");
  const selectedValue = navigation.getParam("selectedValue", "");

  const getPDF = async () => {
    if (!didCancle) {
      const URL = await firebase
        .storage()
        .ref("WorkOut Plan/" + goal + selectedValue + ".pdf")
        .getDownloadURL();

      setDocUri(URL);

      setIstNotull(true);
      console.log(URL);
    }
  };

  useEffect(() => {
    getPDF();
    console.log(selectedValue);
    console.log(isNotull);

    return () => {
      clearInterval(docUri);
      setDidCancle(true);
    };
  });

  return isNotull ? (
    <PDFReader source={{ uri: docUri }} style={styles.container} />
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrainingPlan;
