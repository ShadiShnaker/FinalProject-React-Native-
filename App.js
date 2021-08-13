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
import UserInfoScreen from "./src/screens/UserInfoScreens/UserInfoScreen";
import UserGoalScreen from "./src/screens/UserInfoScreens/UserGoalScreen";
import NutritionScreen from "./src/screens/NutritionScreen";
import FoodPlanScreen from "./src/screens/FoodPlanScreen";
import VitamineInScreen from "./src/screens/VitamineInScreen";
import UserGenderScreen from "./src/screens/UserInfoScreens/UserGenderScreen";
import WorkOutMain from "./src/screens/WorkOutScreens/WorkOutMain";
import WorkOutGuide from "./src/screens/WorkOutScreens/WorkOutGuide";
import * as firebase from "firebase/app";
import { firebaseConfig } from "./config/config";
import UserActivityScreen from "./src/screens/UserInfoScreens/UserActivityScreen";
import TrainingPlan from "./src/screens/WorkOutScreens/TrainingPlan";
import SheduleWorkOut from "./src/screens/WorkOutScreens/ScheduleWorkOut";
import chronicDiseases from "./src/screens/chronicDiseases";

const AppStackNavigator2 = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Edit: EditScreen,
    Nutrition: NutritionScreen,
    FoodP: FoodPlanScreen,
    Vitamine: VitamineInScreen,
    chronicDiseases: chronicDiseases,
    WorkOutMain: WorkOutMain,
    TrainingPlan: TrainingPlan,
    WorkOutGuide: WorkOutGuide,
    SheduleWorkOut: SheduleWorkOut,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppStackNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    UserGoal: UserGoalScreen,
    UserActivity: UserActivityScreen,
    UserGender: UserGenderScreen,
    UserInfo: UserInfoScreen,
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
  AppStackNavigator2,
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
