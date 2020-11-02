import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image, TextInput  } from 'react-native';
import topBar from './components/topBar.js'

export default function App() {
  return (
    <View style={{
      height: 80,
      padding: 50,
      backgroundColor:"#B529F8",
    }}>
       {topBar}
      <StatusBar/>
    </View>
  );
};
