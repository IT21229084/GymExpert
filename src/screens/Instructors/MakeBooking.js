import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

const MakeBooking = () => {
  const route = useRoute();

  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  const availableTimes = [
    "9:00AM",
    "9:30AM",
    "10:00AM",
    "10:30AM",
    "12:00PM",
    "4:00PM",
    "5:00PM",
    "6:00PM",
  ];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
            marginRight: 120,
          }}
        >
          Make a Booking
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
        }}
      ></View>

      <ScrollView>
        <View
          style={{
            // backgroundColor: "red",
            height: 120,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 13,
          }}
        >
          {/* <Image
            style={{ width: 327, height: 96 }}
            source={require("../../../assets/Instructors/instructor.png")}
          /> */}

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
                  uri: route.params.imaurl,
                }}
              />
            </View>

            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 17, color: "white", marginTop: 13 }}>
                {route.params.name}
              </Text>
              <Text style={{ fontSize: 11, color: "white", marginTop: 4 }}>
                {route.params.category}
              </Text>
              <Text style={{ fontSize: 11, color: "#D0FD3E", marginTop: 10 }}>
                {route.params.expreiance} experience
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.calendarContainer}>
          <Calendar
            style={styles.calendar}
            onDayPress={handleDateSelect}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: "#D0FD3E" },
            }}
            hideExtraDays={true}
            theme={{
              calendarBackground: "#2C2C2E",
              selectedDayTextColor: "black",
              dayTextColor: "white",
              monthTextColor: "white",
              arrowColor: "yellow",
              arrowStyle: { height: 50 },
            }}
          />
        </View>

        <View style={styles.timeSlotsContainer}>
          <Text style={styles.timeSlotsTitle}>Available Time</Text>
          <FlatList
            horizontal
            data={availableTimes}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.timeSlot,
                  selectedTime === item ? styles.selectedTimeSlot : null,
                ]}
                onPress={() => handleTimeSelect(item)}
              >
                <Text
                  style={[
                    styles.timeSlotText,
                    selectedTime === item ? styles.selectedTimeSlotText : null,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.nextButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BookingSummary", {
                name: route.params.name,
                imaurl: route.params.imaurl,
                category: route.params.category,
                expreiance: route.params.expreiance,
                selectedTime: selectedTime,
                selectedDate: selectedDate,
              });
            }}
          >
            <Image
              style={styles.nextButton}
              source={require("../../../assets/appoinmentimages/nextbtn.png")}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default MakeBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  calendarContainer: {
    padding: 30,
  },
  calendar: {
    borderRadius: 20,
    width: "80%",
    alignSelf: "center",
    marginTop: 10,
  },
  timeSlotsContainer: {
    // backgroundColor: "orange",
    height: 100,
    marginHorizontal: 30,
  },
  timeSlotsTitle: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 5,
    color: "white",
  },
  timeSlot: {
    width: 100,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    margin: 10,
  },
  selectedTimeSlot: {
    borderColor: "#D0FD3E",
  },
  timeSlotText: {
    color: "white",
    fontSize: 15,
  },
  selectedTimeSlotText: {
    color: "#D0FD3E",
  },
  nextButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 100,
  },
  nextButton: {
    width: 143,
    height: 42,
    marginRight: 30,
  },
});
