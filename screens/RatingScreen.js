import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FirstApp from "../components/reviewName";

const Data = [{ id: 1 }];

function RatingScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FirstApp />
    </View>
  );
}

export default RatingScreen;
