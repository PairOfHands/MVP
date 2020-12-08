import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";


function OneRevScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E4E7E7",
      }}
    >
      <WordInput />
      <AppList navigation={navigation} />
      <StatusBar />
    </View>
  );
}

export default OneRevScreen;
