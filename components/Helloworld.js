import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Helloworld = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Hello World Cedric</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#171717",
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#F3F3F2",
    fontSize: 28,
    fontWeight: "900",
    textTransform: "uppercase"
  }
});

export default Helloworld;
