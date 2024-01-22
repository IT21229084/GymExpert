import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Startupscreen = (props) => {
  const stack = props.navigation;
  function gotoLoginScreen() {
    stack.navigate("LoginScreen");
  }

  return (
    <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("../../assets/startuppage.png")}
        resizeMode="cover"
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={{ alignSelf: "center" }}
        onPress={gotoLoginScreen}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>GET STARTED </Text>
          <MaterialIcons name="navigate-next" size={24} color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Startupscreen;

const styles = StyleSheet.create({
  buttonContainer: {
    // alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 8,
    padding: 10,
    width: 150,
    height: 50,
    borderRadius: 100,
    marginBottom: 38,
    // marginTop:"auto"
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "normal",
    fontSize: 17,
    // marginRight: 1,
    // marginLeft: 20,
    // fontWeight: "300",
  },
});
