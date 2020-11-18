import React from "react";
import { View, Text } from "react-native";
import BaileyBud from "../components/reviewName";

const Data = [{ id: 1 }];

function RatingScreen({ navigation, route }) {
  return (
    <View>
      <Text>welcome to page two</Text>
      <BaileyBud/>
    </View>
  );
}

export default RatingScreen;
