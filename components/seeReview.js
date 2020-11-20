import React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
});

export default SeeRev = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button
          title="Press me"
          onPress={() => navigation.navigate("Review", { id: 2 })}
        />
      </View>
    </SafeAreaView>
  );
};
