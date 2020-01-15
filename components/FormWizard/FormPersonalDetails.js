import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

export default class FormPersonalDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  _goBack = () => console.log("Went back");
  _handleSearch = () => console.log("Searching");
  _handleMore = () => console.log("Shown more");

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <Appbar.Header>
          <Appbar.BackAction onPress={this.back} />
          <Appbar.Content title="Enter Personal Details" />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
        <TextInput
          mode="outlined"
          label="Enter Occupation"
          onChange={handleChange("occupation")}
          value={values.occupation}
        />
        <TextInput
          mode="outlined"
          label="Enter your City"
          onChange={handleChange("city")}
          value={values.city}
        />

        <TextInput
          mode="outlined"
          label="Enter your Bio"
          multiline="true"
          onChange={handleChange("bio")}
          value={values.bio}
        />
        <Button
          mode="contained"
          loading="true"
          onPress={this.back}
          style={styles.button}
        >
          Back
        </Button>
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
    margin: 80
  }
};
