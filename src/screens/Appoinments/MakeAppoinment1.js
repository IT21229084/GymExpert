import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const MakeAppoinment1 = () => {
  const navigation = useNavigation();
  const [selectedTimeSlot, setselectedTimeSlot] = useState(null);
  const options = [
    "6:00 AM - 8:00 AM",
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 AM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
    "8:00 PM - 10:00 PM",
  ];

  const [selectedAppoinmentType, setselectedAppoinmentType] = useState(null);
  const appoptions = ["Daily", "Once a Week", "Once a Month"];

  function pickAppType(selectedOption) {
    if (selectedOption === selectedAppoinmentType) {
      // If the same option is selected, deselect it
      setselectedAppoinmentType(null);
    } else {
      setselectedAppoinmentType(selectedOption);
    }
  }

  function pickTimeSlot(selectedOption) {
    if (selectedOption === selectedTimeSlot) {
      // If the same option is selected, deselect it
      setselectedTimeSlot(null);
    } else {
      setselectedTimeSlot(selectedOption);
    }
  }

  console.log("selectedTimeSlot", selectedTimeSlot);
  console.log("selectedAppoinmentType", selectedAppoinmentType);

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
          Appoinment
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
        <View
          style={{
            // backgroundColor: "red",
            height: 360,
            width: "100%",
            padding: 0,
          }}
        >
          <View style={{ padding: 30 }}>
            <Text style={{ fontSize: 17, color: "white", marginBottom: 14 }}>
              Choose the time setselectedAppoinmentType
            </Text>

            <View
              style={{
                backgroundColor: "#2C2C2E",
                marginTop: 5,
                paddingLeft: 0,
                paddingTop: 20,
                borderRadius: 20,
                width: "90%",
                paddingBottom: 20,
              }}
            >
              <View style={styles.options}>
                {options.map((option) => (
                  <View key={option} style={styles.language}>
                    <TouchableOpacity
                      style={[
                        styles.checkBox,
                        {
                          borderColor:
                            option === selectedTimeSlot ? "#D0FD3E" : "#D0FD3E",
                        },
                      ]}
                      onPress={() => pickTimeSlot(option)}
                    >
                      {option === selectedTimeSlot && (
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
        </View>

        <View
          style={{
            // backgroundColor: "red",
            height: 245,
            width: "100%",
            padding: 0,
          }}
        >
          <View style={{ padding: 30 }}>
            <Text style={{ fontSize: 17, color: "white", marginBottom: 14 }}>
              Choose the appoinment Type
            </Text>

            <View
              style={{
                backgroundColor: "#2C2C2E",
                marginTop: 5,
                paddingLeft: 0,
                paddingTop: 20,
                borderRadius: 20,
                width: "90%",
                paddingBottom: 20,
              }}
            >
              <View style={styles.options}>
                {appoptions.map((option) => (
                  <View key={option} style={styles.language}>
                    <TouchableOpacity
                      style={[
                        styles.checkBox,
                        {
                          borderColor:
                            option === selectedAppoinmentType
                              ? "#D0FD3E"
                              : "#D0FD3E",
                        },
                      ]}
                      onPress={() => pickAppType(option)}
                    >
                      {option === selectedAppoinmentType && (
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
        </View>

        {/* <View
          style={{
            backgroundColor: "blue",
            height: 300,
            width: "100%",
            padding: 30,
          }}
        >
          <Text style={{ fontSize: 17, color: "white" }}>
            Choose the appoinment type
          </Text>
        </View> */}

        <View
          style={{
            // backgroundColor: "green",
            height: 100,
            width: "100%",
            padding: 30,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MakeAppoinment2", {
                selectedTimeSlot: selectedTimeSlot,
                selectedAppoinmentType: selectedAppoinmentType,
              });
            }}
          >
            <Image
              style={{ width: 143, height: 42 }}
              source={require("../../../assets/appoinmentimages/nextbtn.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MakeAppoinment1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
  languageName: {
    textTransform: "none",
    fontSize: 16,
    color: "#D0FD3E",
    marginBottom: 7,
    marginLeft: 5,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 5,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#D0FD3E",
  },
  language: {
    flexDirection: "row",
    marginVertical: 7,
  },
  options: {
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  check: {
    alignSelf: "center",
  },
});
