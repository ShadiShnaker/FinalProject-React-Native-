import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";

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
