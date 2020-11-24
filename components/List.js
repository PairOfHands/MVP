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
    screen: "Rating",
  },
  {
    title: "Decent App",
    screen: "Main",
  },
  {
    title: "Meh App",
    screen: "Main",
  },
  {
    title: "Bad App",
    screen: "Main",
  },
  {
    title: "Unrated App",
    screen: "Main",
  },
];

export default AppList = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  renderItem = ({ item }) => {
    backgroundColor = item.id === selectedId ? "#CBC3C0" : "#CBC3C0";

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
        style={[styles.item]}
      >
        <Text style={styles.title}>{item.title}</Text>
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
        numColumns={2}
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
    height: 150,
    width: 150,
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 20,
    backgroundColor: "#CBC3C0",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
  },
});
