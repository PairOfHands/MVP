import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 106,
    width: "100%",
    padding: 5,
    backgroundColor: "#CBC3C0",
    borderRadius: 8,
    borderWidth: 0.5,
  },
  title: {
    fontSize: 36,
    marginHorizontal: "25%",
    marginVertical: 25,
  },
});

export default OneRev = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jim E. John</Text>
    </View>
  );
};
