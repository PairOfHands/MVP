import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppReviews from "./components/theReviews";

const Data = [{ id: 2 }];

function ReviewScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AppReviews />
    </View>
  );
}

export default ReviewScreen;
