import { View, Text ,StyleSheet,FlatList,TouchableOpacity,Image,TextInput,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Exercise from './Components/Exercise';
import Modal from "react-native-modal";
// import { ScrollView } from 'react-native-gesture-handler';


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


const Instrucor = () => {

  const [isHeightDialogVisible, setHeightDialogVisible] = useState(false);
  const [height, setHeight] = useState("");
  const [mainurl, setmainurl] = useState("");
  const [dis3Url, setdis3Url] = useState("");
  const [dis3, setDis3] = useState("");
  const [dis2url, setDis2url] = useState("");
  const [dis2, setDis2] = useState("");
  const [dis1url, setDis1url] = useState("");
  const [dis1, setDis1] = useState("");
  const [mainDiscr, setMainDiscr] = useState("");
  const [title, setTitle] = useState("");
  const [press, setPress] = useState(false);
  const [workoutList, setworkoutList] = useState([]);







  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };
  const handleMainUrlChange = (newHeight) => {
    setmainurl(newHeight);
  };
  const handleDis3urlChange = (newHeight) => {
    setdis3Url(newHeight);
  };
  const handleDis3Change = (newHeight) => {
    setDis3(newHeight);
  };
  const handleDis2urlChange = (newHeight) => {
    setDis2url(newHeight);
  };
  const handleDis2Change = (newHeight) => {
    setDis2(newHeight);
  };
  const handleDis1urlChange = (newHeight) => {
    setDis1url(newHeight);
  };
  const handleDis1Change = (newHeight) => {
    setDis1(newHeight);
  };
  const handleMaindisChange = (newHeight) => {
    setMainDiscr(newHeight);
  };
  const handleTitleChange = (newHeight) => {
    setTitle(newHeight);
  };








  const openHeightDialog = () => {
    setHeightDialogVisible(true);
  };

  const closeHeightDialog = () => {
    setHeightDialogVisible(false);
    addNewExercise();
  };


  const addNewExercise = async () => {
    try {
      const docRef = await addDoc(collection(db, "workouts"), {
        title: title,
        maindis: mainDiscr,
        dis1:dis1,
        dis1url:dis1url,
        dis2:dis2,
        dis2url:dis2url,
        dis3:dis3,
        dis3url:dis3Url,
        mainurl:mainurl
      });
      console.log("Document written with ID: ", docRef.id);
      // setTitle("");
      setTitle('');
      setMainDiscr('');
      setDis1('');
      setDis1url('')
      setDis2('')
      setDis2url('')
      setDis3('')
      setdis3Url('')
      setmainurl('')
      alert('New workout added!')

    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // getShoppingList();
  };


  const getWorkoutList = async () => {
    const querySnapshot = await getDocs(collection(db, "workouts"));
    // querySnapshot.forEach((doc) => {
    //   // console.log(doc.id, doc.data());
    //   setShoppingList({
    //     ...doc.data(),
    //     id: doc.id,
    //   });
    // });
    setworkoutList(
      querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };


  const data = workoutList;
console.log('workouts',data);


      useEffect(() => {
        getWorkoutList();
        
      }, [press]);






  
  return (
    <View style={styles.container}>


<View style={{width:'100%',height:50,flexDirection:'row',alignItems:'flex-end',marginBottom:22}}>
    <MaterialCommunityIcons name="dumbbell" size={28} color="white" style={{marginLeft:60,marginRight:10}}/>
    <FontAwesome5 name="grip-lines-vertical" size={28} color="white" style={{}} />
    <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginBottom:2,marginLeft:4}}>Workout Management</Text>
    </View>

    <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          height: 1,
          width: "100%",
          marginBottom: 25,
        }}
      ></View>




<View style={{width:'100%'}}>

<TouchableOpacity style={{width:'100%',height:400,position:"absolute",marginTop:150,backgroundColor:'#1C1C1E'}}
onPress={() => setPress(!press)}
>
  <View ></View>
  </TouchableOpacity>

{/* <Exercise/> */}



 <FlatList
        data={data}
        renderItem={({ item }) => (
          <Exercise
          id={item.id}
          title={item.title}
          maindis={item.maindis}
          mainurl={item.mainurl}
          dis1={item.dis1}
          dis1url={item.dis1url}
          dis2={item.dis2}
          dis2url={item.dis2url}
          dis3={item.dis3}
          dis3url={item.dis3url}
          getWorkoutList={getWorkoutList}
          />
        )}
        keyExtractor={(item) => item.id}
      /> 









