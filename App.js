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

const DisplayImage = () => {
<View style={styles.container}>
     <Image
        style={styles.backButton}
        source={{
          uri: 'data:image/png;base64,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',
        }}
      />
</View>
}

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
