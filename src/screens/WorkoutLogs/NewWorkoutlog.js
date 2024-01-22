import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
// import { Picker } from '@react-native-picker/picker';
// import { Picker } from 'react-native';

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

const addNewworkoutlog = async () => {
  try {
    const docRef = await addDoc(collection(db, "newworkoutlog"), {
      profilename: profilename,
      date: currentDate,
      workoutPlanNo: workoutPlanNo,
      ex1: ex1,
      ex2: ex2,
      ex3: ex3,
      notex: notex,
      note: note,
    });
    console.log("Document written with ID: ", docRef.id);
    // setTitle("");
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  // getShoppingList();
};

// let userData = [];

const NewWorkoutlog = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const getworkoutLogList = route.params.getworkoutLogList;
  // const [workoutLogList, setworkoutLogList] = useState([]);

  // useEffect(() => {
  //   navigation.setOptions({
  //     getworkoutLogList: getworkoutLogList, // Pass the function as an option
  //   });
  // }, [getworkoutLogList]);

  const [currentDate, setCurrentDate] = useState("");
  const [workoutPlanNo, setWorkoutPlanNo] = useState();

  // const [selectedExer1, setSelectedselectedExer1] = React.useState("");
  // const [ex1set, setEx1Set] = useState("");
  // const [ex1lbs, setEx1Lbs] = useState("");
  // const [ex1reps, setEx1Reps] = useState("");

  const [selectedExer1, setSelectedselectedExer1] = useState("");
  const [ex1Data, setEx1Data] = useState({
    set: "",
    lbs: "",
    reps: "",
  });

  // Function to update a specific field of ex1Data
  const updateEx1Data = (field, value) => {
    setEx1Data({
      ...ex1Data,
      [field]: value,
    });
  };

  const [selectedExer2, setSelectedselectedExer2] = useState("");
  const [ex2Data, setEx2Data] = useState({
    set: "",
    lbs: "",
    reps: "",
  });

  // Function to update a specific field of ex1Data
  const updateEx2Data = (field, value) => {
    setEx2Data({
      ...ex2Data,
      [field]: value,
    });
  };

  // const [ex2, setEx2] = useState("");
  // const [ex3, setEx3] = useState("");
  const [notex, setnotex] = useState("");
  const [note, setnote] = useState("");
  // console.log(ex1);

  const addNewworkoutlog = async () => {
    try {
      const docRef = await addDoc(collection(db, "newworkoutlog"), {
        profilename: profilename,
        date: currentDate,
        workoutPlanNo: workoutPlanNo,
        selectedExer1: selectedExer1,
        ex1Data: ex1Data,
        selectedExer2: selectedExer2,
        ex2Data: ex2Data,
        notex: notex,
        note: note,
      });
      console.log("Document written with ID: ", docRef.id);

      // setTitle("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    getworkoutLogList();
  };

  // Function to get the current date in the format 'DD-MM-YYYY'
  // const getCurrentDate = () => {
  //   const date = new Date();
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };

  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" }); // Get month name
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Set the current date when the component is mounted
  useState(() => {
    setCurrentDate(getCurrentDate());
  }, []);

  // const [workoutLogList, setworkoutLogList] = useState([]);
  // const getworkoutLogList = async () => {
  //   const querySnapshot = await getDocs(collection(db, "newworkoutlog"));
  //   // querySnapshot.forEach((doc) => {
  //   //   // console.log(doc.id, doc.data());
  //   //   setShoppingList({
  //   //     ...doc.data(),
  //   //     id: doc.id,
  //   //   });
  //   // });
  //   setworkoutLogList(
  //     querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //   );
  //   console.log(workoutLogList);
  // };
  //   global.userData;
  //   const data = workoutLogList;
  //  userData = data.filter((item) => item.profilename === profilename);
  //   console.log(userData);

  // useEffect(() => {
  //   getworkoutLogList();
  // }, []);

  // const [selectedExer2, setSelectedselectedExer2] = React.useState("");
  // const [selectedExer3, setSelectedselectedExer3] = React.useState("");
  const exercises = [
    { key: "1", value: "Ab Wheel" },
    { key: "2", value: "Bench Press" },
    { key: "3", value: "Lateral Raise" },
    { key: "4", value: "Skullcrusher" },
    { key: "5", value: "Chin Up" },
    { key: "6", value: "Decline Crunch" },
    { key: "7", value: "Hack Squat" },
    { key: "8", value: "Hammer Curl" },
    { key: "9", value: "Hip Thrust" },
    { key: "10", value: "Incline Curl" },
    { key: "10", value: "Jump Rope" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="navigate-before"
          size={30}
          color="white"
          style={{ marginLeft: 19 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>New Workout Log</Text>
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
      <View style={styles.divider}></View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateLabel}>Date:</Text>
            <View style={styles.dateValueContainer}>
              <Text style={styles.dateValue}>{currentDate}</Text>
            </View>
          </View>

          <View style={styles.additionalView1}>
            <Text style={styles.dateLabel}>Workout Plan No:</Text>
            <View
              style={{
                width: 150,
                height: 45,
                backgroundColor: "#1C1C1E",
                position: "absolute",
                marginTop: 35,
                marginLeft: 37,
                borderRadius: 10,
                borderRadius: 10,

                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.workoutPlanNoInput}
                value={workoutPlanNo ? workoutPlanNo.toString() : ""} // Convert number to string conditionally
                onChangeText={(text) =>
                  setWorkoutPlanNo(parseInt(text, 10) || 0)
                } // Convert string to number, default to 0 if not a valid number
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.additionalView2}>
            <Text style={styles.dateLabel}>Completed exercises :</Text>

            <View style={{ width: "100%", height: 100, marginTop: 90 }}>
              <View
                style={{
                  width: "100%",
                  height: 30,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  paddingHorizontal: 50,
                }}
              >
                <Text style={{ fontSize: 15, color: "white" }}>sets</Text>
                <Text style={{ fontSize: 15, color: "white" }}>lbs</Text>
                <Text style={{ fontSize: 15, color: "white" }}>reps</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 50,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  paddingHorizontal: 29,
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "#1C1C1E",
                    width: 70,
                    paddingLeft: 30,
                    borderRadius: 10,
                    height: 40,
                    fontSize: 18,
                    color: "#D0FD3E",
                  }}
                  value={ex1Data.set}
                  onChangeText={(text) => updateEx1Data("set", text)}
                />
                <TextInput
                  style={{
                    backgroundColor: "#1C1C1E",
                    width: 70,
                    paddingLeft: 25,
                    borderRadius: 10,
                    height: 40,
                    fontSize: 18,
                    color: "#D0FD3E",
                  }}
                  value={ex1Data.lbs}
                  onChangeText={(text) => updateEx1Data("lbs", text)}
                />
                <TextInput
                  style={{
                    backgroundColor: "#1C1C1E",
                    width: 70,
                    paddingLeft: 30,
                    borderRadius: 10,
                    height: 40,
                    fontSize: 18,
                    color: "#D0FD3E",
                  }}
                  value={ex1Data.reps}
                  onChangeText={(text) => updateEx1Data("reps", text)}
                />
              </View>
            </View>

            <View
              style={{
                addingHorizontal: 10,
                marginTop: 35,
                width: 250,
                height: 200,
                marginLeft: 19,
                position: "absolute",
              }}
            >
              <SelectList
                data={exercises}
                setSelected={(val) => setSelectedselectedExer1(val)}
                save="value"
                inputStyles={{ color: "#D0FD3E", fontSize: 18 }}
                dropdownItemStyles={{ marginHorizontal: 10 }}
                dropdownStyles={{ backgroundColor: "gray" }}
                dropdownTextStyles={{ color: "#D0FD3E", fontSize: 18 }}
                boxStyles={{ backgroundColor: "gray" }}
                // onSelect={() => alert(selected)}
                // label="Categories"
                placeholder="select Exercise"
                iconStyle={{ color: "white" }}
                maxHeight={100}
              />
            </View>

            <View style={{ width: "100%", height: 100, marginTop: 70 }}>
              <View
                style={{
                  width: "100%",
                  height: 30,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  paddingHorizontal: 50,
                }}
              >
                <Text style={{ fontSize: 15, color: "white" }}>sets</Text>
                <Text style={{ fontSize: 15, color: "white" }}>lbs</Text>
                <Text style={{ fontSize: 15, color: "white" }}>reps</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 50,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  paddingHorizontal: 29,
                }}
              >
                <TextInput
                  style={{
                    backgroundColor: "#1C1C1E",
                    width: 70,
                    paddingLeft: 30,
                    borderRadius: 10,
                    height: 40,
                    fontSize: 18,
                    color: "#D0FD3E",
                  }}
                  value={ex2Data.set}
                  onChangeText={(text) => updateEx2Data("set", text)}
                />
                <TextInput
                  style={{
                    backgroundColor: "#1C1C1E",
                    width: 70,
                    paddingLeft: 25,
                    borderRadius: 10,
                    height: 40,
                    fontSize: 18,
                    color: "#D0FD3E",
                  }}
                  value={ex2Data.lbs}
                  onChangeText={(text) => updateEx2Data("lbs", text)}
                />
                <TextInput
                  style={{
                    backgroundColor: "#1C1C1E",
                    width: 70,
                    paddingLeft: 30,
                    borderRadius: 10,
                    height: 40,
                    fontSize: 18,
                    color: "#D0FD3E",
                  }}
                  value={ex2Data.reps}
                  onChangeText={(text) => updateEx2Data("reps", text)}
                />
              </View>
            </View>

            <View
              style={{
                addingHorizontal: 10,
                marginTop: 205,
                width: 250,
                height: 200,
                marginLeft: 19,
                position: "absolute",
              }}
            >
              <SelectList
                data={exercises}
                setSelected={(val) => setSelectedselectedExer2(val)}
                save="value"
                inputStyles={{ color: "#D0FD3E", fontSize: 18 }}
                dropdownItemStyles={{ marginHorizontal: 10 }}
                dropdownStyles={{ backgroundColor: "gray" }}
                dropdownTextStyles={{ color: "#D0FD3E", fontSize: 18 }}
                boxStyles={{ backgroundColor: "gray" }}
                // onSelect={() => alert(selected)}
                // label="Categories"
                placeholder="select Exercise"
                iconStyle={{ color: "white" }}
                maxHeight={100}
              />
            </View>
          </View>

          <View style={styles.additionalView3}>
            <Text style={styles.dateLabel}>Not Completed :</Text>
            {/* <View
              style={{
                width: 150,
                height: 35,
                backgroundColor: "#1C1C1E",
                position: "absolute",
                marginTop: 35,
                marginLeft: 37,
                borderRadius: 10,
                borderRadius: 10,

                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <TextInput
                style={styles.workoutPlanNoInput}
                value={notex}
                onChangeText={(text) => setnotex(text)}
              />
            </View> */}

            <View
              style={{
                addingHorizontal: 10,
                marginTop: 35,
                width: 250,
                height: 200,
                marginLeft: 19,
                position: "absolute",
              }}
            >
              <SelectList
                data={exercises}
                setSelected={(val) => setnotex(val)}
                save="value"
                inputStyles={{ color: "#D0FD3E", fontSize: 18 }}
                dropdownItemStyles={{ marginHorizontal: 10 }}
                dropdownStyles={{ backgroundColor: "gray" }}
                dropdownTextStyles={{ color: "#D0FD3E", fontSize: 18 }}
                boxStyles={{ backgroundColor: "gray" }}
                // onSelect={() => alert(selected)}
                // label="Categories"
                placeholder="select Exercise"
                iconStyle={{ color: "white" }}
                maxHeight={50}
              />
            </View>
          </View>

          <View style={styles.additionalView4}>
            <Text style={styles.dateLabel}>Note :</Text>

            <View
              style={{
                width: 260,
                height: 90,
                backgroundColor: "#1C1C1E",
                position: "absolute",
                marginTop: 38,
                marginLeft: 37,
                borderRadius: 10,
                borderRadius: 10,

                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <TextInput
                style={styles.workoutPlanNoInput}
                value={note}
                onChangeText={(text) => setnote(text)}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
              height: 30,
            }}
          >
            <TouchableOpacity onPress={addNewworkoutlog}>
              <Image
                style={{ height: 39, width: 167 }}
                source={require("../../../assets/workoutslogsimages/logsavebtn.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <Text style={{color:'black',fontSize:30}}>{selected}</Text> */}
      </ScrollView>
    </View>
  );
};

