import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function GoalInputScreen({ navigation }) {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.header}>Rocket Building</Text>
      <TextInput style={styles.textInput} placeholder="your title" />
      <TextInput style={styles.textInput} placeholder="your milestones" />
      <TextInput style={styles.textInput} placeholder="your notes" />
      {/* TODO need to get inputs to actually save somewhere (backend?) */}
      <Button
        title="Blast off!"
        onPress={() => {
          navigation.navigate("GoalSpaceScreen"); // the map space vision screen
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "#262673",
  },
  header: {
    fontSize: 39,
  },
  textInput: {
    width: "60%",
    height: 40,
    fontSize: 24,
  },
});
