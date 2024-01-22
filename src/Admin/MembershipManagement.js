import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import MembersList from "./Components/MembersList";
import Modal from "react-native-modal";
// import { ScrollView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';
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

const MembershipManagement = () => {
  const [isHeightDialogVisible, setHeightDialogVisible] = useState(false);
  const [height, setHeight] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [name, setName] = useState("");
  const [mid, setMid] = useState("");
  const [memberList, setMemberList] = useState([]);
  const [press, setPress] = useState(false);

  const openHeightDialog = () => {
    setHeightDialogVisible(true);
  };

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };
  const handleEmailChange = (newHeight) => {
    setEmail(newHeight);
  };
  const handlecontactNoChange = (newHeight) => {
    setContactNo(newHeight);
  };
  const handleNameChange = (newHeight) => {
    setName(newHeight);
  };
  const handleMidChange = (newHeight) => {
    setMid(newHeight);
  };

  const closeHeightDialog = () => {
    setHeightDialogVisible(false);
    addNewMember();
  };

  const addNewMember = async () => {
    try {
      const docRef = await addDoc(collection(db, "membership"), {
        mid: mid,
        name: name,
        contactNo: contactNo,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
      // setTitle("");
      setName("");
      setMid("");
      setEmail("");
      setContactNo("");
      alert("New member created!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // getShoppingList();
  };

  const getMemberList = async () => {
    const querySnapshot = await getDocs(collection(db, "membership"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, doc.data());
    //   setShoppingList({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    setMemberList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const data = memberList;
  console.log("members", data);

  useEffect(() => {
    getMemberList();
  }, [press]);

  return (
    <View style={styles.container}>
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
          Membership Management
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

        {/* <MembersList/> */}

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <MembersList
              mid={item.mid}
              name={item.name}
              contactNo={item.contactNo}
              id={item.id}
              email={item.email}
              getMemberList={getMemberList}
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
            source={require("../Admin/Adminassets/addnewmembtn.png")}
          />
        </TouchableOpacity>
      </View>

      <Modal isVisible={isHeightDialogVisible}>
        <View style={styles.dialogContainer}>
          <ScrollView>
            <Text style={styles.dialogTitle}>Add New Member</Text>

            <Text
              style={{
                fontSize: 11,
                color: "white",
                marginTop: 50,
                marginLeft: 25,
              }}
            >
              MID
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor: "gray",
                marginHorizontal: 25,
                color: "#D0FD3E",
              }}
              value={mid}
              onChangeText={handleMidChange}
              //   keyboardType="numeric"
            />

            <Text
              style={{
                fontSize: 11,
                color: "white",
                marginTop: 40,
                marginLeft: 25,
              }}
            >
              Name
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 10,
                borderBottomColor: "gray",
                color: "#D0FD3E",
                marginHorizontal: 25,
              }}
              value={name}
              onChangeText={handleNameChange}
              //   keyboardType="numeric"
            />

            <Text
              style={{
                fontSize: 11,
                color: "white",
                marginTop: 40,
                marginLeft: 25,
              }}
            >
              Contact Number
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 10,
                borderBottomColor: "gray",
                color: "#D0FD3E",
                marginHorizontal: 25,
              }}
              value={contactNo}
              onChangeText={handlecontactNoChange}
              //   keyboardType="numeric"
            />

            <Text
              style={{
                fontSize: 11,
                color: "white",
                marginTop: 40,
                marginLeft: 25,
              }}
            >
              Email
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor: "gray",
                color: "#D0FD3E",
                marginHorizontal: 25,
              }}
              value={email}
              onChangeText={handleEmailChange}
              //   keyboardType="numeric"
            />

            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeHeightDialog}
            >
              <Text style={styles.dialogButtonText}>Save</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default MembershipManagement;

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
    marginBottom: 4,
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
