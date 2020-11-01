import { StatusBar } from "expo-status-bar";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import EditScreen from "./src/screens/EditScreen";
import * as firebase from "firebase/app";
import { firebaseConfig } from "./config/config";
import { Inonicons } from "@expo/vector-icons";

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
    },
  },

  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: "Settings",
    },
  },

  Edit: {
    screen: EditScreen,
    navigationOptions: {
      title: "Edit Profile",
    },
  },
});

const AppStackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  AppStackNavigator,
  AppDrawerNavigator,
  SignIn: SignInScreen,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

class App extends React.Component {
  constructor() {
    super();
    this.initilizeFirebase();
  }

  initilizeFirebase = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  };

  render() {
    return <AppContainer />;
  }
}

export default App;
