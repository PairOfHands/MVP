import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default SortMenu = () => {
  const [selectedId, setSelectedId] = useState("");
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 20,
          textDecorationLine: "underline",
        }}
      >
        Sort By
      </Text>
    </View>
  );
};
