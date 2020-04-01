import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CreditCardInput, CardView } from "react-native-credit-card-input";

export default class CreditCard extends React.Component {
  _onFocus = field => console.log("Focusing", field);

  _onChange = formData => console.log(JSON.stringify(FormData, null, " "));

  render() {
    return (
      <View style={styles.container}>
        <CreditCardInput
          autoFocus
          requireName
          requireCVC
          requirePostalCode
          validColor="Greed"
          invalidColor="Red"
          placeholderColor="darkgray"
          onFocus={this._onFocus}
          onChange={this._onChange}
        />
        {/* <CardView
            cardImageFront
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 120
  }
});
