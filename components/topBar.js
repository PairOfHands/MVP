import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, VirtualizedList, Image, TextInput  } from 'react-native';

export function topBar () {
const WordInput = () => {
    const [value, onChangeText] = React.useState('Placeholder text');
 
    return (
        <TextInput
        style={{ height: 46, borderColor: 'black', borderWidth: 1, backgroundColor:'gray' }}
         onChangeText={text => onChangeText(text)}
      value={value}
    />
    )
}
};