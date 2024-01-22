import React from "react";
import "react-native-gesture-handler";
import LoginScreen from "./src/screens/LoginScreen";
import { View, StyleSheet, StatusBar } from "react-native";
import SignupScreen from "./src/screens/SignupScreen";
import Startupscreen from "./src/screens/Startupscreen";
import AppNavigation from "./src/navigations/AppNavigation";
import Home from "./src/screens/Home";

export default function App() {
  // console.disableYellowBox = true;

  return (
    <View style={sty.container}>
      <StatusBar
        backgroundColor="#007AFF" // Set your desired background color
        barStyle="light-content" // Set the status bar content style (light or dark)
      />
      <AppNavigation />
    </View>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
  },
});
