import { View, Text ,Image,ScrollView} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
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

const NutPlan = (props) => {

    const deleteWorkoutImage = async () => {
        await deleteDoc(doc(db, "nutritionplan", props.id));
        props.getNutritionPlan();
        props.GotoBack();
      };





  return (
    <View>

   



       <Image
      style={{
        alignSelf: "center",
        width: 380,
        height: 580,
        marginBottom:60
      }}
      source={{
        uri: props.nutritionPlanImgUrl,
      }}
    />

<AntDesign style={{position:"absolute",marginTop:15,marginLeft:355 }} name="delete" size={30} color="white" onPress={deleteWorkoutImage} />








    
    

    
    
    
    </View>
  )
}

export default NutPlan