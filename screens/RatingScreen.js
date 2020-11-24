import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FirstApp from "../components/nameBar";
import AppRev from "../components/appDesc";
import AppPic from "../components/appLogo";
import SeeRev from "../components/seeReview";

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
      <SeeRev navigation={navigation} />
    </View>
  );
}

export default RatingScreen;
