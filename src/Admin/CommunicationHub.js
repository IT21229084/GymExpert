import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import NotiList from "./Components/NotiList";
import Modal from "react-native-modal";
import {
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "../../firebase/index";

const CommunicationHub = () => {
  const [isHeightDialogVisible, setHeightDialogVisible] = useState(false);
  const [height, setHeight] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [press, setPress] = useState(false);
  const [notificationList, setnotificationList] = useState([]);

  const openHeightDialog = () => {
    setHeightDialogVisible(true);
  };

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };
  const handleContentChange = (newHeight) => {
    setContent(newHeight);
  };
  const handleTitleChange = (newHeight) => {
    setTitle(newHeight);
  };

  const closeHeightDialog = () => {
    setHeightDialogVisible(false);
    addNotification();
  };

  const addNotification = async () => {
    try {
      const docRef = await addDoc(collection(db, "notification"), {
        title: title,
        discription: content,
        profilename: "all",
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
      setContent("");
      alert("New Notification created!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // getShoppingList();
  };

  const getNotificationList = async () => {
    const querySnapshot = await getDocs(collection(db, "notification"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, doc.data());
    //   setShoppingList({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    setnotificationList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const data = notificationList;
  const userData = data.filter((item) => item.profilename === "all");
  console.log("notifications", userData);

  useEffect(() => {
    getNotificationList();
  }, [press]);

  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:30,color:'white'}}>Communication Hub</Text> */}
      <View
        style={{
          width: "100%",
          height: 50,
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
          Communication Hub
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

      <View style={{ width: "100%", marginTop: 25 }}>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 400,
            position: "absolute",
            marginTop: 100,
            backgroundColor: "#1C1C1E",
          }}
          onPress={() => setPress(!press)}
        >
          <View></View>
        </TouchableOpacity>

        {/* <NotiList/> */}

        <FlatList
          data={userData}
          renderItem={({ item }) => (
            <NotiList
              title={item.title}
              discription={item.discription}
              getNotificationList={getNotificationList}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
        />

        <TouchableOpacity
          style={{ position: "absolute", marginTop: 430, marginLeft: 240 }}
          onPress={openHeightDialog}
        >
          <Image
            style={{ width: 132, height: 30 }}
            source={require("../Admin/Adminassets/addnewnoti.png")}
          />
        </TouchableOpacity>

        <Modal isVisible={isHeightDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>Add New Notification</Text>

            <Text
              style={{
                fontSize: 11,
                color: "white",
                marginTop: 15,
                marginLeft: 25,
              }}
            >
              Title
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor: "gray",
                color: "#D0FD3E",
                marginHorizontal: 25,
              }}
              value={title}
              onChangeText={handleTitleChange}
              //   keyboardType="numeric"
            />

            <Text
              style={{
                fontSize: 11,
                color: "white",
                marginTop: 15,
                marginLeft: 25,
              }}
            >
              Content
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 10,
                borderBottomColor: "gray",
                color: "#D0FD3E",
                marginTop: 30,
                marginHorizontal: 25,
              }}
              value={content}
              onChangeText={handleContentChange}
              //   keyboardType="numeric"
            />

            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeHeightDialog}
            >
              <Text style={styles.dialogButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default CommunicationHub;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    //   padding:40
  },
  dialogContainer: {
    backgroundColor: "#606062",
    padding: 20,
    borderRadius: 30, // Add border radius for a rounded appearance
  },

  dialogTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 2,
    alignSelf: "center",
    color: "white",
    marginTop: 15,
  },

  dialogInput: {
    borderBottomWidth: 1,
    marginBottom: 10,
    borderBottomColor: "gray",
    marginHorizontal: 25,
  },

  dialogButton: {
    backgroundColor: "#D0FD3E", // Background color of the OK button
    // padding: 10,
    alignItems: "center",
    borderRadius: 10, // Add border radius for a rounded appearance
    width: 83,
    height: 30,
    borderRadius: 50,
    alignSelf: "center",
    elevation: 10,
    marginTop: 20,
    marginBottom: 10,
  },

  dialogButtonText: {
    color: "black", // Text color of the OK button
    marginTop: 5,
  },
});
