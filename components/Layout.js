import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Layout extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}
