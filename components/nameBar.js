import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default FirstApp = () => {
  return (
    <View
      style={{
        height: 80,
        padding: 70,
        backgroundColor: "#BE81CA",
        borderRadius: 8,
      }}
    >
      <View>
        <Text
          style={{
            height: 40,
            fontSize: 36,
            width: 220,
            marginHorizontal: "15%",
            marginVertical: "-5%",
          }}
        >
          Bailey Buddy
        </Text>
      </View>
    </View>
  );
};
