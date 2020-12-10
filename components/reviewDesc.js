import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "90%",
    padding: 20,
    marginVertical: 24,
    marginHorizontal: 20,
    backgroundColor: "#CBC3C0",
    borderRadius: 8,
    borderWidth: 0.5,
  },
  title: {
    fontSize: 36,
  },
});

export default RevDesc = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jim E. John</Text>
    </View>
  );
};
