import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    title: "Jim E. John",
    name: "good app good app I like this app-",
  },
  {
    title: "Original Name",
    name: "this app is like my name...Original",
  },
  {
    title: "Garet",
    name: "words",
  },
  {
    title: "Anon. E Mouse",
    name: "anon words",
  },
  {
    title: "Ricardo Eduardo",
    name: "my name",
  },
];

export default AppReviews = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  renderItem = ({ item }) => {
    backgroundColor = item.id === selectedId ? "#CBC3C0" : "#CBC3C0";

    return (
      <TouchableOpacity style={[styles.item]}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    height: 85,
    width: 250,
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 20,
    backgroundColor: "#CBC3C0",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
  },
  name: {
    fontSize: 13,
  },
});
