import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LogBox } from "react-native";
import Modal from "react-native-modal";
import { firebase_auth } from "../../firebase";
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

const Home = (props) => {
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  const [height, setHeight] = useState("170"); // Initialize with a default height
  const [weight, setWeight] = useState("65"); // Initialize with a default weight
  const [neck, setNeck] = useState("16"); // Initialize with a default neck measurement
  const [shoulders, setShoulders] = useState("16"); // Initialize with a default shoulders measurement
  const [chest, setChest] = useState("16"); // Initialize with a default chest measurement
  const [leftBicep, setLeftBicep] = useState("16"); // Initialize with a default left bicep measurement
  const [rightBicep, setRightBicep] = useState("16"); // Initialize with a default right bicep measurement
  const [waist, setWaist] = useState("16"); // Initialize with a default waist measurement

  const stack = props.navigation;
  const [isHeightDialogVisible, setHeightDialogVisible] = useState(false);
  const [isWeightDialogVisible, setWeightDialogVisible] = useState(false);
  const [isNeckDialogVisible, setNeckDialogVisible] = useState(false);
  const [isShouldersDialogVisible, setShouldersDialogVisible] = useState(false);
  const [isChestDialogVisible, setChestDialogVisible] = useState(false);
  const [isLeftBicepDialogVisible, setLeftBicepDialogVisible] = useState(false);
  const [isRightBicepDialogVisible, setRightBicepDialogVisible] =
    useState(false);
  const [isWaistDialogVisible, setWaistDialogVisible] = useState(false);

  function gotoWorkoutplan() {
    stack.navigate("WorkoutPlan", {
      userData: userData,
      getWorkoutPlan: getWorkoutPlan,
    });
  }

  function gotoNutritionplan() {
    stack.navigate("NutritionPlan", {
      userNutritionData: userNutritionData,
      getNutritionPlan: getNutritionPlan,
    });
  }

  function gotoProfile() {
    stack.navigate("ProfileStack");
  }

  // Function to handle height input changes
  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };

  // Function to handle weight input changes
  const handleWeightChange = (newWeight) => {
    setWeight(newWeight);
  };

  // Function to handle neck input changes
  const handleNeckChange = (newNeck) => {
    setNeck(newNeck);
  };

  // Function to handle shoulders input changes
  const handleShouldersChange = (newShoulders) => {
    setShoulders(newShoulders);
  };

  // Function to handle chest input changes
  const handleChestChange = (newChest) => {
    setChest(newChest);
  };

  // Function to handle left bicep input changes
  const handleLeftBicepChange = (newLeftBicep) => {
    setLeftBicep(newLeftBicep);
  };

  // Function to handle right bicep input changes
  const handleRightBicepChange = (newRightBicep) => {
    setRightBicep(newRightBicep);
  };

  // Function to handle waist input changes
  const handleWaistChange = (newWaist) => {
    setWaist(newWaist);
  };

  const openHeightDialog = () => {
    setHeightDialogVisible(true);
  };

  const openWeightDialog = () => {
    setWeightDialogVisible(true);
  };

  const openNeckDialog = () => {
    setNeckDialogVisible(true);
  };

  const openShouldersDialog = () => {
    setShouldersDialogVisible(true);
  };

  const openChestDialog = () => {
    setChestDialogVisible(true);
  };

  const openLeftBicepDialog = () => {
    setLeftBicepDialogVisible(true);
  };

  const openRightBicepDialog = () => {
    setRightBicepDialogVisible(true);
  };

  const openWaistDialog = () => {
    setWaistDialogVisible(true);
  };

  const closeHeightDialog = () => {
    setHeightDialogVisible(false);
  };

  const closeWeightDialog = () => {
    setWeightDialogVisible(false);
  };

  const closeNeckDialog = () => {
    setNeckDialogVisible(false);
  };

  const closeShouldersDialog = () => {
    setShouldersDialogVisible(false);
  };

  const closeChestDialog = () => {
    setChestDialogVisible(false);
  };

  const closeLeftBicepDialog = () => {
    setLeftBicepDialogVisible(false);
  };

  const closeRightBicepDialog = () => {
    setRightBicepDialogVisible(false);
  };

  const closeWaistDialog = () => {
    setWaistDialogVisible(false);
  };

  const userEmail = firebase_auth.currentUser?.email;
  const parts = userEmail.split("@");
  // const charactersBeforeAt = parts[0];

  global.profilename = parts[0];
  const [workoutPlanImgUrl, setworkoutPlanImgUrl] = useState([]);
  const [nutritionPlanImgUrl, setnutritionPlanImgUrl] = useState([]);
  const [press, setPress] = useState(false);

  const getWorkoutPlan = async () => {
    const querySnapshot = await getDocs(collection(db, "wokoutplan"));
   
    setworkoutPlanImgUrl(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  const getNutritionPlan = async () => {
    const querySnapshot = await getDocs(collection(db, "nutritionplan"));
    
    setnutritionPlanImgUrl(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  const data = workoutPlanImgUrl;
  // console.log('data',data);

  const userData = data.filter((item) => item.profilename === profilename);
  // console.log('user data',userData);
  // const extractedObject = userData[0];
  // console.log('object data',extractedObject);

  const dataNutrition = nutritionPlanImgUrl;
  // console.log('data',data);

  const userNutritionData = dataNutrition.filter(
    (item) => item.profilename === profilename
  );
  console.log("nutritiondata", userNutritionData);
  // const extractedObject = userData[0];
  // console.log('object data',extractedObject);

  useEffect(() => {
    getWorkoutPlan();
    getNutritionPlan();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // flex: 1,
          height: 75,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            marginLeft: 25,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          HELLO {profilename}
          {/* {firebase_auth.currentUser?.email} */}
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
        }}
      ></View>

      <ScrollView>
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
            justifyContent: "center",
            alignItems: "center",
            // flex: 2,
            // backgroundColor:'red',
            height: 170,
          }}
        >
          <TouchableOpacity onPress={openHeightDialog}>
            <View
              style={{
                justifyContent: "center",
                width: 145,
                height: 127,
                backgroundColor: "#2C2C2E",
                marginLeft: 0,
                marginRight: 35,
                borderRadius: 35,
              }}
            >
              <View
                style={{
                  flex: 1,
                  borderTopRightRadius: 35,
                  borderTopLeftRadius: 35,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    marginLeft: 18,
                    marginTop: 16,
                    fontWeight: "bold",
                  }}
                >
                  Height
                </Text>
                <FontAwesome
                  name="bookmark"
                  size={15}
                  color="#D0FD3E"
                  style={{ marginLeft: 25, marginTop: 18 }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  borderBottomLeftRadius: 35,
                  borderBottomRightRadius: 35,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    marginLeft: 18,
                    marginTop: 16,
                    fontWeight: "bold",
                    color: "#D0FD3E",
                  }}
                >
                  {height} cm
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={openWeightDialog}>
            <View
              style={{
                justifyContent: "center",
                width: 145,
                height: 127,
                backgroundColor: "#2C2C2E",
                marginRight: 0,
                marginLeft: 35,
                borderRadius: 35,
              }}
            >
              <View
                style={{
                  flex: 1,
                  borderTopRightRadius: 35,
                  borderTopLeftRadius: 35,
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    marginLeft: 18,
                    marginTop: 16,
                    fontWeight: "bold",
                  }}
                >
                  Weight
                </Text>
                <FontAwesome
                  name="bookmark"
                  size={15}
                  color="#D0FD3E"
                  style={{ marginLeft: 25, marginTop: 18 }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  borderBottomLeftRadius: 35,
                  borderBottomRightRadius: 35,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    marginLeft: 18,
                    marginTop: 16,
                    fontWeight: "bold",
                    color: "#D0FD3E",
                  }}
                >
                  {weight} kg
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            // flex: 3,
            // backgroundColor: "blue",
            height: 320,
          }}
        >
          <View
            style={{
              backgroundColor: "#2C2C2E",
              width: "85%",
              height: 300,
              borderRadius: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginBottom: 10,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Measure
            </Text>

            <ScrollView>
              <TouchableOpacity onPress={openNeckDialog}>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#1C1C1E",
                    height: 30,
                    alignItems: "center",
                    marginBottom: 7,
                    width: 270,
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      marginLeft: 55,
                      position: "absolute",
                      color: "#D0FD3E",
                    }}
                  >
                    Neck
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      position: "absolute",
                      marginLeft: 175,
                    }}
                  >
                    {neck} in
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={openShouldersDialog}>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#1C1C1E",
                    height: 30,
                    alignItems: "center",
                    marginBottom: 7,
                    width: 270,
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      marginLeft: 55,
                      position: "absolute",
                      color: "#D0FD3E",
                    }}
                  >
                    Shoulders
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      position: "absolute",
                      marginLeft: 175,
                    }}
                  >
                    {shoulders} in
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={openChestDialog}>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#1C1C1E",
                    height: 30,
                    alignItems: "center",
                    marginBottom: 7,
                    width: 270,
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      marginLeft: 55,
                      position: "absolute",
                      color: "#D0FD3E",
                    }}
                  >
                    Chest
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      position: "absolute",
                      marginLeft: 175,
                    }}
                  >
                    {chest} in
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={openLeftBicepDialog}>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#1C1C1E",
                    height: 30,
                    alignItems: "center",
                    marginBottom: 7,
                    width: 270,
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      marginLeft: 55,
                      position: "absolute",
                      color: "#D0FD3E",
                    }}
                  >
                    Left Bicep
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      position: "absolute",
                      marginLeft: 175,
                    }}
                  >
                    {leftBicep} in
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={openRightBicepDialog}>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#1C1C1E",
                    height: 30,
                    alignItems: "center",
                    marginBottom: 7,
                    width: 270,
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      marginLeft: 55,
                      position: "absolute",
                      color: "#D0FD3E",
                    }}
                  >
                    Right Bicep
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      position: "absolute",
                      marginLeft: 175,
                    }}
                  >
                    {rightBicep} in
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={openWaistDialog}>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#1C1C1E",
                    height: 30,
                    alignItems: "center",
                    marginBottom: 7,
                    width: 270,
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      marginLeft: 55,
                      position: "absolute",
                      color: "#D0FD3E",
                    }}
                  >
                    Waist
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      position: "absolute",
                      marginLeft: 175,
                    }}
                  >
                    {waist} in
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // flex: 2,
            height: 275,
            // backgroundColor:'red'
          }}
        >
          <TouchableOpacity
            onPress={gotoWorkoutplan}
            style={{
              width: 250,
              height: 80,
              marginBottom: 19,
              marginTop: 15,
            }}
          >
            <Image
              source={require("../../assets/workoutplanbtn.png")}
              resizeMode="cover"
              style={{ width: 250, height: 80, resizeMode: "contain" }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={gotoNutritionplan}
            style={{
              width: 250,
              height: 80,
              marginBottom: 19,
            }}
          >
            <Image
              source={require("../../assets/nutritionplan.png")}
              resizeMode="cover"
              style={{
                width: 250,
                height: 80,
                resizeMode: "contain",
                marginBottom: 19,
              }}
            />
          </TouchableOpacity>
        </View>

        <Modal isVisible={isHeightDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>Enter Height (cm)</Text>
            <TextInput
              style={styles.dialogInput}
              value={height}
              onChangeText={handleHeightChange}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeHeightDialog}
            >
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={isWeightDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>Enter Weight (kg)</Text>
            <TextInput
              style={styles.dialogInput}
              value={weight}
              onChangeText={handleWeightChange}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeWeightDialog}
            >
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={isNeckDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>Enter Neck Measurement (in)</Text>
            <TextInput
              style={styles.dialogInput}
              value={neck}
              onChangeText={handleNeckChange}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeNeckDialog}
            >
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={isShouldersDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>
              Enter Shoulders Measurement (in)
            </Text>
            <TextInput
              style={styles.dialogInput}
              value={shoulders}
              onChangeText={handleShouldersChange}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeShouldersDialog}
            >
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={isChestDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>Enter Chest Measurement (in)</Text>
            <TextInput
              style={styles.dialogInput}
              value={chest}
              onChangeText={handleChestChange}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeChestDialog}
            >
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={isLeftBicepDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>
              Enter Left Bicep Measurement (in)
            </Text>
            <TextInput
              style={styles.dialogInput}
              value={leftBicep}
              onChangeText={handleLeftBicepChange}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeLeftBicepDialog}
            >
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={isRightBicepDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>
              Enter Right Bicep Measurement (in)
            </Text>
            <TextInput
              style={styles.dialogInput}
              value={rightBicep}
              onChangeText={handleRightBicepChange}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeRightBicepDialog}
            >
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal isVisible={isWaistDialogVisible}>
          <View style={styles.dialogContainer}>
            <Text style={styles.dialogTitle}>Enter Waist Measurement (in)</Text>
            <TextInput
              style={styles.dialogInput}
              value={waist}
              onChangeText={handleWaistChange}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeWaistDialog}
            >
              <Text style={styles.dialogButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  dialogContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10, // Add border radius for a rounded appearance
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dialogInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  dialogButton: {
    backgroundColor: "#7deb34", // Background color of the OK button
    padding: 10,
    alignItems: "center",
    borderRadius: 10, // Add border radius for a rounded appearance
  },
  dialogButtonText: {
    color: "white", // Text color of the OK button
  },
});
