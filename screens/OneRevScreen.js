import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import OneRev from "../components/revName";

function OneRevScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E4E7E7",
      }}
    >
      <OneRev />
      <StatusBar />
    </View>
  );
}

export default OneRevScreen;
