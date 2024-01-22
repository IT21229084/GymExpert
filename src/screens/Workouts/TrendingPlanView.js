import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
// import { ScrollView } from 'react-native-gesture-handler';

const TrendingPlanView = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
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
            marginRight: 150,
          }}
        >
          Plan Overview
        </Text>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            navigation.navigate("ProfileStack");
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
          marginBottom: 25,
        }}
      ></View>

      <ScrollView>
        <View>
          <Image
            style={{
              alignSelf: "center",
              width: 341,
              height: 162,
              marginBottom: 25,
              borderRadius: 20,
            }}
            source={{
              uri: route.params.mainurl,
            }}
          />

          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              height: 1,
              width: "100%",
              //   marginBottom: 10,
            }}
          ></View>
        </View>

        <View style={{ marginTop: 15, marginBottom: 20 }}>
          <Text
            style={{
              marginRight: 20,
              marginLeft: 35,
              color: "white",
              fontSize: 20,
              marginBottom: 4,
            }}
          >
            {route.params.title}
          </Text>
          <Text
            style={{
              marginRight: 20,
              marginLeft: 35,
              color: "white",
              fontSize: 12,
              lineHeight: 17,
            }}
          >
            {route.params.maindis}
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              alignSelf: "center",
              width: 186,
              height: 125,
              marginBottom: 25,
              borderRadius: 20,
              marginLeft: 20,
            }}
            source={{
              uri: route.params.dis1url,
            }}
          />
          <View style={{ marginLeft: 13, marginRight: 160, width: 190 }}>
            <Text style={{ color: "white", marginTop: 6, lineHeight: 17 }}>
              {route.params.dis1}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            height: 1,
            width: "85%",
            marginBottom: 25,
            alignSelf: "center",
          }}
        ></View>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              alignSelf: "center",
              width: 186,
              height: 125,
              marginBottom: 25,
              borderRadius: 20,
              marginLeft: 20,
            }}
            source={{
              uri: route.params.dis2url,
            }}
          />
          <View style={{ marginLeft: 13, marginRight: 160, width: 190 }}>
            <Text style={{ color: "white", marginTop: 6, lineHeight: 17 }}>
              {route.params.dis2}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            height: 1,
            width: "85%",
            marginBottom: 25,
            alignSelf: "center",
          }}
        ></View>

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              alignSelf: "center",
              width: 186,
              height: 125,
              marginBottom: 25,
              borderRadius: 20,
              marginLeft: 20,
            }}
            source={{
              uri: route.params.dis3url,
            }}
          />
          <View style={{ marginLeft: 13, marginRight: 160, width: 190 }}>
            <Text style={{ color: "white", marginTop: 6, lineHeight: 17 }}>
              {route.params.dis3}
            </Text>
          </View>
        </View>

        {/* <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "85%",
          marginBottom:25,
          alignSelf:'center',
         

        }}
      ></View>






<View style={{flexDirection:'row'}}>
<Image
      style={{
        alignSelf: "center",
        width: 186,
        height: 125,
        marginBottom:25,
        borderRadius:20,
        marginLeft:20
      }}
      source={{
        uri:"https://images.unsplash.com/photo-1698267703889-06c41f9acba5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
      }}
    />
        <View style={{marginLeft:13,marginRight:160,width:190}}>
      <Text style={{color:'white',marginTop:6,lineHeight:17}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
      </View>

</View>


<View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "85%",
          marginBottom:25,
          alignSelf:'center',
         

        }}
      ></View>








<View style={{flexDirection:'row'}}>
<Image
      style={{
        alignSelf: "center",
        width: 186,
        height: 125,
        marginBottom:25,
        borderRadius:20,
        marginLeft:20
      }}
      source={{
        uri:"https://images.unsplash.com/photo-1698267703889-06c41f9acba5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
      }}
    />
        <View style={{marginLeft:13,marginRight:160,width:190}}>
      <Text style={{color:'white',marginTop:6,lineHeight:17}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
      </View>

</View>


<View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "85%",
          marginBottom:25,
          alignSelf:'center',
         

        }}
      ></View>









<View style={{flexDirection:'row'}}>
<Image
      style={{
        alignSelf: "center",
        width: 186,
        height: 125,
        marginBottom:25,
        borderRadius:20,
        marginLeft:20
      }}
      source={{
        uri:"https://images.unsplash.com/photo-1698267703889-06c41f9acba5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D",
      }}
    />
        <View style={{marginLeft:13,marginRight:160,width:190}}>
      <Text style={{color:'white',marginTop:6,lineHeight:17}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
      </View>

</View>



 */}
      </ScrollView>
    </View>
  );
};

export default TrendingPlanView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:10
  },
});
