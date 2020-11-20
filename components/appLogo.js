import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default AppPic = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/favicon.png")} />
    </View>
  );
};
