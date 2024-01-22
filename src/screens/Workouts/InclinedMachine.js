import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Benifits from "../../components/Benifits";
import Steps from "../../components/Steps";
import Caution from "../../components/Caution";

const InclinedMachine = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState("Benefits");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    if (selectedTab === "Benefits") {
      return <Benifits />;
    } else if (selectedTab === "Steps") {
      return <Steps />;
    } else if (selectedTab === "Cautions") {
      return <Caution />;
    }
  };

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
            marginRight: 70,
          }}
        >
          Inclined Machine Press
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
        <View style={{ width: "100%" }}>
          <Image
            source={require("../../../assets/Workoutsimages/inclined.png")}
            style={{ height: 273, width: 414 }}
            resizeMode="cover"
          />
        </View>

        <View style={{ padding: 30, marginLeft: 15 }}>
          <Text style={{ color: "white", fontSize: 22 }}>
            Inclined Machine Press
          </Text>
          <Text
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: 14,
              marginTop: 12,
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            marginBottom: 20,
            paddingHorizontal: 30,
          }}
        >
          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "Benefits" && styles.selectedTab,
            ]}
            onPress={() => handleTabChange("Benefits")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "Benefits" && styles.selectedTabText,
              ]}
            >
              Benefits
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "Steps" && styles.selectedTab,
            ]}
            onPress={() => handleTabChange("Steps")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "Steps" && styles.selectedTabText,
              ]}
            >
              Steps
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabButton,
              selectedTab === "Cautions" && styles.selectedTab,
            ]}
            onPress={() => handleTabChange("Cautions")}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === "Cautions" && styles.selectedTabText,
              ]}
            >
              Caution
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingHorizontal: 0, marginTop: 10 }}>
          {renderContent()}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
  tabButton: {
    // flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1C1C1E",
    borderRadius: 20,
    width: 100,
    borderWidth: 1.5,
    borderColor: "#D0FD3E",
  },
  selectedTab: {
    backgroundColor: "rgba(208, 253, 62, 0.7)",
  },
  tabText: {
    color: "white",
    fontSize: 17,
  },
  selectedTabText: {
    color: "black",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default InclinedMachine;
