import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCH_4XXf5iLpWqYjkAmViFkCsOV-VjqQj0",
  authDomain: "allinfit-caa00.firebaseapp.com",
  databaseURL: "https://allinfit-caa00.firebaseio.com",
  projectId: "allinfit-caa00",
  storageBucket: "allinfit-caa00.appspot.com",
  messagingSenderId: "840905150664",
  appId: "1:840905150664:web:924a888803bf26e4bc55fd",
  measurementId: "G-SCYPMCDPCP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    signUp: SignUpScreen,
    signIn: SignInScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "AllinFit",
    },
  }
);

export default createAppContainer(navigator);
