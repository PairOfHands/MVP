import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginHorizontal: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    resizeMode: "stretch",
  },
});

export default AppPic = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/favicon.png")} />
    </View>
  );
};