export default NewWorkoutlog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 25,
    fontWeight: "800",
    marginRight: 115,
  },
  divider: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 1,
    width: "100%",
  },
  content: {
    backgroundColor: "#2C2C2E",
    height: 1000,
    width: "93%",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 20,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 70,
    elevation: 10,
  },
  dateContainer: {
    // backgroundColor: "red",
    // flex: 1.3,
    height: 100,
  },
  dateLabel: {
    fontSize: 15,
    position: "absolute",
    marginTop: 4,
    marginLeft: 16,
    color: "white",
  },
  dateValueContainer: {
    width: 300,
    height: 45,
    backgroundColor: "#1C1C1E",
    position: "absolute",
    marginTop: 35,
    marginLeft: 37,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  dateValue: {
    color: "#D0FD3E",
    marginLeft: 18,
    fontSize: 18,
  },
  additionalView1: {
    // backgroundColor: "green",
    height: 100,
  },
  workoutPlanNoInput: {
    // width: 50,
    // height: 35,
    // backgroundColor: 'blue',
    // position: 'absolute',
    // marginTop: 35,
    marginLeft: 20,
    // borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#D0FD3E",
    fontSize: 18,
  },
  additionalView2: {
    // backgroundColor: "purple",
    width: "100%",
    // flex: 2.5,
    height: 360,
    marginBottom: 0,
  },
  additionalView3: {
    // backgroundColor: "green",
    // flex: 1.2,
    height: 160,
  },
  additionalView4: {
    // backgroundColor: "purple",
    // flex: 2,
    height: 130,
    zIndex: 1,
  },
  // selectContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginVertical: 10,
  // },
  // selectLabel: {
  //   flex: 1,
  //   fontSize: 18,
  //   color: 'white',
  // },
  // picker: {
  //   flex: 2,
  //   height: 40,
  //   borderColor: 'orange',
  //   borderWidth: 1,
  // },
});
