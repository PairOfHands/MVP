import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, SafeAreaView, TouchableOpacity  } from 'react-native';

const WordInput = () => {
  const [value, onChangeText] = React.useState('Placeholder text');

return (
  <TextInput style={{ 
  height: 46, borderColor: 'black', borderWidth: 1, backgroundColor:'#FEFEFE', opacity: 75, 
}} 
  onChangeText={text => onChangeText(text)} 
  value={value}/>
)
};


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Bailey Buddy",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "decent app",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "eh... app",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const Page = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 125,
    width: 300,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    backgroundColor: '#CBC3C0'
  },
});

export default function App() {
  
  return (
    <View style={{
      height: 80,
      padding: 50,
      backgroundColor:"#B529F8",
    }}>
      <WordInput />
      <StatusBar/>
    </View>,
    <View>
      <Page />
    </View>
  );
}

