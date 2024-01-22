import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    app,
    db,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
  } from "../../firebase/index";

const NotificationList = (props) => {


    const rrrrrr = new Date();
    const currentHours = rrrrrr.getHours();
    const currentMinutes = rrrrrr.getMinutes();
    const currentSeconds = rrrrrr.getSeconds();
    const amOrPm = currentHours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    const formattedHours = currentHours % 12 || 12;
    
    const currentTime = `${formattedHours}:${currentMinutes} ${amOrPm}`;

    const deleteNotification = async () => {
        await deleteDoc(doc(db, "notification", props.id));
        // props.getNutritionPlan();
        // props.GotoBack();
      };



  return (
    <View style={{marginHorizontal:24,}}>

        <View style={{flexDirection:'row'}}>
        <View style={{width:250,flex:3}}>

            <Text style={{fontSize:15,color:'white',marginBottom:4,fontWeight:'700'}}>{props.title}</Text>
            <Text style={{fontSize:15,color:'rgba(255, 255, 255, 0.7)',fontWeight:'normal',lineHeight: 24}}>{props.discription}</Text>


        </View>
        <View style={{}}>

            <Text style={{color:'white',fontSize:15}}>{currentTime}</Text>


            <TouchableOpacity onPress={deleteNotification}>
            <MaterialIcons name="delete" size={24} color="white" style={{alignSelf:'center',marginTop:17}} />
            </TouchableOpacity>
        </View>
        </View>


        <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "98%",
          marginTop:20,
          marginBottom:25,
          alignSelf:'center'
        }}
      ></View>

      








    </View>
  )
}

export default NotificationList