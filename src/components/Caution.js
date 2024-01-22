import { View, Text } from "react-native";
import React from "react";

const Caution = () => {
  return (
    <View >
        <View style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "100%",
          marginBottom:12
        }}></View>


        <View style={{paddingHorizontal:30,marginLeft: 15}}>
        <Text style={{ color: "white", fontSize: 22, marginBottom: 8 }}>
        Caution
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: 12,
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
        </View>
     
    </View>
  );
};

export default Caution;
