import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const BookingInstructor = () => {
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
            navigation.goBack();
          }}
        />

        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginLeft: 25,
            fontWeight: "800",
            marginRight: 260,
          }}
        >
          {/* Instructors */}
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
      {/* <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "100%",
        }}
      ></View> */}

      <View style={{ flex: 4 }}>
        <View>
          <Image
            style={{
              alignSelf: "center",
              width: 113,
              height: 113,
              // marginBottom:25,
              borderRadius: 100,
              // marginLeft:20
            }}
            source={{
              uri: route.params.imaurl,
            }}
          />

          <Text
            style={{
              color: "white",
              alignSelf: "center",
              marginTop: 20,
              fontSize: 17,
            }}
          >
            {route.params.name}
          </Text>
        </View>

        <View
          style={{
            marginTop: 25,
            width: 327,
            height: 229,
            backgroundColor: "#2C2C2E",
            borderRadius: 16,
            alignSelf: "center",
            elevation: 10,
            padding: 20,
          }}
        >
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: 12,
              marginBottom: 10,
            }}
          >
            Experience : {route.params.expreiance}
          </Text>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: 12,
              marginBottom: 10,
            }}
          >
            Category : {route.params.category}
          </Text>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: 12,
              marginBottom: 5,
            }}
          >
            Description :{" "}
          </Text>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: 12,
              lineHeight: 15,
            }}
          >
            {route.params.description}
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MakeBooking", {
              name: route.params.name,
              imaurl: route.params.imaurl,
              category: route.params.category,
              expreiance: route.params.expreiance,
            });
          }}
        >
          <Image
            style={{ width: 263, height: 50 }}
            source={require("../../../assets/Instructors/bookingbtn.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingInstructor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
});
