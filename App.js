import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WordInput from "./components/topBar";
import AppList from "./components/List";
import SortMenu from "./components/sortBy";
import MainScreen from "./screens/MainScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <MainScreen />
    </View>
  );
}
