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
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Bailey Buddy",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Decent App",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Meh App",
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
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
