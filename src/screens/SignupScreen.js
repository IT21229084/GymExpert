import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

function Headers(props) {
  const stack = props.stack;
  function gotoLogin() {
    stack.navigate("LoginScreen");
  }

  return (
    <View
      style={{ flexDirection: "row", alignItems: "flex-start", width: "50%" }}
    >
      <View style={{ height: 70, flex: 3, justifyContent: "center" }}>
        <View
          style={{
            position: "absolute",
            width: 59,
            backgroundColor: "#D0FD3E",
            height: 3,
            marginLeft: 117,
            top: 51,
          }}
        ></View>

        <TouchableOpacity activeOpacity={0.7} onPress={gotoLogin}>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              marginLeft: 40,
              fontWeight: "500",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 70, flex: 3, justifyContent: "center" }}>
        <Text
          style={{
            fontSize: 18,
            color: "white",
            marginLeft: 13,
            fontWeight: "500",
          }}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
}

function LoginField() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase_auth;
  // const [userName, setuserName] = useState("");

  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        fullName: "",
        userEmail: email,
        phoneNo: "",
        userName: profilename,
        userImage: null,
      });
      console.log("Document written with ID: ", docRef.id);
      // setTitle("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("check your emails");
      addUser();
    } catch (error) {
      console.log(error);
      alert("signup failed" + error.message);
    }
  };

  // + error.message

  // const handleSignUp = () =>{
  //   auth
  //   .createUserWithEmailAndPassword(email,password)
  //   .then((userCredentials) =>{
  //     const user = userCredentials.user;
  //     console.log(user.email);
  //   })
  //   .catch(error=>alert(error.message))
  // }

  return (
    <View style={{ marginTop: 100 }}>
      <View
        style={{
          // backgroundColor: "white",
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Email</Text>
        <TextInput
          style={{ fontSize: 18, color: "white" }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.line} />
      </View>
      <View
        style={{
          // backgroundColor: "white",
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          justifyContent: "center",
          paddingLeft: 20,
          marginBottom: 27,
        }}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Password</Text>
        <TextInput
          style={{ fontSize: 18, color: "white" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.line} />
      </View>
      {/* <View
        style={{
          // backgroundColor: "white",
          borderRadius: 20,
          height: 70,
          marginHorizontal: 30,
          justifyContent: "center",
          paddingLeft: 20,
          marginBottom: 27,
        }}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Password again</Text>
        <TextInput style={{ fontSize: 18, color: "white" }} />
        <View style={styles.line} />
      </View> */}

      {/* <LoginButton /> */}

      <LoginButton signUp={signUp} />
    </View>
  );
}

function LoginButton(props) {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.3} onPress={props.signUp}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign up</Text>
          <AntDesign name="caretright" size={18} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const SignupScreen = (props) => {
  const stack = props.navigation;
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("../../assets/signupbg.png")}
        resizeMode="cover"
      />

      <Headers stack={stack} />
      <Text
        style={{
          color: "#FFFFFF",
          fontWeight: "800",
          fontSize: 40,
          marginTop: 130,
          alignSelf: "center",
        }}
      >
        WELCOME
      </Text>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"never"}
        contentContainerStyle={null}
      >
        <LoginField />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  line: {
    // flex: 1,
    height: 0.3,
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D0FD3E",
    borderRadius: 8,
    padding: 10,
    width: 120,
    height: 50,
    borderRadius: 100,
    marginBottom: 38,
  },
  buttonText: {
    color: "#000000",
    fontWeight: "normal",
    fontSize: 17,
    marginRight: 8,
    marginLeft: 10,
    // fontWeight: "300",
  },
});
