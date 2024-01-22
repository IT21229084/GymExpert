import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const AdminHome = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:30,color:'white'}}>AdminHome Page</Text> */}

      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-end",
          marginBottom: 22,
        }}
      >
        <MaterialCommunityIcons
          name="dumbbell"
          size={28}
          color="white"
          style={{ marginLeft: 60, marginRight: 10 }}
        />
        <FontAwesome5
          name="grip-lines-vertical"
          size={28}
          color="white"
          style={{}}
        />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 2,
            marginLeft: 4,
          }}
        >
          Admin Dashboard
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "100%",
          marginBottom: 0,
        }}
      ></View>

      <View style={{ width: "100%", flex: 9 }}>
        <View
          style={{
            width: 327,
            height: 86,
            backgroundColor: "#2C2C2E",
            alignSelf: "center",
            marginTop: 25,
            borderRadius: 16,
            elevation: 10,
            flexDirection: "row",
            padding: 20,
          }}
        >
          <View>
            <View style={{ alignItems: "center", marginLeft: 15 }}>
              <Text style={{ color: "white", fontSize: 22 }}>10</Text>
              <Text style={{ color: "white", fontSize: 11 }}>
                Current Users
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 50,
              width: 1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              marginLeft: 25,
              marginRight: 25,
            }}
          ></View>

          <View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 22 }}>5</Text>
              <Text style={{ color: "white", fontSize: 11 }}>Instrucors</Text>
            </View>
          </View>

          <View
            style={{
              height: 50,
              width: 1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              marginLeft: 25,
              marginRight: 25,
            }}
          ></View>
          <View>
            <View style={{ alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 22 }}>6</Text>
              <Text style={{ color: "white", fontSize: 11 }}>Wokouts</Text>
            </View>
          </View>
        </View>

        {/* <Text
          style={{
            color: "white",
            fontSize: 20,
            marginTop: 35,
            alignSelf: "center",
          }}
        >
          ✅ 18 Members Available❗
        </Text> */}

        <Image
          style={{ width: 400, height: 312, marginTop: 20, marginLeft: 10 }}
          source={require("../../assets/appoinmentimages/piecha.png")}
        />
      </View>
    </View>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:40
  },
});
