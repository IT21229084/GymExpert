import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
// import { MaterialIcons } from '@expo/vector-icons';

// import { ScrollView } from "react-native-gesture-handler";
// import { TextInput } from "react-native-gesture-handler";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "../../firebase/index";
import Home from "./Home";
import WorkPlan from "../components/WorkPlan";

const WorkoutPlan = (props) => {
  const stack = props.navigation;
  const route = useRoute();
  const useData = route.params.userData;
  const getWorkoutPlan = route.params.getWorkoutPlan;
  function GotoBack() {
    stack.goBack();
  }
  function gotoProfile() {
    stack.navigate("ProfileStack");
  }

  const [isHeightDialogVisible, setHeightDialogVisible] = useState(false);
  // const [height, setHeight] = useState("170");
  const [workoutPlanImage, setworkoutPlanImage] = useState("");

  const openHeightDialog = () => {
    setHeightDialogVisible(true);
  };

  const handleHeightChange = (newHeight) => {
    setworkoutPlanImage(newHeight);
  };

  const closeHeightDialog = () => {
    setHeightDialogVisible(false);
    addWorkoutPlanImage();
    getWorkoutPlan();
    GotoBack();
  };

  console.log("worimage", workoutPlanImage);

  const addWorkoutPlanImage = async () => {
    try {
      const docRef = await addDoc(collection(db, "wokoutplan"), {
        workoutPlanImageurl: workoutPlanImage,
        profilename: profilename,
      });
      console.log("Document written with ID: ", docRef.id);
      // setTitle("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // getShoppingList();
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          // backgroundColor: "red",
          width: "100%",
          // flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          activeOpacity={0.5}
          onPress={GotoBack}
        >
          <MaterialIcons
            name="navigate-before"
            size={30}
            color="white"
            style={{ marginLeft: 18, marginRight: 4 }}
          />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginRight: 180,
              fontWeight: "bold",
            }}
          >
            Workout Plan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.2} onPress={gotoProfile}>
          <FontAwesome
            name="user-circle"
            size={28}
            color="white"
            style={{ marginRight: 25 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "100%",
          marginBottom: 20,
        }}
      ></View>

      <FlatList
        data={useData}
        renderItem={({ item }) => (
          <WorkPlan
            profilename={item.profilename}
            id={item.id}
            workoutPlanImageurl={item.workoutPlanImageurl}
            getWorkoutPlan={getWorkoutPlan}
            GotoBack={GotoBack}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={{ position: "absolute", marginTop: 480, marginLeft: 280 }}
        activeOpacity={0.6}
        onPress={openHeightDialog}
      >
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../../assets/uploardworkoutplan.png")}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Modal isVisible={isHeightDialogVisible}>
        <View style={styles.dialogContainer}>
          <Text style={styles.dialogTitle}>Enter Image url </Text>
          <TextInput
            style={styles.dialogInput}
            value={workoutPlanImage}
            onChangeText={handleHeightChange}
            // keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.dialogButton}
            onPress={closeHeightDialog}
          >
            <Text style={styles.dialogButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default WorkoutPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  dialogContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10, // Add border radius for a rounded appearance
  },

  dialogTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  dialogInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  dialogButton: {
    backgroundColor: "#D0FD3E", // Background color of the OK button
    padding: 10,
    alignItems: "center",
    borderRadius: 10, // Add border radius for a rounded appearance
  },

  dialogButtonText: {
    color: "black", // Text color of the OK button
  },
});
