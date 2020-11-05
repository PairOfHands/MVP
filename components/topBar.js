import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default WordInput = () => {
  const [value, onChangeText] = React.useState("Placeholder text");

  return (
    <TextInput
      style={{
        height: 46,
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "#FEFEFE",
        opacity: 75,
      }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};
