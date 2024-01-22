import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 


const Exercise = (props) => {

    const navigation = useNavigation();











  return (
    <View>



<TouchableOpacity onPress={()=>{
navigation.navigate('Exworkout',{getWorkoutList:props.getWorkoutList,mainurl:props.mainurl,id:props.id,title:props.title,maindis:props.maindis,dis1:props.dis1,dis1url:props.dis1url,dis2:props.dis2,dis2url:props.dis2url,dis3:props.dis3,dis3url:props.dis3url});
}}>

<View style={{flexDirection:'row',marginTop:20}}>
    <Text style={{color:'white',fontSize:18,marginLeft:70,marginRight:190,marginBottom:20}}>{props.title}</Text>
    <MaterialIcons name="navigate-next" size={24} color="white" />
</View>


<View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "85%",
          marginBottom: 0,
          alignSelf:'center'
        }}
      ></View>


</TouchableOpacity>



    </View>
  )
}

export default Exercise