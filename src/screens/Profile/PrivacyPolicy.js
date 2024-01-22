import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          //   justifyContent: "space-between",
          // backgroundColor: "orange",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
          // flex: 0.8,
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
            marginRight: 140,
          }}
        >
          Privacy Policy
        </Text>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => {
            navigation.navigate("Profile");
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
        <View style={{ padding: 30 }}>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Lorem ipsum dolor sit amet
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 13,
              fontWeight: "normal",
              textAlign: "justify",
            }}
          >
            Consectetur adipiscing elit. Natoque phasellus lobortis mattis
            cursus faucibus hac proin risus. Turpis phasellus massa ullamcorper
            volutpat. Ornare commodo non integer fermentum nisi, morbi id. Vel
            tortor mauris feugiat amet, maecenas facilisis risus, in faucibus.
            Vestibulum ullamcorper fames eget enim diam fames faucibus duis ac.
            Aliquam non tellus semper in dignissim nascetur venenatis lacus.
            Lectus vel non varius interdum vel tellus sed mattis. Sit laoreet
            auctor arcu mauris tincidunt sociis tristique pharetra neque.
            {"\n\n"}
            Aliquam pharetra elementum nisl sapien. Erat nisl morbi eu dolor in.
            Sapien ut lacus dui libero morbi tristique. Sit praesent mi, dolor,
            magna in pellentesque sollicitudin odio sed. Sit nibh aliquam enim
            ipsum lectus sem fermentum congue velit. Purus habitant odio in
            morbi aliquet velit pulvinar. Facilisis ut amet interdum pretium.
            Fames pretium eget orci facilisis mattis est libero facilisis
            ullamcorper. Est auctor amet egestas risus libero et. Auctor
            faucibus sit id fringilla vitae. Ac volutpat sodales tristique ut
            netus turpis. Consectetur adipiscing elit. Natoque phasellus
            lobortis mattis cursus faucibus hac proin risus. {"\n\n"}Turpis
            phasellus massa ullamcorper volutpat. Ornare commodo non integer
            fermentum nisi, morbi id. Vel tortor mauris feugiat amet, maecenas
            facilisis risus, in faucibus. Vestibulum ullamcorper fames eget enim
            diam fames faucibus duis ac. Aliquam non tellus semper in dignissim
            nascetur venenatis lacus.Consectetur adipiscing elit. Natoque
            phasellus lobortis mattis cursus faucibus hac proin risus. Turpis
            phasellus massa ullamcorper volutpat. Ornare commodo non integer
            fermentum nisi, morbi id. Vel tortor mauris feugiat amet, maecenas
            facilisis risus, in faucibus. Vestibulum ullamcorper fames eget enim
            diam fames faucibus duis ac. Aliquam non tellus semper in dignissim
            nascetur venenatis lacus. Lectus vel non varius interdum vel tellus
            sed mattis.{"\n\n"} Sit laoreet auctor arcu mauris tincidunt sociis
            tristique pharetra neque. Aliquam pharetra elementum nisl sapien.
            Erat nisl morbi eu dolor in. Sapien ut lacus dui libero morbi
            tristique. Sit praesent mi, dolor, magna in pellentesque
            sollicitudin odio sed. Sit nibh aliquam enim ipsum lectus sem
            fermentum congue velit. Purus habitant odio in morbi aliquet velit
            pulvinar. Facilisis ut amet interdum pretium. Fames pretium eget
            orci facilisis mattis est libero facilisis ullamcorper. Est auctor
            amet egestas risus libero et. Auctor faucibus sit id fringilla
            vitae. Ac volutpat sodales tristique ut netus turpis. Consectetur
            adipiscing elit. Natoque phasellus lobortis mattis cursus faucibus
            hac proin risus. Turpis phasellus massa ullamcorper volutpat.
            {"\n\n"} Ornare commodo non integer fermentum nisi, morbi id. Vel
            tortor mauris feugiat amet, maecenas facilisis risus, in faucibus.
            Vestibulum ullamcorper fames eget enim diam fames faucibus duis ac.
            Aliquam non tellus semper in dignissim nascetur venenatis lacus.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E",
  },
});
