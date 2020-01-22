import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Splash extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{ width: 100, height: 100, alignContent: "center" }}
          source={require("../assets/9.jpg")}
        />
      </View>
    );
  }
}
