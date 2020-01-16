import React from "react";
import Count from "react-native-countdown-component";
import { StyleSheet, View } from "react-native";

export default class CountDown extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Count
          until={10}
          onFinish={() => alert("Finished")}
          onPress={() => alert("Hello")}
          size={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "grey",
    justifyContent: "center"
  }
});
