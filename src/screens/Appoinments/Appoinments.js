import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { app, db, getDocs, collection } from "../../../firebase/index";

const Appointments = () => {
  const navigation = useNavigation();
  const [appoinmentList, setAppoinmentList] = useState([]);
  const [press, setPress] = useState(false);
  const [currentDay, setCurrentDay] = useState("");
  const [selectedProfilesCount, setSelectedProfilesCount] = useState(0);

  const [count6AMto8AM, setCount6AMto8AM] = useState(0);
  const [count8AMto10AM, setCount8AMto10AM] = useState(0);
  const [count4PMto6PM, setCount4PMto6PM] = useState(0);
  const [count6PMto8PM, setCount6PMto8PM] = useState(0);

  const getAppoinments = async () => {
    const querySnapshot = await getDocs(collection(db, "appoinments"));
    const appointments = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    // Reset counts
    setCount6AMto8AM(0);
    setCount8AMto10AM(0);
    setCount4PMto6PM(0);
    setCount6PMto8PM(0);

    // Count profiles for each time slot
    const today = getCurrentDay();
    appointments.forEach((profile) => {
      if (profile.posibleDays.includes(today)) {
        switch (profile.selectedTimeSlot) {
          case "6:00 AM - 8:00 AM":
            setCount6AMto8AM((count) => count + 1);
            break;
          case "8:00 AM - 10:00 AM":
            setCount8AMto10AM((count) => count + 1);
            break;
          case "4:00 PM - 6:00 PM":
            setCount4PMto6PM((count) => count + 1);
            break;
          case "6:00 PM - 8:00 PM":
            setCount6PMto8PM((count) => count + 1);
            break;
          default:
            break;
        }
      }
    });

    setAppoinmentList(appointments);
  };

  const getCurrentDay = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  const countSelectedProfiles = () => {
    const today = getCurrentDay();
    const count = appoinmentList.reduce((acc, profile) => {
      if (profile.posibleDays.includes(today)) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setSelectedProfilesCount(count);
  };

  useEffect(() => {
    getAppoinments().then(() => {
      countSelectedProfiles();
    });
    setCurrentDay(getCurrentDay());
  }, [press]);

  // console.log('appoinmentList',appoinmentList);
  // console.log('count6AMto8AM',count6AMto8AM);
  // console.log('count8AMto10AM',count8AMto10AM);
  // console.log('count4PMto6PM',count4PMto6PM);
  // console.log('count6PMto8PM',count6PMto8PM);

  const data = appoinmentList;
  console.log("data", data);

  const userData = data.filter((item) => item.profilename === profilename);
  console.log("user data hi", userData);
  const extractedObject = userData[0];
  console.log("object data", extractedObject);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 400,
          backgroundColor: "#1C1C1E",
          position: "absolute",
          marginTop: 185,
        }}
        onPress={() => setPress(!press)}
      >
        <View></View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginLeft: 25,
            fontWeight: "800",
          }}
        >
          Appointments
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

      <View style={{ flex: 2, width: "100%", marginLeft: 16 }}>
        {/* <Text style={{ color: "white", marginTop: 10, marginBottom: 10 }}>
          Current Day: {currentDay}{" "}
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          {" "}
          ✅ {selectedProfilesCount} Members are Available ❗{" "}
        </Text>

        <Text style={{ color: "white", fontSize: 20, marginVertical: 10 }}>
          Morning(6.00AM - 8.00AM) ➖ {count6AMto8AM}
        </Text>
        <Text style={{ color: "white", fontSize: 20, marginVertical: 10 }}>
          Morning(8.00AM - 10.00AM) ➖ {count8AMto10AM}
        </Text>
        <Text style={{ color: "white", fontSize: 20, marginVertical: 10 }}>
          Evening(4.00PM - 6.00PM) ➖ {count4PMto6PM}
        </Text>
        <Text style={{ color: "white", fontSize: 20, marginVertical: 10 }}>
          Evening(6.00PM - 8.00PM) ➖ {count6PMto8PM}
        </Text> */}

        <Image
          style={{ width: 400, height: 312, marginTop: 20 }}
          source={require("../../../assets/appoinmentimages/piecha.png")}
        />
      </View>

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              if (extractedObject != null) {
                navigation.navigate("MyAppoinments", {
                  extractedObject: extractedObject,
                });
              } else {
                alert("You have not any Appoinment.");
              }
            }}
          >
            <Image
              style={{ width: 199, height: 50, marginBottom: 20 }}
              source={require("../../../assets/appoinmentimages/myappoinmentbtn.png")}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              if (extractedObject == null) {
                navigation.navigate("MakeAppoinment1");
              } else {
                alert("You already have an Appoinment.");
              }
            }}
          >
            <Image
              style={{ width: 199, height: 50 }}
              source={require("../../../assets/appoinmentimages/makeappoinment.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
