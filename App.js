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
        style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={text => onChangeText(text)}
      value={value}
    />
    )
}

export default function App() {
  return (
    <View style={{
      height: 200,
      padding: 50
    }}>
      <Text>Sort By</Text>
      <WordInput />
      <StatusBar/>
    </View>
  );
};
