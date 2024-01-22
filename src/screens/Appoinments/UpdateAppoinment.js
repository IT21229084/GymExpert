import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { db, doc, updateDoc, deleteDoc } from "../../../firebase/index";

// import { ScrollView } from "react-native-gesture-handler";

const UpdateAppoinment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const useData = route.params.useData;

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(
    useData.selectedTimeSlot
  );
  const [selectedAppoinmentType, setSelectedAppoinmentType] = useState(
    useData.selectedAppoinmentType
  );
  const [posibleDays, setPosibleDays] = useState(useData.posibleDays);

  const updateAppoinment = async () => {
    const shoppingRef = doc(db, "appoinments", useData.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(shoppingRef, {
      selectedTimeSlot: selectedTimeSlot,
      selectedAppoinmentType: selectedAppoinmentType,
    });
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
            marginRight: 90,
          }}
        >
          Update Appoinments
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

      <ScrollView>
        <View style={{ marginTop: 55 }}>
          <Text style={{ marginLeft: 45, color: "#D0FD3E", fontSize: 15 }}>
            Time Slot
          </Text>

          {/* <Text style={{marginLeft:45,color:'white',fontSize:17,marginTop:15}}>{useData.selectedTimeSlot}</Text> */}
          <TextInput
            placeholder="Enter your Timeslot"
            placeholderTextColor="gray"
            style={{
              marginLeft: 45,
              color: "white",
              fontSize: 17,
              marginTop: 15,
            }}
            value={selectedTimeSlot} // Set the value to the state variable
            editable={true}
            onChangeText={(text) => setSelectedTimeSlot(text)} // Handle changes
          />

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

          {/* <Text style={{marginLeft:45,color:'white',fontSize:17,marginTop:15}}>{useData.selectedTimeSlot}</Text> */}
          <TextInput
            placeholder="Enter your Timeslot"
            placeholderTextColor="gray"
            style={{
              marginLeft: 45,
              color: "white",
              fontSize: 17,
              marginTop: 15,
            }}
            value={selectedAppoinmentType} // Set the value to the state variable
            editable={true}
            onChangeText={(text) => setSelectedAppoinmentType(text)} // Handle changes
          />

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
            Days of Week
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

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
          onPress={() => {
            updateAppoinment();
            navigation.navigate("Appoinments");
          }}
        >
          <Image
            style={{ width: 207, height: 50 }}
            source={require("../../../assets/appoinmentimages/updateapp.png")}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UpdateAppoinment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
});
