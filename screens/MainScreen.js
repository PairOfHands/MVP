import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import WordInput from "../components/topBar";
import AppList from "../components/List";
import SortMenu from "../components/sortBy";

function MainScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WordInput />
      <SortMenu />
      <AppList navigation={navigation} />
      <StatusBar />
    </View>
  );
}

export default MainScreen;