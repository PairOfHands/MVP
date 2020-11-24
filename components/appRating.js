import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0.67,
    marginHorizontal: 20,
  },
  baseText: {
    fontWeight: "bold",
    lineHeight: 250,
  },
});

export default AppRate = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}> howdy pardner</Text>
    </SafeAreaView>
  );
};
