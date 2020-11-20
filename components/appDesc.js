import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default AppRev = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>This description can scroll</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
