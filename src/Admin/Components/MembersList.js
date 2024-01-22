import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { db, doc, updateDoc, deleteDoc } from "../../../firebase/index";

const MembersList = (props) => {
  const deleteMember = async () => {
    await deleteDoc(doc(db, "membership", props.id));
    props.getMemberList();
    alert("Member deleted succussfully!");
  };

  return (
    <View>
      <View
        style={{
          width: 308,
          height: 95,
          backgroundColor: "#606062",
          borderRadius: 19,
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.6)",
          marginBottom: 14,
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
            {props.mid}
          </Text>
          <Feather name="edit-2" size={15} color="white" />
          <MaterialIcons
            name="delete-outline"
            size={20}
            color="red"
            style={{ marginLeft: 10 }}
            onPress={deleteMember}
          />
        </View>

        <View>
          <Text
            style={{
              color: "white",
              fontSize: 11,
              marginLeft: 28,
              marginTop: 4,
            }}
          >
            Name : {props.name}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 11,
              marginLeft: 28,
              marginTop: 3,
            }}
          >
            Contact Number : {props.contactNo}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 11,
              marginLeft: 28,
              marginTop: 3,
            }}
          >
            Email : {props.email}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MembersList;
