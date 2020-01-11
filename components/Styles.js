import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Styles extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>Just Red</Text>
        <Text style={styles.bigBlue}>Just BigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>BigBlue, then Red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red , then BigBlue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
});
