import { View, Text, StyleSheet, TouchableOpacity,Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const WorkoutlogList = (props) => {
//   const data = props.nirmalaData;
const navigation = useNavigation();
const date = props.date;
const ex1Data
= props.ex1Data
;
const selectedExer1 = props.selectedExer1;
const workoutPlanNo = props.workoutPlanNo;

  return (
    <View>


<TouchableOpacity onPress = {()=>{
navigation.navigate('WorkoutsLogView',{date:date,workoutPlanNo:workoutPlanNo,selectedExer1:selectedExer1,ex1Data:ex1Data,selectedExer2:props.selectedExer2,ex2Data:props.ex2Data,note:props.note,notex:props.notex});
}
} >
 <View
   style={{
     width: "80%",
     height: 130,
     backgroundColor: "#2C2C2E",
     borderRadius: 20,
     alignSelf: "center",
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center",
     marginBottom:20,elevation:15
   }}
 >
   <View
     style={{
       width: 220,
       height: 110,
    //    backgroundColor: "red",
       marginRight: 11,
     }}
   >
     <View style={{ flexDirection: "row" }}>
       <Text style={{ fontSize: 22, color: "white", marginTop: 0 }}>
         {date}
       </Text>
       <View
         style={{
           width: 25,
           height: 18,
           backgroundColor: "#D0FD3E",
           justifyContent: "center",
           alignItems: "center",
           marginLeft: 35,
           borderRadius: 5,
          marginTop: 6,
         }}
       >
         <Text>{workoutPlanNo}</Text>
       </View>
     </View>
     <Text style={{ fontSize: 12, color: "white", marginTop: 5 }}>
       Completed Exercises
     </Text>

<View style={{flexDirection:"row"}}>
<Text style={{ fontSize: 10, color: "#D0FD3E", marginTop: 5,marginRight:3 }}>
       {selectedExer1}              {props.selectedExer2}
     </Text>
{/* <Text style={{ fontSize: 10, color: "#D0FD3E", marginTop: 5 }}>
       {props.ex2}
     </Text> */}
</View>





     
   </View>
   <View
     style={{
       width: 50,
       height: 110,
    //    backgroundColor: "blue",
       justifyContent: "center",
       alignItems: "flex-end",
     }}
   >
     <MaterialIcons name="navigate-next" size={30} color="white" />
   </View>
 </View>
</TouchableOpacity>





     









    </View>
  );
};

export default WorkoutlogList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
