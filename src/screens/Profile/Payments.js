import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "../../../firebase/index";
// import { Linking } from 'react-native';

// import { ScrollView } from 'react-native-gesture-handler';

const Payments = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  // const [userFullName, setuserFullName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [cardHolderName, setcardHolderName] = useState("");

  const currentDate = new Date().toLocaleDateString();

  // console.log(currentDate);

  const rrrrrr = new Date();
  const currentHours = rrrrrr.getHours();
  const currentMinutes = rrrrrr.getMinutes();
  const currentSeconds = rrrrrr.getSeconds();
  const amOrPm = currentHours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const formattedHours = currentHours % 12 || 12;

  const currentTime = `${formattedHours}:${currentMinutes}:${currentSeconds} ${amOrPm}`;

  // console.log(currentTime);

  const addPaymentNotification = async () => {
    try {
      const docRef = await addDoc(collection(db, "notification"), {
        title: "payment successful",
        discription: "Your subscription payment has been received.Thank you ❤",
        profilename: profilename,
      });
      console.log("Document written with ID: ", docRef.id);
      // setTitle("");
      Alert.alert(
        "✅ Payment Completed!",
        "You have secured your spot for another month of fitness journey!",
        [{ text: "Okay", onPress: () => navigation.navigate("Profile") }]
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // getShoppingList();
  };

  const addPayment = async () => {
    try {
      const docRef = await addDoc(collection(db, "payment"), {
        date: currentDate,
        time: currentTime,
        profilename: profilename,
        cardHolderName: cardHolderName,
        cardNumber: cardNumber,
      });
      console.log("Document written with ID: ", docRef.id);
      // setTitle("");
      addPaymentNotification();
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // getShoppingList();
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
            marginRight: 180,
          }}
        >
          Payment
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

      <ScrollView>
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://payments.google.com/gp/w/u/0/home/signup"
              );
            }}
          >
            <Image
              style={{ width: 313, height: 38, marginBottom: 20 }}
              source={require("../../../assets/profileimgages/gpay.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://link.com/en-in"); // Replace with your website URL
            }}
          >
            <Image
              style={{ width: 313, height: 41 }}
              source={require("../../../assets/profileimgages/linkbtn.png")}
            />
          </TouchableOpacity>
        </View>

        <View style={{ height: 400 }}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 25,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 1,
                width: "25%",
              }}
            ></View>
            <Text style={{ color: "gray", fontSize: 17 }}>
              or pay with a card
            </Text>
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 1,
                width: "25%",
              }}
            ></View>
          </View>

          <View>
            <Text style={{ fontSize: 11, color: "#D0FD3E", marginLeft: 50 }}>
              Card Holder Name
            </Text>
            <TextInput
              placeholder="Enter card holder name"
              placeholderTextColor={"gray"}
              style={{
                marginLeft: 50,
                fontSize: 16,
                color: "white",
                marginTop: 10,
              }}
              value={cardHolderName}
              onChangeText={(text) => setcardHolderName(text)}
            />

            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 1,
                width: "85%",
                marginTop: 25,
                alignSelf: "center",
              }}
            ></View>
          </View>

          <View style={{ marginTop: 25 }}>
            <Text style={{ fontSize: 11, color: "#D0FD3E", marginLeft: 50 }}>
              Card Number
            </Text>
            {/* <Text style={{fontSize:16,color:'white',marginLeft:50,marginTop:10}}>Card Holder Name</Text> */}
            <TextInput
              placeholder="Enter card number"
              placeholderTextColor={"gray"}
              style={{
                marginLeft: 50,
                fontSize: 16,
                color: "white",
                marginTop: 10,
              }}
              value={cardNumber}
              onChangeText={(text) => setcardNumber(text)}
            />

            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 1,
                width: "85%",
                marginTop: 25,
                alignSelf: "center",
              }}
            ></View>

            <View style={{ marginTop: 25, flexDirection: "row" }}>
              <View style={{ width: "50%" }}>
                <Text
                  style={{ marginLeft: 50, color: "#D0FD3E", fontSize: 11 }}
                >
                  Expiry (MM/YY)
                </Text>
                {/* <Text style={{marginLeft:50,color:'white',fontSize:16,marginTop:10}}>04/23 </Text> */}

                <TextInput
                  placeholder="MM/YY"
                  placeholderTextColor={"gray"}
                  style={{
                    marginLeft: 50,
                    fontSize: 16,
                    color: "white",
                    marginTop: 10,
                  }}
                  value={expiry}
                  onChangeText={(text) => setExpiry(text)}
                />

                <View
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    height: 1,
                    width: "70%",
                    marginTop: 25,
                    alignSelf: "flex-start",
                    marginLeft: 35,
                  }}
                ></View>
              </View>

              <View style={{ width: "50%" }}>
                <Text
                  style={{ marginLeft: 30, color: "#D0FD3E", fontSize: 11 }}
                >
                  CVC{" "}
                </Text>
                {/* <Text style={{marginLeft:30,color:'white',fontSize:16,marginTop:10}}>242 </Text> */}

                <TextInput
                  placeholder="CVC"
                  placeholderTextColor={"gray"}
                  style={{
                    marginLeft: 30,
                    fontSize: 16,
                    color: "white",
                    marginTop: 10,
                  }}
                  value={cvc}
                  onChangeText={(text) => setCvc(text)}
                />

                <View
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    height: 1,
                    width: "80%",
                    marginTop: 25,
                    alignSelf: "flex-start",
                    marginRight: 45,
                  }}
                ></View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              alignItems: "center",
            }}
          >
            {/* checkBox */}
            <TouchableOpacity
              style={{
                width: 18,
                height: 18,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 0,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 60,
              }}
              onPress={toggleCheckbox}
              activeOpacity={0.8}
            >
              {isChecked ? (
                <AntDesign name="check" size={15} color="white" />
              ) : null}
            </TouchableOpacity>

            <Text style={{ color: "gray", marginLeft: 15, fontSize: 12 }}>
              Save this card for future
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: 1,
              width: "85%",
              marginTop: 30,
              alignSelf: "center",
            }}
          ></View>
        </View>

        <View
          style={{
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 35,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              addPayment();
            }}
          >
            <Image
              style={{ width: 183, height: 35 }}
              source={require("../../../assets/profileimgages/paybtn.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Payments;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
