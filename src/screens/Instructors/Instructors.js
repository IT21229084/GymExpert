import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import InstructorsList from "./InstructorsList";
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

const Instructors = () => {
  const navigation = useNavigation();
  const [instructorsList, setinstructorsList] = useState([]);

  const getworkoutLogList = async () => {
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
    // console.log(workoutLogList);
  };

  const data = instructorsList;

  useEffect(() => {
    getworkoutLogList();
  }, []);

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
            marginRight: 160,
          }}
        >
          Instructors
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

      <View style={{}}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "900",
            marginTop: 20,
            marginLeft: 30,
            marginBottom: 25,
          }}
        >
          {data.length} Instructors are available
        </Text>
      </View>
      {/* {shoppingList.length} */}

      {/* <InstructorsList/> */}

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <InstructorsList
            name={item.name}
            imaurl={item.imaurl}
            expreiance={item.expreiance}
            id={item.id}
            description={item.description}
            category={item.category}
            getworkoutLogList={getworkoutLogList}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Instructors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
});
