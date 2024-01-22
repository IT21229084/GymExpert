import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import { firebase_auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

function Headers(props) {
  const stack = props.stack;
  function gotoSignup() {
    stack.navigate("SignupScreen");
  }

  return (
    <View
      style={{ flexDirection: "row", alignItems: "flex-start", width: "50%" }}
    >
      <View style={{ height: 70, flex: 3, justifyContent: "center" }}>
        <View
          style={{
            position: "absolute",
            width: 50,
            backgroundColor: "#D0FD3E",
            height: 3,
            marginLeft: 38,
            top: 51,
          }}
        ></View>

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
      </View>

      <TouchableOpacity activeOpacity={0.7} onPress={gotoSignup}>
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
      </TouchableOpacity>
    </View>
  );
}

function LoginField() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = firebase_auth;

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("signin failed" + error.message);
    }
  };

  // const signUp = async () =>{
  //   try{
  //     const response = await createUserWithEmailAndPassword(auth,email,password);
  //     console.log(response);
  //     alert('check your emails');

  //   }catch(error){
  //     console.log(error);
  //     alert('signup failed' + error.message);

  //   }
  // }

  return (
    <View style={{ marginTop: 150 }}>
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
        <Text style={{ color: "white", fontSize: 17 }}>Username</Text>
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
          marginBottom: 35,
        }}
      >
        <Text style={{ color: "white", fontSize: 17 }}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={{ fontSize: 18, color: "white" }}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.line} />
      </View>

      <LoginButton signIn={signIn} email={email} password={password} />
    </View>
  );
}

function LoginButton(props) {
  const navigation = useNavigation();
  const username = props.email;
  const pass = props.password;
  const signing = props.signIn;

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebase_auth, (user) => {
      console.log("user", user);
      setUser(user);
      // if(user){
      //   navigation.navigate('UserMainTab')
      // }
    });
  }, []);

  // const stack=props.stack;
  function gotoHome() {
    const username = props.email;
    if (username == "admin@gmail.com") {
      navigation.navigate("AdminMainTab");
    } else if (username == "ins@gmail.com") {
      navigation.navigate("InastructorStack");
    } else {
      signing();
    }
  }

  return (
    <View>
      <TouchableOpacity activeOpacity={0.2} onPress={gotoHome}>
        {user
          ? navigation.navigate("MainScreen")
          : navigation.navigate("LoginScreen")}

        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Login</Text>
          <AntDesign name="caretright" size={18} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const LoginScreen = (props) => {
  const stack = props.navigation;

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#007AFF" // Set your desired background color
        barStyle="light-content" // Set the status bar content style (light or dark)
      />
      <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("../../assets/loginubadk.png")}
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
        WELCOME BACK
      </Text>
      {/* KeyboardAboidinView */}
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"never"}
        contentContainerStyle={null}
      >
        <LoginField />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "yellow",
  },
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
    marginRight: 17,
    marginLeft: 20,
    // fontWeight: "300",
  },
});
