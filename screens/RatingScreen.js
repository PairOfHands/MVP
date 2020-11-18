import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BaileyBud from "../components/reviewName";

const Data = [{ id: 1 }];

function RatingScreen({ navigation, route }) {
  return (
    <View>
      <BaileyBud/>
    </View>
  );
}

export default RatingScreen;