<TouchableOpacity style={{position:'absolute',marginTop:480,marginLeft:240}}
onPress={openHeightDialog}
>

<Image style={{width:132,height:30,}} source={require('../Instuctor/insassets/insbtn.png')}/>


</TouchableOpacity>











</View>



<Modal isVisible={isHeightDialogVisible}>
          <View style={styles.dialogContainer}>


<ScrollView>





            <Text style={styles.dialogTitle}>Add New Workout</Text>





       



        <Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Title</Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor:'gray',
                color:'#D0FD3E',
                marginHorizontal:25}}
              value={title}
              onChangeText={handleTitleChange}
            //   keyboardType="numeric"
            />

<Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Main Image Url</Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor:'gray',
                color:'#D0FD3E',
                marginHorizontal:25}}
              value={mainurl}
              onChangeText={handleMainUrlChange}
            //   keyboardType="numeric"
            />













        <Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Main Description</Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor:'gray',
                color:'#D0FD3E',
                marginHorizontal:25}}
              value={mainDiscr}
              multiline={true}
              onChangeText={handleMaindisChange}
            //   keyboardType="numeric"
            />



        <Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Description 01</Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor:'gray',
                color:'#D0FD3E',
                marginHorizontal:25}}
              value={dis1}
              multiline={true}
              onChangeText={handleDis1Change}

            //   keyboardType="numeric"
            />
        <Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Description 01 Image Url</Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor:'gray',
                color:'#D0FD3E',
                marginHorizontal:25}}
              value={dis1url}
              onChangeText={handleDis1urlChange}
            //   keyboardType="numeric"
            />
        <Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Description 02</Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                color:'#D0FD3E',
                marginBottom: 0,
                borderBottomColor:'gray',
                marginHorizontal:25}}
                multiline={true}
              value={dis2}
              onChangeText={handleDis2Change}
            //   keyboardType="numeric"
            />
        <Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Description 02 Image Url</Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                color:'#D0FD3E',
                marginBottom: 0,
                borderBottomColor:'gray',
                marginHorizontal:25}}
              value={dis2url}
              onChangeText={handleDis2urlChange}
            //   keyboardType="numeric"
            />
       
        <Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Description 03 </Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                marginBottom: 0,
                borderBottomColor:'gray',
                color:'#D0FD3E',
                marginHorizontal:25}}
                multiline={true}
              value={dis3}
              onChangeText={handleDis3Change}
            //   keyboardType="numeric"
            />
        <Text style={{fontSize:11,color:'white',marginTop:15,marginLeft:25}}>Description 03 Image Url</Text>
            <TextInput
              style={{ borderBottomWidth: 1,
                color:'#D0FD3E',
                marginBottom: 0,
                borderBottomColor:'gray',
                marginHorizontal:25}}
              value={dis3Url}
              onChangeText={handleDis3urlChange}
            //   keyboardType="numeric"
            />
       















            <TouchableOpacity
              style={styles.dialogButton}
              onPress={closeHeightDialog}
            >
              <Text style={styles.dialogButtonText}>Save</Text>
            </TouchableOpacity>

            </ScrollView>
          </View>
        </Modal>









    </View>
  )
}

export default Instrucor


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
    // padding:40
  },
  dialogContainer: {
    backgroundColor: "#606062",
    padding: 10,
    borderRadius: 30, // Add border radius for a rounded appearance
  },

 dialogTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 0,
    alignSelf:'center',
    color:'white',
    marginTop:10
  },

 dialogInput: {
    borderBottomWidth: 1,
    marginBottom: 10,
    borderBottomColor:'gray',
    marginHorizontal:25
  },

 dialogButton: {
    backgroundColor: "#D0FD3E", // Background color of the OK button
    // padding: 10,
    alignItems: "center",
    borderRadius: 10, // Add border radius for a rounded appearance
    width:83,
    height:30,
    borderRadius:50,
    alignSelf:'center',
    elevation:10,
    marginTop:15,
    marginBottom:10
  },

 dialogButtonText: {
    color: "black", // Text color of the OK button
    marginTop:5
  },
});