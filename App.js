import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image, TextInput  } from 'react-native';

const WordInput = () => {
  const [value, onChangeText] = React.useState('Placeholder text');

return (
  <TextInput style={{ 
  height: 46, borderColor: 'black', borderWidth: 1, backgroundColor:'#FEFEFE', opacity: 75, border
}} 
  onChangeText={text => onChangeText(text)} 
  value={value}/>
)
};

export default function App() {
  
  return (
    <View style={{
      height: 80,
      padding: 50,
      backgroundColor:"#B529F8",
    }}>
      <WordInput />
      <StatusBar/>
    </View>
  );
}

