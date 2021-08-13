import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";

import images from "../../components/TrainngPlanComponents/Images/LoseMass";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Cable Rope Crunches",
    img: images.CableRopeCrunches,
    key: "item1",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Dumbbe llSwings",
    img: images.DumbbellSwings,
    key: "item2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Dumbbell Deadlift",
    img: images.DumbbellDeadlift,
    key: "item3",
  },

  {
    id: "Id3",
    title: "Bulg Split Squatr",
    img: images.BulgSplitSquat,
  },
  {
    id: "ID4",
    title: "Hanging Leg Raises",
    img: images.HangingLegRaises,
  },
  {
    id: "ID44",
    title: "Diamond Push Up",
    img: images.DiamondPushUp,
  },
  {
    id: "Id5",
    title: "Seated Low Row",
    img: images.SeatedLowRow,
  },
  {
    id: "Id6",
    title: "Dumbbell Pull over",
    img: images.DumbbellPullover,
  },
  {
    id: "Id7",
    title: "Lat Pulldowns",
    img: images.LatPulldowns,
  },
  {
    id: "Id8",
    title: "Cable Lateral Raise ",
    img: images.CableLateralRaise,
  },
  {
    id: "Id9",
    title: "Dumbbell Overhead Press",
    img: images.StandingDumbbellOverheadPress,
  },
  {
    id: "Id10",
    title: "Dumbbell Curls",
    img: images.DumbbellCurls,
  },
  {
    id: "Id11",
    title: "Standing Bicep Curl",
    img: images.StandingBicepCurl,
  },
  {
    id: "Id12",
    title: "Dumbbell Bench Press",
    img: images.DumbbellBenchPress,
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

const LoseMass = () => {
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

export default LoseMass;
