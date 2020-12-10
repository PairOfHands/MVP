import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "55%",
    width: "90%",
    padding: 20,
    marginVertical: 24,
    marginHorizontal: 20,
  },
  title: { fontSize: 16, width: "90%", marginHorizontal: 21 },
  scrollView: {
    paddingVertical: 20,
  },
});

export default RevDesc = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
          Dori me, interimo Ayapare, dorime Ameno, ameno Latire, latiremo Dori
          me Ameno Omenare imperavi ameno Dimere, dimere matiro Matiremo, ameno
          Omenare imperavi emunari Ameno Omenare imperavi emunari Ameno Ameno
          dore Ameno dori me Ameno dori me Ameno dom Dori me reo Ameno dori me
          Ameno dori me Dori me am Ameno Ameno Ameno Omenare imperavi ameno
          Dimere dimere martiro Martiremo, ameno Omenare imperavi emunari Ameno
          Omenare imperavi emunari Ameno Ameno dore Ameno dori me Ameno dori me
          Ameno dom Dori me reo Ameno dori me Ameno dori me Dori me am Ameno,
          ameno Ameno dori me Ameno dori me Dori me Ameno Ameno dore Ameno dori
          me Ameno dori me Ameno dom Dori me reo Ameno dori me Ameno dori me
          Ameno, ameno Ameno Ameno dori me Ameno Ameno dori me Ameno dom Dori me
          reo, ameno Ameno dori me Ameno, ameno dori me
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
