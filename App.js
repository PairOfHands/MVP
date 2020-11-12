import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WordInput from "./components/topBar";
import AppList from "./components/List";
import SortMenu from "./components/sortBy";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WordInput />
      <SortMenu />
      <AppList />
      <StatusBar />
    </View>
  );
}
