import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
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
  updateDoc,
} from "../../../firebase/index";
import { where } from "firebase/firestore";
// import { ScrollView } from "react-native-gesture-handler";
import { Toast } from "react-native-toast-message";
import { useRoute } from "@react-navigation/native";

const EditProfile = () => {
  const route = useRoute();
  const useData = route.params.extractedObject;

  // const getUserDetails = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"), where("userName", "==", profilename));

  //   // querySnapshot.forEach((doc) => {
  //   //   // console.log(doc.id, doc.data());
  //   //   setShoppingList({
  //   //     ...doc.data(),
  //   //     id: doc.id,
  //   //   });
  //   // });
  //   setuserDetails(
  //     querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //   );
  //   console.log(userDetails);
  // };

  // const getUserDetails = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"), where("userName", "==", profilename));
  //   const userData = querySnapshot.docs[0] ? { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id } : null;
  //   setuserDetails(userData);
  //   console.log(userData);

  // };

  const navigation = useNavigation();
  // const [userDetails, setuserDetails] = useState('');
  const [userFullName, setuserFullName] = useState(useData.fullName);
  const [userPhoneNo, setuserPhoneNo] = useState(useData.phoneNo);
  // const [userEmail, setuserEmail] = useState( '');

  // const fullName = userDetails.fullName;
  // const phoneNo = userDetails.phoneNo;
  // const Email = userDetails.userEmail;
  // const id =  userDetails.id;

  // getUserDetails();

  const updateUserProfile = async () => {
    const shoppingRef = doc(db, "users", useData.id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(shoppingRef, {
      fullName: userFullName,
      phoneNo: userPhoneNo,
      // userEmail:userEmail
    });
  };

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
            marginRight: 175,
          }}
        >
          Edit Profile
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
        }}
      ></View>

      <ScrollView>
        <View
          style={{
            // flex: 1.5,
            height: 150,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 18,
            // backgroundColor: "red",
          }}
        >
          <FontAwesome name="user-circle-o" size={90} color="white" />
          {/* <Text
            style={{
              color: "white",
              fontSize: 15,
              marginTop: 16,
              fontWeight: "400",
            }}
          >
            ANJALEE PERERA
          </Text> */}
        </View>

        <TouchableOpacity
          style={{ position: "absolute", marginLeft: 220, marginTop: 85 }}
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate("AddProfilePic");
          }}
        >
          <Image
            style={{ height: 46, width: 46 }}
            source={require("../../../assets/profileimgages/camera.png")}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={{}}>
          <View>
            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 1,
                width: "85%",
                marginTop: 0,
                alignSelf: "center",
              }}
            ></View>

            <Text
              style={{
                marginLeft: 45,
                fontSize: 11,
                marginVertical: 4,
                color: "#D0FD3E",
                marginTop: 15,
              }}
            >
              Name
            </Text>
            {/* <Text style={{marginLeft:45,fontSize:17,marginVertical:4, color: "white" }}>Anjalee Perera</Text> */}
            <TextInput
              placeholder="Enter your name"
              placeholderTextColor={"gray"}
              style={{ marginLeft: 45, fontSize: 17, color: "white" }}
              value={userFullName}
              onChangeText={(text) => setuserFullName(text)}
            />

            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 1,
                width: "85%",
                marginTop: 15,
                alignSelf: "center",
              }}
            ></View>
          </View>

          <View>
            {/* <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: 1,
              width: "85%",
              marginTop: 0,
              alignSelf:"center"
            }}
          ></View> */}

            <Text
              style={{
                marginLeft: 45,
                fontSize: 11,
                marginVertical: 4,
                color: "#D0FD3E",
                marginTop: 15,
              }}
            >
              Email
            </Text>
            <Text
              style={{
                marginLeft: 45,
                fontSize: 17,
                marginVertical: 4,
                color: "white",
              }}
            >
              {useData.userEmail}
            </Text>
            {/* <TextInput
        placeholder="Enter your email"
        placeholderTextColor={'gray'}
        style={{marginLeft:45,color:'white',fontSize:17}}
        value={Email}
        onChangeText={(text) => setuserEmail(text)}
      
      /> */}

            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 1,
                width: "85%",
                marginTop: 15,
                alignSelf: "center",
              }}
            ></View>
          </View>

          <View>
            {/* <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: 1,
              width: "85%",
              marginTop: 0,
              alignSelf:"center"
            }}
          ></View> */}

            <Text
              style={{
                marginLeft: 45,
                fontSize: 11,
                marginVertical: 4,
                color: "#D0FD3E",
                marginTop: 15,
              }}
            >
              Phone Number
            </Text>
            {/* <Text style={{marginLeft:45,fontSize:17,marginVertical:4, color: "white" }}>+94123456789</Text> */}
            <TextInput
              placeholder="Enter your phoneNo"
              placeholderTextColor="gray"
              style={{ marginLeft: 45, color: "white", fontSize: 17 }}
              value={userPhoneNo} // Set the value to the state variable
              editable={true}
              onChangeText={(text) => setuserPhoneNo(text)} // Handle changes
            />

            <View
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                height: 1,
                width: "85%",
                marginTop: 15,
                alignSelf: "center",
              }}
            ></View>
          </View>
        </View>

        <View
          style={{
            // backgroundColor: "green",
            // flex: 0.8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              updateUserProfile();

              navigation.navigate("Profile");
            }}
          >
            <Image
              style={{ width: 263, height: 50 }}
              source={require("../../../assets/profileimgages/savebtn.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
