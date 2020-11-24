import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

export default SeeRev = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="See reviews"
          onPress={() => navigation.navigate("Review", { id: 2 })}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    marginVertical: -40,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
});
