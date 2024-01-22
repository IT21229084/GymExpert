import { View, Text,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";


const TrendingPlan = (props) => {

    const navigation = useNavigation();

const title = props.title;
const mainuri =props.mainurl;


  return (
    <View>
      {/* <Text style={{color:'white',fontSize:20}}>TrendingPlan ishfiajojojfoj dkfholahf dfjlfjdfj</Text> */}


    <TouchableOpacity onPress = {()=>{
navigation.navigate('TrendingPlanView',{title:title,mainurl:mainuri,maindis:props.maindis,dis1url:props.dis1url,dis1:props.dis1,dis2url:props.dis2url,dis2:props.dis2,dis3url:props.dis3url,dis3:props.dis3,id:props.id});
}
}>

    <Image
      style={{
        alignSelf: "center",
        width: 336,
        height: 107,
        marginBottom:30,
        borderRadius:20
      }}
      source={{
        uri:props.mainurl
      }}
    />

      <Text style={{color:'rgba(255, 255, 255, 0.9)',fontSize:20,fontWeight:'normal',position:"absolute",marginLeft:60,marginTop:50}}>{props.title}</Text>




    </TouchableOpacity>













    </View>
  )
}

export default TrendingPlan