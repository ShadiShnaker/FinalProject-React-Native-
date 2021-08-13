import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";

import images from "../../components/TrainngPlanComponents/Images/GainMassImg";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Barbel Bench",
    img: images.BarbelBench,
    key: "item1",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Barbell deadlift",
    img: images.BarbellDeadlift,
    key: "item2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Lat Pulldown",
    img: images.CableLatPulldown,
    key: "item3",
  },

  {
    id: "Id3",
    title: "Dumbbel Pull Over",
    img: images.DumbbellPullover,
  },
  {
    id: "ID4",
    title: "Dumbbel Shrugs",
    img: images.DumbbellShrugs,
  },
  {
    id: "ID44",
    title: "Band Face Pull",
    img: images.BandFacePull,
  },
  {
    id: "Id5",
    title: "Oblique Twist",
    img: images.ObliqueTwist,
  },
  {
    id: "Id6",
    title: "Split Squat",
    img: images.BulgarianSplitSquat,
  },
  {
    id: "Id7",
    title: "Squat",
    img: images.Squat,
  },
  {
    id: "Id8",
    title: "Hammer Curls",
    img: images.DumbbellHammerCurls,
  },
  {
    id: "Id9",
    title: "Tricep Dip",
    img: images.TricepDip,
  },
  {
    id: "Id10",
    title: "Barbell Bicep Curl",
    img: images.BarbellBicepCurl,
  },
];

const Item = ({ title, img }) => (
  <View style={styles.item}>
    <View style={{ flex: 0.9 }}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View>
      <Image source={img} style={styles.imgage} />
    </View>
  </View>
);

const GainMass = () => {
  const renderItem = ({ item }) => (
    <Item key={item.id} title={item.title} img={item.img} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "rgba(52, 52, 52, 0.9)",
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },

  imgage: {
    width: 100,
    height: 100,
  },
});

export default GainMass;
