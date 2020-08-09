import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function GoalSpaceScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/moonsky1.png")}
    >
      <View>
        <Text>TODO Take the text from the input stage and display it here</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
