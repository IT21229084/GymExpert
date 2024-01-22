import { View, Text, Image, VirtualizedList } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { db, doc, updateDoc, deleteDoc } from "../../../firebase/index";

const NotiList = (props) => {
  const deleteNotification = async () => {
    await deleteDoc(doc(db, "notification", props.id));
    props.getNotificationList();
    alert("Notification deleted succussfully!");
  };

  return (
    <View>
      <View
        style={{
          width: 322,
          height: 145,
          backgroundColor: "#606062",
          borderRadius: 19,
          elevation: 10,
          alignSelf: "center",
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.6)",
          marginBottom: 13,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          {/* <Text
            style={{
              color: "white",
              marginLeft: 20,
              marginTop: 5,
              fontSize: 15,
              marginRight: 175,
            }}
          >
            T001
          </Text> */}
          <Feather
            name="edit-2"
            size={15}
            color="white"
            style={{ marginLeft: 235 }}
          />
          <MaterialIcons
            name="delete-outline"
            size={20}
            color="red"
            style={{ marginLeft: 10 }}
            onPress={deleteNotification}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 13,
              color: "white",
              marginLeft: 18,
              marginTop: 3,
            }}
          >
            Title : {props.title}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "white",
              marginLeft: 18,
              marginTop: 4,
            }}
          >
            Content :
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "white",
              marginLeft: 18,
              marginTop: 4,
            }}
          >
            {props.discription}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotiList;
