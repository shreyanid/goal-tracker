import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ImageBackground,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/moonsky1.png")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>the sky's the limit!</Text>
        <View style={styles.goalButton}>
          <Button
            color="#fff"
            title="set some goals"
            onPress={() => {
              // Alert.alert("first goal button pressed");
              navigation.navigate("GoalInputScreen");
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    // flex: 0.85,
    // flex: 1,
    width: "100%",
    height: 250,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  goalButton: {
    width: "40%",
    height: 40,
    backgroundColor: "#ff99cc",
  },
  title: {
    color: "white",
    fontSize: 40,
  },
});
