import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { db, doc, updateDoc, deleteDoc } from "../../../firebase/index";

const MyAppoinments = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const useData = route.params.extractedObject;
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(
    useData.selectedTimeSlot
  );
  const [selectedAppoinmentType, setSelectedAppoinmentType] = useState(
    useData.selectedAppoinmentType
  );
  const [posibleDays, setPosibleDays] = useState(useData.posibleDays);

  const deleteAppoinment = async () => {
    await deleteDoc(doc(db, "appoinments", useData.id));
    // props.getShoppingList();
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
            marginRight: 120,
          }}
        >
          My Appoinments
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

      <View style={{ flex: 4 }}>
        <View style={{ marginTop: 55 }}>
          <Text style={{ marginLeft: 45, color: "#D0FD3E", fontSize: 15 }}>
            Time Slot
          </Text>
          <Text
            style={{
              marginLeft: 45,
              color: "white",
              fontSize: 17,
              marginTop: 15,
            }}
          >
            {useData.selectedTimeSlot}
          </Text>
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: 1,
              width: "85%",
              alignSelf: "center",
              marginTop: 25,
            }}
          ></View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ marginLeft: 45, color: "#D0FD3E", fontSize: 15 }}>
            Appoinment Type
          </Text>
          <Text
            style={{
              marginLeft: 45,
              color: "white",
              fontSize: 17,
              marginTop: 15,
            }}
          >
            {useData.selectedAppoinmentType}
          </Text>
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: 1,
              width: "85%",
              alignSelf: "center",
              marginTop: 25,
            }}
          ></View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ marginLeft: 45, color: "#D0FD3E", fontSize: 15 }}>
            Day of Week
          </Text>
          <Text
            style={{
              marginLeft: 45,
              color: "white",
              fontSize: 17,
              marginTop: 15,
            }}
          >
            {useData.posibleDays.join("   ")}
          </Text>
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: 1,
              width: "85%",
              alignSelf: "center",
              marginTop: 25,
            }}
          ></View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 70,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UpdateAppoinment", { useData: useData });
          }}
        >
          <Image
            style={{ width: 122, height: 50 }}
            source={require("../../../assets/appoinmentimages/reshedulebtn.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteAppoinment();
            navigation.navigate("Appoinments");
          }}
        >
          <Image
            style={{ width: 122, height: 50 }}
            source={require("../../../assets/appoinmentimages/deletebtn.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyAppoinments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
});
