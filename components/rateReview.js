import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "90%",
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 20,
    backgroundColor: "#CBC3C0",
    borderRadius: 8,
    borderWidth: 0.5,
  },
  title: {},
});

export default RateRev = () => {
  return (
    <View style={styles.container}>
      <Text>was this review helpful</Text>
    </View>
  );
};
