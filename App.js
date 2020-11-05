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

export default function App() {
  return (
    <View
      style={{
        height: 80,
        padding: 70,
        backgroundColor: "#B529F8",
      }}
    >
      <WordInput />
      <StatusBar />
    </View>
  );
}
