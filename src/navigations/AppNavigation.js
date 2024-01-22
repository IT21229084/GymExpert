import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Startupscreen from "../screens/Startupscreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import React, { useEffect, useState } from "react";
import Home from "../screens/Home";
import WorkoutLogs from "../screens/WorkoutLogs/WorkoutLogs";
import Workouts from "../screens/Workouts/Workouts";
import Appoinments from "../screens/Appoinments/Appoinments";
import { Ionicons } from "@expo/vector-icons";
import WorkoutPlan from "../screens/WorkoutPlan";
import NutritionPlan from "../screens/NutritionPlan";
import Profile from "../screens/Profile/Profile";
import EditProfile from "../screens/Profile/EditProfile";
import ScanQR from "../screens/Profile/ScanQR";
import Payments from "../screens/Profile/Payments";
import Notifications from "../screens/Profile/Notifications";
import PrivacyPolicy from "../screens/Profile/PrivacyPolicy";
import WorkoutlogsView from "../screens/WorkoutLogs/NewWorkoutlog";
import NewWorkoutlog from "../screens/WorkoutLogs/NewWorkoutlog";
import BiginnerLeval from "../screens/Workouts/BiginnerLeval";
import Homeworkouts from "../screens/Workouts/Homeworkouts";
import InclinedMachine from "../screens/Workouts/InclinedMachine";
import MyAppoinment1 from "../screens/Appoinments/MakeAppoinment1";
import MyAppoinment2 from "../screens/Appoinments/MakeAppoinment2";
import MakeAppoinment1 from "../screens/Appoinments/MakeAppoinment1";
import MakeAppoinment2 from "../screens/Appoinments/MakeAppoinment2";
import MyAppoinments from "../screens/Appoinments/MyAppoinments";
import UpdateAppoinment from "../screens/Appoinments/UpdateAppoinment";
import Instructors from "../screens/Instructors/Instructors";
import BookingInstructor from "../screens/Instructors/BookingInstructor";
import MakeBooking from "../screens/Instructors/MakeBooking";
import BookingSummary from "../screens/Instructors/BookingSummary";
import AddProfilePic from "../screens/Profile/AddProfilePic";
import WorkoutsLogView from "../screens/WorkoutLogs/WorkoutsLogView";
import { User, onAuthStateChanged } from "firebase/auth";
import { firebase_auth } from "../../firebase";
import Admin from "../Admin/AdminHome";
import WorkoutlogList from "../components/WorkoutlogList";
import TrendingPlanView from "../screens/Workouts/TrendingPlanView";
import Instrucor from "../Instuctor/Instrucor";
import AdminHome from "../Admin/AdminHome";
import MembershipManagement from "../Admin/MembershipManagement";
import InstructorsListAdmin from "../Admin/InstructorsListAdmin";
import CommunicationHub from "../Admin/CommunicationHub";
// import WorkoutsIns from "../Instuctor/workoutsIns";
import Exworkout from "../Instuctor/Exworkout";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animation: "slide_from_right" }}
  >
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="ScanQR" component={ScanQR} />
    <Stack.Screen name="Payments" component={Payments} />
    <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Stack.Screen name="AddProfilePic" component={AddProfilePic} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animation: "slide_from_right" }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
    <Stack.Screen name="NutritionPlan" component={NutritionPlan} />
    <Stack.Screen name="ProfileStack" component={ProfileStack} />
  </Stack.Navigator>
);

const WorkoutLogStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    // initialRouteName="WorkoutsLogView"
  >
    <Stack.Screen name="WorkoutLogs" component={WorkoutLogs} />
    <Stack.Screen name="NewWorkoutlog" component={NewWorkoutlog} />
    <Stack.Screen name="WorkoutsLogView" component={WorkoutsLogView} />
    <Stack.Screen name="WorkoutlogList" component={WorkoutlogList} />
    <Stack.Screen name="ProfileStack" component={ProfileStack} />
  </Stack.Navigator>
);

const WorkoutStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animation: "slide_from_right" }}
  >
    <Stack.Screen name="Workouts" component={Workouts} />
    <Stack.Screen name="BiginnerLeval" component={BiginnerLeval} />
    <Stack.Screen name="Homeworkouts" component={Homeworkouts} />
    <Stack.Screen name="InclinedMachine" component={InclinedMachine} />
    <Stack.Screen name="Instructors" component={Instructors} />
    <Stack.Screen name="BookingInstructor" component={BookingInstructor} />
    <Stack.Screen name="MakeBooking" component={MakeBooking} />
    <Stack.Screen name="BookingSummary" component={BookingSummary} />
    <Stack.Screen name="TrendingPlanView" component={TrendingPlanView} />
    <Stack.Screen name="ProfileStack" component={ProfileStack} />
  </Stack.Navigator>
);

const AppoinmentStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animation: "slide_from_right" }}
  >
    <Stack.Screen name="Appoinments" component={Appoinments} />
    <Stack.Screen name="MakeAppoinment1" component={MakeAppoinment1} />
    <Stack.Screen name="MakeAppoinment2" component={MakeAppoinment2} />
    <Stack.Screen name="MyAppoinments" component={MyAppoinments} />
    <Stack.Screen name="UpdateAppoinment" component={UpdateAppoinment} />
    <Stack.Screen name="ProfileStack" component={ProfileStack} />
  </Stack.Navigator>
);

const UserMainTab = () => (
  <Tab.Navigator
    screenOptions={({ route, navigaion }) => ({
      tabBarIcon: ({ color, focused, size }) => {
        let iconName;
        if (route.name == "HomeStack") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name == "WorkoutLogStack") {
          iconName = focused ? "ios-newspaper" : "ios-newspaper-outline";
        } else if (route.name == "WorkoutStack") {
          iconName = focused ? "barbell" : "barbell-outline";
        } else if (route.name == "AppoinmentStack") {
          iconName = focused ? "calendar" : "calendar-outline";
        }

        return (
          <Ionicons
            name={iconName}
            size={size}
            color={color}
            style={{ marginTop: 10 }}
          />
        );
      },
      tabBarActiveTintColor: "#ffffff",
      tabBarInactiveTintColor: "#848482",
      headerShown: false,
      tabBarStyle: { backgroundColor: "#1C1C1E", borderTopWidth: 0 },
      tabBarLabel: "",
    })}
  >
    <Tab.Screen name="HomeStack" component={HomeStack} />
    <Tab.Screen name="WorkoutLogStack" component={WorkoutLogStack} />
    <Tab.Screen name="WorkoutStack" component={WorkoutStack} />
    <Tab.Screen name="AppoinmentStack" component={AppoinmentStack} />
  </Tab.Navigator>
);

const AdminMainTab = () => (
  <Tab.Navigator
    screenOptions={({ route, navigaion }) => ({
      tabBarIcon: ({ color, focused, size }) => {
        let iconName;
        if (route.name == "AdminHome") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name == "MembershipManagement") {
          iconName = focused ? "people" : "people-outline";
        } else if (route.name == "InstructorsListAdmin") {
          iconName = focused ? "list" : "list-outline";
        } else if (route.name == "CommunicationHub") {
          iconName = focused ? "notifications" : "notifications-outline";
        }

        return (
          <Ionicons
            name={iconName}
            size={size}
            color={color}
            style={{ marginTop: 10 }}
          />
        );
      },
      tabBarActiveTintColor: "#ffffff",
      tabBarInactiveTintColor: "#848482",
      headerShown: false,
      tabBarStyle: { backgroundColor: "#1C1C1E", borderTopWidth: 0 },
      tabBarLabel: "",
    })}
  >
    <Tab.Screen name="AdminHome" component={AdminHome} />
    <Tab.Screen name="MembershipManagement" component={MembershipManagement} />
    <Tab.Screen name="InstructorsListAdmin" component={InstructorsListAdmin} />
    <Tab.Screen name="CommunicationHub" component={CommunicationHub} />
  </Tab.Navigator>
);

const InastructorStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    // initialRouteName="WorkoutsLogView"
  >
    <Stack.Screen name="Instrucor" component={Instrucor} />
    <Stack.Screen name="Exworkout" component={Exworkout} />
    {/* <Stack.Screen name="WorkoutsLogView" component={WorkoutsLogView} />
    <Stack.Screen name="WorkoutlogList" component={WorkoutlogList} />
    <Stack.Screen name="ProfileStack" component={ProfileStack} /> */}
  </Stack.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Startupscreen"
        screenOptions={{
          headerShown: false,
          //   animationTypeForReplace:'pop',
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Startupscreen" component={Startupscreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="MainScreen" component={UserMainTab} />
        <Stack.Screen name="AdminMainTab" component={AdminMainTab} />
        <Stack.Screen name="InastructorStack" component={InastructorStack} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
