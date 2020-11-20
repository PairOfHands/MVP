import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FirstApp from "../components/nameBar";
import AppRev from "../components/appDesc";
import AppPic from "../components/appLogo";

const Data = [{ id: 1 }];

function RatingScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FirstApp />
      <AppPic />
      <AppRev />
    </View>
  );
}

export default RatingScreen;
