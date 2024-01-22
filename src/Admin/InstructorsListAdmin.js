import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import InstructorsList from "./Components/InstructorsList";
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
// import { ScrollView } from 'react-native-gesture-handler';

const InstructorsListAdmin = () => {
  const [isHeightDialogVisible, setHeightDialogVisible] = useState(false);
  const [height, setHeight] = useState("");
  const [imaurl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [expreiance, setExpreiance] = useState("");
  const [description, setdescription] = useState("");
  const [tid, setTid] = useState("");
  const [name, setName] = useState("");
  const [instructorsList, setinstructorsList] = useState([]);
  const [press, setPress] = useState(false);

  const openHeightDialog = () => {
    setHeightDialogVisible(true);
  };

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };
  const handleImgUrlChange = (newHeight) => {
    setImgUrl(newHeight);
  };
  const handleCatogatyChange = (newHeight) => {
    setCategory(newHeight);
  };
  const handleExpreianceChange = (newHeight) => {
    setExpreiance(newHeight);
  };
  const handleDescriptionChange = (newHeight) => {
    setdescription(newHeight);
  };
  const handleTidChange = (newHeight) => {
    setTid(newHeight);
  };
  const handleNameChange = (newHeight) => {
    setName(newHeight);
  };

  const closeHeightDialog = () => {
    setHeightDialogVisible(false);
    addNewInstructor();
  };

  const addNewInstructor = async () => {
    try {
      const docRef = await addDoc(collection(db, "instructors"), {
        tid: tid,
        name: name,
        description: description,
        expreiance: expreiance,
        category: category,
        imaurl: imaurl,
      });
      console.log("Document written with ID: ", docRef.id);
      // setTitle("");
      setName("");
      setImgUrl("");
      setCategory("");
      setExpreiance("");
      setdescription("");
      setTid("");
      alert("New instructer added!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // getShoppingList();
  };

  const getInstructorsList = async () => {
    const querySnapshot = await getDocs(collection(db, "instructors"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, doc.data());
    //   setShoppingList({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    setinstructorsList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const data = instructorsList;
  console.log("instructors", data);

  useEffect(() => {
    getInstructorsList();
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
          Instructors List
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

        {/* <InstructorsList/> */}

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <InstructorsList
              category={item.category}
              description={item.description}
              expreiance={item.expreiance}
              id={item.id}
              imaurl={item.imaurl}
              name={item.name}
              tid={item.tid}
              getInstructorsList={getInstructorsList}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <TouchableOpacity
        style={{ position: "absolute", marginTop: 530, marginLeft: 240 }}
        onPress={openHeightDialog}
      >
        <Image
          style={{ width: 132, height: 30 }}
          source={require("../Admin/Adminassets/addnewins.png")}
        />
      </TouchableOpacity>

      <Modal isVisible={isHeightDialogVisible}>
        <View style={styles.dialogContainer}>
          <ScrollView>
            <Text style={styles.dialogTitle}>Add New Instructor</Text>

            <Text
              style={{
                fontSize: 11,
                color: "white",
                marginTop: 10,
                marginLeft: 25,
              }}
            >
              TID
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor: "gray",
                marginHorizontal: 25,
                color: "#D0FD3E",
              }}
              value={tid}
              onChangeText={handleTidChange}
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
              Name
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                color: "#D0FD3E",
                borderBottomColor: "gray",
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
                marginTop: 15,
                marginLeft: 25,
              }}
            >
              Description
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                color: "#D0FD3E",
                borderBottomColor: "gray",
                marginHorizontal: 25,
              }}
              value={description}
              onChangeText={handleDescriptionChange}
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
              Expreiance
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                color: "#D0FD3E",
                borderBottomColor: "gray",
                marginHorizontal: 25,
              }}
              value={expreiance}
              onChangeText={handleExpreianceChange}
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
              Category
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                color: "#D0FD3E",
                borderBottomColor: "gray",
                marginHorizontal: 25,
              }}
              value={category}
              onChangeText={handleCatogatyChange}
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
              Image url
            </Text>
            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 0,
                color: "#D0FD3E",
                borderBottomColor: "gray",
                marginHorizontal: 25,
              }}
              value={imaurl}
              onChangeText={handleImgUrlChange}
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

export default InstructorsListAdmin;
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
