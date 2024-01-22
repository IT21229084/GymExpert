import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import TrendingPlan from "../../components/TrendingPlan";
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

const Workouts = () => {
  const navigation = useNavigation();
  const [exerciseList, setexerciseList] = useState([]);
  const [press, setPress] = useState(false);

  const getExercisesList = async () => {
    const querySnapshot = await getDocs(collection(db, "workouts"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, doc.data());
    //   setShoppingList({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    setexerciseList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const dataex = exerciseList;
  console.log("exercises", dataex);

  useEffect(() => {
    getExercisesList();
  }, [press]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: "orange",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
          // flex: 0.8,
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
          Workout Categories
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

      <TouchableOpacity
        style={{
          width: "100%",
          height: 450,
          position: "absolute",
          marginTop: 100,
          backgroundColor: "#1C1C1E",
        }}
        onPress={() => setPress(!press)}
      >
        <View></View>
      </TouchableOpacity>

      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <View>
            <TouchableOpacity
              style={{ marginLeft: 0, marginTop: 0 }}
              activeOpacity={0.6}
              onPress={() => {
                navigation.navigate("BiginnerLeval");
              }}
            >
              <Image
                style={{ height: 91, width: 249, marginRight: 0 }}
                source={require("../../../assets/Workoutsimages/beginbtn.png")}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          {/* <View  >
              <TouchableOpacity
                style={{ marginLeft: 10, marginTop: 0 }}
                activeOpacity={0.6}
                onPress={()=>{
                  navigation.navigate('Homeworkouts');
                  }}
              >
                <Image
                  style={{ height: 108, width: 121 }}
                  source={require("../../../assets/Workoutsimages/homeworkbtn.png")}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View> */}
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => {
              navigation.navigate("Instructors");
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>
              Meet your coach,start your journey{" "}
            </Text>
            <Ionicons name="chevron-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 23 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            marginLeft: 45,
          }}
        >
          Trending Plans
        </Text>

        {/* <TrendingPlan/> */}

        <View style={{ height: 300 }}>
          <FlatList
            data={dataex}
            renderItem={({ item }) => (
              <TrendingPlan
                title={item.title}
                mainurl={item.mainurl}
                maindis={item.maindis}
                dis1url={item.dis1url}
                dis1={item.dis1}
                dis2url={item.dis2url}
                dis2={item.dis2}
                dis3url={item.dis3url}
                dis3={item.dis3}
                id={item.id}
                getExercisesList={getExercisesList}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Workouts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
});
