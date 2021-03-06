import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default WordInput = () => {
  const [value, onChangeText] = React.useState("");

  return (
    <View
      style={{
        height: 80,
        padding: 70,
        backgroundColor: "#BE81CA",
        borderRadius: 8,
      }}
    >
      <TextInput
        style={{
          height: 46,
          borderColor: "black",
          borderWidth: 1,
          opacity: 75,
          backgroundColor: "#FEFEFE",
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};
