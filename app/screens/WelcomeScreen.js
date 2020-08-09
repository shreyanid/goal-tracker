import React from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>the sky's the limit!</Text>
      <Button
        title="set some goals"
        onPress={() => {
          // Alert.alert("first goal button pressed");
          navigation.navigate("GoalInput");
        }}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
