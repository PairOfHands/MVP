import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image, TextInput  } from 'react-native';

const WordInput = () => {
    const [value, onChangeText] = React.useState('Placeholder text');

    return (
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
         onChangeText={text => onChangeText(text)}
      value={value}
    />
    )
}

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar/>
    </View>
  );
};
