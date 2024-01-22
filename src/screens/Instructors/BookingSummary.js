import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const BookingSummary = () => {
  const navigation = useNavigation();
  const route = useRoute();
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
            navigation.navigate("Workouts");
          }}
        />

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginLeft: 25,
            fontWeight: "800",
            marginRight: 115,
          }}
        >
          Booking Summary
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

      <View style={{ flex: 5 }}>
        <View
          style={{
            width: 341,
            height: 233,
            backgroundColor: "#2C2C2E",
            borderRadius: 20,
            alignSelf: "center",
            marginTop: 90,
            elevation: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#2C2C2E",
              width: 327,
              height: 96,
              borderRadius: 16,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 96,
                marginLeft: 15,
              }}
            >
              <Image
                style={{
                  alignSelf: "center",
                  width: 64,
                  height: 64,
                  // marginBottom:25,
                  borderRadius: 100,
                  // marginLeft:20
                }}
                source={{
                  uri: route.params.imaurl,
                }}
              />
            </View>

            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 17, color: "white", marginTop: 13 }}>
                {route.params.name}
              </Text>
              <Text style={{ fontSize: 11, color: "white", marginTop: 4 }}>
                {route.params.category}
              </Text>
              <Text style={{ fontSize: 11, color: "#D0FD3E", marginTop: 10 }}>
                {route.params.expreiance} experience
              </Text>
            </View>

            {/* <MaterialIcons name="navigate-next" size={30} color="white" style={{marginTop:32,marginLeft:70}}/> */}
          </View>

          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              height: 1,
              width: "90%",
              alignSelf: "center",
              marginTop: 10,
            }}
          ></View>

          <Text
            style={{
              color: "white",
              marginLeft: 19,
              fontSize: 11,
              marginTop: 10,
            }}
          >
            Date
          </Text>
          <Text
            style={{
              color: "white",
              marginLeft: 19,
              fontSize: 15,
              marginTop: 3,
            }}
          >
            {route.params.selectedDate}
          </Text>
          <Text
            style={{
              color: "white",
              marginLeft: 19,
              fontSize: 11,
              marginTop: 14,
            }}
          >
            Time
          </Text>
          <Text
            style={{
              color: "white",
              marginLeft: 19,
              fontSize: 15,
              marginTop: 3,
            }}
          >
            {route.params.selectedTime}
          </Text>

          <FontAwesome
            name="bell"
            size={20}
            color="white"
            style={{ marginLeft: 290, position: "absolute", marginTop: 180 }}
          />
        </View>
      </View>

      <View
        style={{
          //   backgroundColor: "blue",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Workouts");
            alert("Booking Success ❗");
          }}
        >
          <Image
            style={{ width: 263, height: 50 }}
            source={require("../../../assets/Instructors/bookingconformbtn.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
});
