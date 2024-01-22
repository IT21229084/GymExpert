import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "../../../firebase/index";

const MakeAppoinment2 = () => {
  const route = useRoute();
  const selectedTimeSlot = route.params.selectedTimeSlot;
  const selectedAppoinmentType = route.params.selectedAppoinmentType;

  const navigation = useNavigation();
  const [posibleDays, setposibleDays] = useState([]);
  const options = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function pickPosibleDays(selectedLanguage) {
    // const index = languages.findIndex(language=>language ===selectedLanguage)
    if (posibleDays.includes(selectedLanguage)) {
      setposibleDays(
        posibleDays.filter((language) => language !== selectedLanguage)
      );
      return;
    }

    setposibleDays((posibleDays) => posibleDays.concat(selectedLanguage));
  }

  console.log("posibleDays", posibleDays);

  const addAppoinment = async () => {
    try {
      const docRef = await addDoc(collection(db, "appoinments"), {
        selectedTimeSlot: selectedTimeSlot,
        selectedAppoinmentType: selectedAppoinmentType,
        posibleDays: posibleDays,
        profilename: profilename,
      });
      console.log("Document written with ID: ", docRef.id);
      Alert.alert(
        "✅ Appoinment Completed!",
        "You have book a new appoinment with your trainer",
        [{ text: "Okay", onPress: () => navigation.navigate("Appoinments") }]
      );

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
          flexDirection: "row",
          //   justifyContent: "space-between",
          // backgroundColor: "orange",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
          // flex: 0.8,
        }}
      >
        <MaterialIcons
          name="navigate-before"
          size={30}
          color="white"
          style={{ marginLeft: 19 }}
          onPress={() => {
            navigation.goBack();
          }}
        />

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginLeft: 25,
            fontWeight: "800",
            marginRight: 140,
          }}
        >
          Appoinments
        </Text>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            navigation.navigate("ProfileStack");
          }}
        >
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
        }}
      ></View>

      <View style={{ flex: 4, padding: 20 }}>
        <Text
          style={{
            fontSize: 17,
            color: "white",
            marginBottom: 20,
            marginLeft: 10,
          }}
        >
          Possible Days of Week
        </Text>
        <View
          style={{
            backgroundColor: "#2C2C2E",
            width: "80%",
            paddingLeft: 10,
            paddingTop: 10,
            borderRadius: 10,
            alignSelf: "center",
            paddingBottom: 10,
          }}
        >
          <View style={styles.options}>
            {options.map((option) => (
              <View key={option} style={styles.language}>
                <TouchableOpacity
                  style={styles.checkBox}
                  onPress={() => pickPosibleDays(option)}
                >
                  {posibleDays.includes(option) && (
                    // <Text style={styles.check}>✔</Text>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        backgroundColor: "red",
                        borderRadius: 100,
                        alignSelf: "center",
                      }}
                    ></View>
                  )}
                </TouchableOpacity>

                <Text style={styles.languageName}>{option}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 45,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={{ height: 42, width: 109 }}
            source={require("../../../assets/appoinmentimages/previousbtn.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={addAppoinment}>
          <Image
            style={{ height: 42, width: 112 }}
            source={require("../../../assets/appoinmentimages/confirmbtn.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MakeAppoinment2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
  languageName: {
    textTransform: "capitalize",
    fontSize: 16,
    color: "white",
    marginLeft: 5,
    marginBottom: 7,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#D0FD3E",
    marginRight: 5,
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    borderRadius: 100,
  },
  language: {
    flexDirection: "row",
    marginVertical: 7,
  },
  options: {
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  check: {
    alignSelf: "center",
  },
});
