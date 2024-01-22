import { View, Text, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { db, doc, updateDoc, deleteDoc } from "../../../firebase/index";

const InstructorsList = (props) => {
  const deleteInstructor = async () => {
    await deleteDoc(doc(db, "instructors", props.id));
    props.getInstructorsList();
    alert("Instructor deleted succussfully!");
  };

  return (
    <View>
      <View
        style={{
          width: 308,
          height: 132,
          backgroundColor: "#606062",
          borderRadius: 19,
          elevation: 10,
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.6)",
          marginBottom: 10,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 1 }}
        >
          <Text
            style={{
              color: "white",
              marginLeft: 20,
              marginTop: 5,
              fontSize: 15,
              marginRight: 175,
            }}
          >
            {props.tid}
          </Text>
          <Feather name="edit-2" size={15} color="white" />
          <MaterialIcons
            name="delete-outline"
            size={20}
            color="red"
            style={{ marginLeft: 10 }}
            onPress={deleteInstructor}
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: 13 }}>
          <View style={{ marginLeft: 15 }}>
            <Image
              style={{
                alignSelf: "center",
                width: 64,
                height: 64,
                // marginBottom:25,
                borderRadius: 100,
                // marginLeft:20
              }}
              source={{
                uri: props.imaurl,
              }}
            />
          </View>

          <View style={{ marginTop: 5, marginLeft: 15 }}>
            <Text style={{ color: "white", fontSize: 12 }}>
              Name : {props.name}
            </Text>
            <Text style={{ color: "white", fontSize: 12, marginTop: 4 }}>
              Expreiance : {props.expreiance}
            </Text>
            <Text style={{ color: "white", fontSize: 12, marginTop: 4 }}>
              Category : {props.category}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InstructorsList;
