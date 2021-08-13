import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import PDFReader from "rn-pdf-reader-js";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const VitamineInScreen = ({ navigation }) => {
  const [docUri, setDocUri] = useState("");
  const [isNotull, setIstNotull] = useState(false);
  const [didCacle, setDidCancle] = useState(false);
  const gender = navigation.getParam("gender", "");

  /******/
  const getPDF = async () => {
    if (!didCacle) {
      if (gender === "male") {
        const URL = await firebase
          .storage()
          .ref("Vitamin Intake/" + "Vitamine Intake for Men.pdf")
          .getDownloadURL();
        setDocUri(URL);
        setIstNotull(true);
        console.log(URL);
      }
      if (gender === "female") {
        const URL = await firebase
          .storage()
          .ref("Vitamin Intake/" + "Vitamine Intake for Women.pdf")
          .getDownloadURL();
        setDocUri(URL);
        setIstNotull(true);
        console.log(URL);
      }
    }
  };

  useEffect(() => {
    getPDF();
    console.log(isNotull);
    console.log(gender);

    return () => {
      clearInterval(docUri);
      setDidCancle(true);
    };
  }, [1]);

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

export default VitamineInScreen;
