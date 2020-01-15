import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

export default class FormUserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  _goBack = () => console.log("Went back");
  _handleSearch = () => console.log("Searching");
  _handleMore = () => console.log("Shown more");

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <Appbar.Header>
          {/* <Appbar.BackAction onPress={this._goBack} /> */}
          <Appbar.Content title="Enter User Details" />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
        <TextInput
          mode="outlined"
          label="Enter your First Name"
          onChange={handleChange("firstName")}
          value={values.firstName}
        />
        <TextInput
          mode="outlined"
          label="Enter your Surname"
          onChange={handleChange("surname")}
          value={values.surname}
        />

        <TextInput
          mode="outlined"
          label="Enter your email"
          onChange={handleChange("email")}
          value={values.email}
        />
        <Button
          mode="contained"
          loading="true"
          onPress={this.continue}
          style={styles.button}
        >
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 56
  }
};
