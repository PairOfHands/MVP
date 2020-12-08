import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/MainScreen";
import RatingScreen from "./screens/RatingScreen";
import ReviewScreen from "./screens/ReviewScreen";
import OneRevScreen from "./screens/OneRevScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Rating" component={RatingScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="1-Rev" component={OneRevScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
