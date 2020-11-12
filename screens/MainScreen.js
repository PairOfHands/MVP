import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import WordInput from "./components/topBar";
import AppList from "./components/List";
import SortMenu from "./components/sortBy";

function MainScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WordInput />
      <SortMenu />
      <AppList />
      <StatusBar />
    </View>
  );
}

export default MainScreen;
