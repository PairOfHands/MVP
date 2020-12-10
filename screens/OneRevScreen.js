import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import OneRev from "../components/revName";
import RevDesc from "../components/reviewDesc";

function OneRevScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E4E7E7",
      }}
    >
      <OneRev />
      <RevDesc />
      <StatusBar />
    </View>
  );
}

export default OneRevScreen;