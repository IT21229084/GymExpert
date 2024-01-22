import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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
import WorkoutlogList from "../../components/WorkoutlogList";
import { LogBox } from "react-native";
import { orderBy } from "firebase/firestore";

const WorkoutLogs = (props) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  const navigation = useNavigation();
  const [workoutLogList, setworkoutLogList] = useState([]);

  const stack = props.navigation;
  function gotoProfile() {
    stack.navigate("ProfileStack");
  }
  function gotoNewWorkoutlog() {
    stack.navigate("NewWorkoutlog");
  }

  const getworkoutLogList = async () => {
    const querySnapshot = await getDocs(collection(db, "newworkoutlog"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, doc.data());
    //   setShoppingList({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    setworkoutLogList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    console.log(workoutLogList);
  };

  const data = workoutLogList;
  // const data = workoutLogList.slice().reverse();

  const userData = data.filter((item) => item.profilename === profilename);
  userData.sort((a, b) => a.workoutPlanNo - b.workoutPlanNo);
  console.log(userData);
  // const firstObject = nirmalaData[0];

  useEffect(() => {
    getworkoutLogList();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("../../../assets/workoutslogsimages/workoutlogback.png")}
        resizeMode="cover"
      /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: "orange",
          alignItems: "center",
          // flex: 0.8,
          height: 65,
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
          Workout Logs
        </Text>
        <TouchableOpacity activeOpacity={0.2} onPress={gotoProfile}>
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
          marginBottom: 10,
        }}
      ></View>

      {/* <Text style={{color:'white',fontSize:30}}>ldfj</Text>
      <FlatList
      data={nirmalaData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold',color:'white' }}>Date: {item.date}</Text>
          <Text style={{color:'white'}}>Exercise 1: {item.ex1}</Text>
          <Text style={{color:'white'}}>Exercise 2: {item.ex2}</Text>
          <Text style={{color:'white'}}>Exercise 3: {item.ex3}</Text>
          <Text style={{color:'white'}}>Note: {item.note}</Text>
          <Text style={{color:'white'}}>Exercise Note: {item.notex}</Text>
          <Text style={{color:'white'}}>Workout Plan No: {item.workoutPlanNo}</Text>
        </View>
      )}
    /> */}

      {/* <View style={{ padding: 0 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold',color:'white' }}>Date: {firstObject.date}</Text>
      <Text style={{color:'white'}}>Exercise 1: {firstObject.ex1}</Text>
      <Text style={{color:'white'}}>Exercise 2: {firstObject.ex2}</Text>
      <Text style={{color:'white'}}>Exercise 3: {firstObject.ex3}</Text>
      <Text style={{color:'white'}}>Note: {firstObject.note}</Text>
      <Text style={{color:'white'}}>Exercise Note: {firstObject.notex}</Text>
      <Text style={{color:'white'}}>Workout Plan No: {firstObject.workoutPlanNo}</Text>
    </View> */}

      {/* <View style={{width:'100%',height:200,backgroundColor:'red'}}></View>
<View style={{width:'100%',height:200,backgroundColor:'blue'}}></View>
<View style={{width:'100%',height:200,backgroundColor:'green'}}></View>
<View style={{width:'100%',height:200,backgroundColor:'red'}}></View> */}

      {/* <WorkoutlogList nirmalaData={nirmalaData}/> */}

      <FlatList
        data={userData}
        renderItem={({ item }) => (
          <WorkoutlogList
            date={item.date}
            selectedExer1={item.selectedExer1}
            ex1Data={item.ex1Data}
            ex2Data={item.ex2Data}
            selectedExer2={item.selectedExer2}
            workoutPlanNo={item.workoutPlanNo}
            note={item.note}
            notex={item.notex}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={{ position: "absolute", marginLeft: 310, marginTop: 520 }}
        activeOpacity={0.6}
        onPress={() => {
          navigation.navigate("NewWorkoutlog", {
            getworkoutLogList: getworkoutLogList,
          });
        }}
      >
        <Image
          style={{ height: 60, width: 60 }}
          source={require("../../../assets/workoutslogsimages/logbutton.png")}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <View style={{ flex: 7 }}></View>
    </View>
  );
};

export default WorkoutLogs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
