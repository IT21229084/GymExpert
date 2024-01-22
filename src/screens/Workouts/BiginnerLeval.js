import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const BiginnerLeval = () => {
  const navigation = useNavigation();

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
            marginRight: 130,
          }}
        >
          Beginner Level
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
        <View style={{ padding: 35, marginTop: 20 }}>
          <View style={{ marginBottom: 25 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InclinedMachine");
              }}
            >
              <Image
                source={require("../../../assets/Workoutsimages/machinepress.png")}
                style={{ height: 107, width: 336 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 25 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InclinedMachine");
              }}
            >
              <Image
                source={require("../../../assets/Workoutsimages/shoulderpress.png")}
                style={{ height: 107, width: 336 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 25 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InclinedMachine");
              }}
            >
              <Image
                source={require("../../../assets/Workoutsimages/legcurl.png")}
                style={{ height: 107, width: 336 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 25 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InclinedMachine");
              }}
            >
              <Image
                source={require("../../../assets/Workoutsimages/lateralraise.png")}
                style={{ height: 107, width: 336 }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BiginnerLeval;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
});
