import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import GoalInputScreen from "./app/screens/GoalInputScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="GoalInputScreen" component={GoalInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
