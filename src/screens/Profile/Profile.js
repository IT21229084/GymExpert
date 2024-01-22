import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { firebase_auth } from "../../../firebase";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "../../../firebase/index";
import { where } from "firebase/firestore";

const Profiles = (props) => {
  const stack = props.navigation;

  const userEmail = firebase_auth.currentUser?.email;

  const [userDetails, setuserDetails] = useState([]);
  // const getUserDetails = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"), where("userEmail", "==", userEmail));
  //   const userData = querySnapshot.docs[0] ? { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id } : null;
  //   setuserDetails(userData);
  //   console.log(userData);

  // };

  const getUserDetails = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, doc.data());
    //   setShoppingList({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    setuserDetails(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    console.log(userDetails);
  };

  const data = userDetails;
  console.log("data", data);

  const userData = data.filter((item) => item.userName === profilename);
  console.log("user data", userData);
  const extractedObject = userData[0];
  console.log("object data", extractedObject);

  useEffect(() => {
    getUserDetails();
  }, []);

  function GotoBack() {
    stack.goBack();
  }
  function GotoEditProfile() {
    stack.navigate("EditProfile", { extractedObject: extractedObject });
  }
  function GotoScanQR() {
    stack.navigate("ScanQR");
  }
  function GotoPayments() {
    stack.navigate("Payments");
  }
  function GotoNotifications() {
    stack.navigate("Notifications");
  }
  function GotoPrivacyPolicy() {
    stack.navigate("PrivacyPolicy");
  }
  function GotoLogin() {
    stack.navigate("LoginScreen");
  }
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("../../../assets/profileimgages/profileback2.png")}
        resizeMode="cover"
      />
      <View
        style={{
          flexDirection: "row",
          // backgroundColor: "red",
          //   flex: 0.4,
          width: "100%",
          alignItems: "flex-start",
          marginTop: 15,
        }}
      >
        <MaterialIcons
          name="navigate-before"
          size={30}
          color="white"
          style={{ marginLeft: 19 }}
          onPress={GotoBack}
        />
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 350,
          // backgroundColor: "red",
        }}
      >
        <FontAwesome name="user-circle-o" size={90} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginTop: 16,
            fontWeight: "400",
          }}
        >
          {profilename}
        </Text>
      </View>

      <TouchableOpacity
        style={{ position: "absolute", marginLeft: 223, marginTop: 103 }}
        activeOpacity={0.6}
        onPress={GotoScanQR}
      >
        <Image
          style={{ height: 40, width: 40 }}
          source={require("../../../assets/profileimgages/qr.png")}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View
        style={{
          // backgroundColor: "#34ebb1",
          width: "100%",
          height: 40,
          marginTop: 220,
          position: "absolute",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={GotoEditProfile}
        >
          <Text style={{ marginLeft: 55, fontSize: 15, color: "#FFFFFF" }}>
            Edit Profile
          </Text>
          <MaterialIcons
            name="navigate-next"
            size={24}
            color="white"
            style={{ marginLeft: 340, position: "absolute" }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          //   backgroundColor: "#344feb",
          width: "100%",
          height: 40,
          marginTop: 280,
          position: "absolute",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={GotoPayments}
        >
          <Text style={{ marginLeft: 55, fontSize: 15, color: "#FFFFFF" }}>
            Payments
          </Text>
          <MaterialIcons
            name="navigate-next"
            size={24}
            color="white"
            style={{ marginLeft: 340, position: "absolute" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          //   backgroundColor: "#d234eb",
          width: "100%",
          height: 40,
          marginTop: 343,
          position: "absolute",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={GotoNotifications}
        >
          <Text style={{ marginLeft: 55, fontSize: 15, color: "#FFFFFF" }}>
            Notifications
          </Text>
          <MaterialIcons
            name="navigate-next"
            size={24}
            color="white"
            style={{ marginLeft: 340, position: "absolute" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          //   backgroundColor: "#a5c9ac",
          width: "100%",
          height: 40,
          marginTop: 404,
          position: "absolute",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={GotoPrivacyPolicy}
        >
          <Text style={{ marginLeft: 55, fontSize: 15, color: "#FFFFFF" }}>
            Privacy Policy
          </Text>
          <MaterialIcons
            name="navigate-next"
            size={24}
            color="white"
            style={{ marginLeft: 340, position: "absolute" }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          //   backgroundColor: "#0e5c1c",
          width: "100%",
          height: 40,
          marginTop: 533,
          position: "absolute",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => firebase_auth.signOut()}
        >
          <Text style={{ marginLeft: 55, fontSize: 15, color: "red" }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
