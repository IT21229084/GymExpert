import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ScanQR = () => {
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
            marginRight: 180, 
          }} 
        > 
          QR Code 
        </Text>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            navigation.navigate("Profile");
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
          color: "white",
          fontSize: 30,
          position: "absolute",
          alignSelf: "center",
          marginTop: 120,
        }}
      >
        Scan QR Code
      </Text>

      <Image
        style={{ alignSelf: "center", marginTop: 120 }}
        source={{
          width: 250,
          height: 250,
          uri: "https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg",
        }}
      />
    </View>
  );
};

export default ScanQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
