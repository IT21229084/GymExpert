import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
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
import NotificationList from "../../components/NotificationList";

const Notifications = () => {
  const navigation = useNavigation();
  const [notificationList, setNotificationList] = useState([]);

  const getNotificationList = async () => {
    const querySnapshot = await getDocs(collection(db, "notification"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, doc.data());
    //   setShoppingList({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    setNotificationList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  console.log("notificationList", notificationList);

  useEffect(() => {
    getNotificationList();
  }, []);

  const data = notificationList;
  // const userData = data.filter((item) => item.profilename === profilename);
  const userData = data.filter(
    (item) => item.profilename === profilename || item.profilename === "all"
  );
  console.log(userData);

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
            marginRight: 155,
          }}
        >
          Notifications
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
          marginBottom: 25,
        }}
      ></View>

      <FlatList
        data={userData}
        renderItem={({ item }) => (
          <NotificationList
            title={item.title}
            discription={item.discription}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
