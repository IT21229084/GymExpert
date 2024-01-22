import { View, Text, Image } from "react-native";
import React from "react";

const Steps = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "100%",
        }}
      ></View>

      <View style={{ padding: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <View>
            <Image
              style={{ width: 186, height: 146 }}
              source={require("../../assets/Workoutsimages/step1.png")}
            />
          </View>
          <View style={{ alignItems: "flex-start", marginLeft: 9 }}>
            <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
              Step 1
            </Text>
            <Text style={{ color: "white", marginRight: 180, fontSize: 12 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "90%",
        //   marginLeft:10,
          alignSelf:"center"
          
        }}
      ></View>
      <View style={{ padding: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <View>
            <Image
              style={{ width: 186, height: 146 }}
              source={require("../../assets/Workoutsimages/step2.png")}
            />
          </View>
          <View style={{ alignItems: "flex-start", marginLeft: 9 }}>
            <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
              Step 2
            </Text>
            <Text style={{ color: "white", marginRight: 180, fontSize: 12 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "90%",
        //   marginLeft:10,
          alignSelf:"center"
          
        }}
      ></View>
      <View style={{ padding: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <View>
            <Image
              style={{ width: 186, height: 146 }}
              source={require("../../assets/Workoutsimages/step3.png")}
            />
          </View>
          <View style={{ alignItems: "flex-start", marginLeft: 9 }}>
            <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
              Step 3
            </Text>
            <Text style={{ color: "white", marginRight: 180, fontSize: 12 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "90%",
        //   marginLeft:10,
          alignSelf:"center"
          
        }}
      ></View>

      
    </View>
  );
};

export default Steps;
