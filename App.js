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
import WordInput from "./components/topBar";
import AppList from "./components/List";
import SortMenu from "./components/sortBy";

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
