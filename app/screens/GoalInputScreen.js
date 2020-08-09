import React, { useState } from "react";
import { TextInput } from "react-native";

const GoalInputScreen = () => {
  const [goal, onChangeText] = useState("Useless Placeholder");

  return (
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={(text) => onChangeText(text)}
      value={goal}
    />
  );
};

export default GoalInputScreen;
