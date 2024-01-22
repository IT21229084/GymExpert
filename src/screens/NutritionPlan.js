import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";

import { FontAwesome } from "@expo/vector-icons";
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
import NutPlan from "../components/NutPlan";

const WorkoutPlan = (props) => {
  const stack = props.navigation;
  const route = useRoute();

  const userNutData = route.params.userNutritionData;
  const getNutritionPlan = route.params.getNutritionPlan;

  function GotoBack() {
    stack.goBack();
  }
  function gotoProfile() {
    stack.navigate("ProfileStack");
  }

  const [isHeightDialogVisible, setHeightDialogVisible] = useState(false);
  const [NutritinPlanImageUrl, setNutritinPlanImageUrl] = useState("");

  const openHeightDialog = () => {
    setHeightDialogVisible(true);
  };

  const handleHeightChange = (newHeight) => {
    setNutritinPlanImageUrl(newHeight);
  };

  const closeHeightDialog = () => {
    setHeightDialogVisible(false);
    addNutritionPlanImage();
    getNutritionPlan();
    GotoBack();
  };

  const addNutritionPlanImage = async () => {
    try {
      const docRef = await addDoc(collection(db, "nutritionplan"), {
        NutritinPlanImageUrl: NutritinPlanImageUrl,
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
              marginRight: 170,
              fontWeight: "bold",
            }}
          >
            Nutrition Plan
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
        data={userNutData}
        renderItem={({ item }) => (
          <NutPlan
            profilename={item.profilename}
            id={item.id}
            nutritionPlanImgUrl={item.NutritinPlanImageUrl}
            getNutritionPlan={getNutritionPlan}
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
          source={require("../../assets/uploardnutritionplan.png")}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Modal isVisible={isHeightDialogVisible}>
        <View style={styles.dialogContainer}>
          <Text style={styles.dialogTitle}>Enter Nutrition Plan URL </Text>
          <TextInput
            style={styles.dialogInput}
            value={NutritinPlanImageUrl}
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

      {/* <View style={{ width: "100%", flex: 7 }}></View> */}
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
    backgroundColor: "#7deb34", // Background color of the OK button
    padding: 10,
    alignItems: "center",
    borderRadius: 10, // Add border radius for a rounded appearance
  },

  dialogButtonText: {
    color: "white", // Text color of the OK button
  },
});
