import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const WorkoutsLogView = (props) => {
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
            marginRight: 115,
          }}
        >
          Workout Log View
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

      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 19,
          marginTop: 19,
        }}
      >
        Date : {route.params.date}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 19,
        }}
      >
        workoutPlanNo : {route.params.workoutPlanNo}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 19,
        }}
      >
        Completed Exercises : {route.params.selectedExer1} ,{" "}
        {route.params.selectedExer2}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 12,
          marginLeft: 19,
        }}
      >
        {route.params.selectedExer1} Exercise details :{" "}
      </Text>

      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 49,
        }}
      >
        sets : {route.params.ex1Data.set}{" "}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 49,
        }}
      >
        lbs : {route.params.ex1Data.lbs}{" "}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 12,
          marginLeft: 49,
        }}
      >
        reps : {route.params.ex1Data.reps}{" "}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 19,
        }}
      >
        {route.params.selectedExer2} Exercise details :{" "}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 49,
        }}
      >
        sets : {route.params.ex2Data.set}{" "}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 49,
        }}
      >
        lbs : {route.params.ex2Data.lbs}{" "}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 12,
          marginLeft: 49,
        }}
      >
        reps : {route.params.ex2Data.reps}{" "}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 12,
          marginLeft: 19,
        }}
      >
        Incompleted Exercises : {route.params.notex}{" "}
      </Text>
      <Text
        style={{
          color: "#D0FD3E",
          fontSize: 18,
          marginBottom: 7,
          marginLeft: 19,
        }}
      >
        Note : {route.params.note}{" "}
      </Text>

      {/* <Text style={{color:'white',fontSize:22,marginBottom:7}}>Date : </Text> */}
    </View>
  );
};

export default WorkoutsLogView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
