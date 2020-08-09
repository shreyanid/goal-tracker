import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import GoalInputScreen from "./app/screens/GoalInputScreen";
import GoalSpaceScreen from "./app/screens/GoalSpaceScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="GoalInputScreen" component={GoalInputScreen} />
        <Stack.Screen name="GoalSpaceScreen" component={GoalSpaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// integrating quotes api?
fetch(
  "https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=4&cat=famous",
  {
    method: "POST",
    headers: {
      "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
      "x-rapidapi-key": "5aa713c724msh5c58860be73bcc0p1ac4e7jsn9b8f1bb465cd",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: {},
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
