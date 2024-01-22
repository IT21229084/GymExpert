import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
//   import { MaterialIcons } from '@expo/vector-icons';

const InstructorsList = (props) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={{ alignSelf: "center", marginBottom: 15 }}
        onPress={() => {
          navigation.navigate("BookingInstructor", {
            name: props.name,
            imaurl: props.imaurl,
            expreiance: props.expreiance,
            id: props.id,
            description: props.description,
            category: props.category,
          });
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#2C2C2E",
            width: 327,
            height: 96,
            borderRadius: 16,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 96,
              marginLeft: 15,
            }}
          >
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

          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 17, color: "white", marginTop: 13 }}>
              {props.name}
            </Text>
            <Text style={{ fontSize: 11, color: "white", marginTop: 4 }}>
              {props.category}
            </Text>
            <Text style={{ fontSize: 11, color: "#D0FD3E", marginTop: 10 }}>
              {props.expreiance}
            </Text>
          </View>

          <MaterialIcons
            name="navigate-next"
            size={30}
            color="white"
            style={{ marginTop: 32, marginLeft: 70 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InstructorsList;
