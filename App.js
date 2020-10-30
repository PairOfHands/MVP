import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image, TextInput  } from 'react-native';

const styles = StyleSheet.create({
    container: {
    paddingTop: 50,
  },
  backButton: {
    width: 50,
    height: 50,
  }
});

const WordInput = () => {
    const [value, onChangeText] = React.useState('Placeholder text');
 
    return (
        <TextInput
        style={{ height: 48, borderColor: 'black', borderWidth: 1, backgroundColor: '#FEFEFE'}}
         onChangeText={text => onChangeText(text)}
      value={value}
    />
    )
};

export default function App() {
  return (
    <View style={{
      height: 148,
      padding: 50,
      backgroundColor: '#B529F8'
    }}> 
    <WordInput />
      <StatusBar/>
    </View>
  );
};
