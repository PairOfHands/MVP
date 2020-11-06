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
    title: "Bailey Buddy",
  },
  {
    title: "Decent App",
  },
  {
    title: "Meh App",
  },
  {
    title: "Bad App",
  },
  {
    title: "Unrated App",
  },
];

export default AppList = () => {
  const [selectedId, setSelectedId] = useState(null);

  renderItem = ({ item }) => {
    backgroundColor = item.id === selectedId ? "#CBC3C0" : "#CBC3C0";

    return (
      <TouchableOpacity onPress={() => {}} style={[styles.item]}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
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
    flexDirection: "column",
    marginTop: StatusBar.currentHeight || 40,
  },
  item: {
    height: 150,
    width: 150,
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 16,
    backgroundColor: "#CBC3C0",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
  },
});
