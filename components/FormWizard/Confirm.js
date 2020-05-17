import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { Button } from "react-native-paper";
import { List, ListItem } from "react-native-paper";

export default class Confirm extends React.Component {
  continue = (e) => {
    e.preventDefault();
    //PROCESS FORM
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  _goBack = () => console.log("Went back");
  _handleSearch = () => console.log("Searching");
  _handleMore = () => console.log("Shown more");

  render() {
    const {
      values: { firstName, surname, email, occupation, city, bio },
    } = this.props;

    return (
      <React.Fragment>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Confirm Step 3 of 3" />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
        <List.Item
          title="First Name"
          description="This is the First Name entered"
          left={firstName}
        ></List.Item>
        <List.Item
          title="Surnname"
          description="This is the Surname  entered"
          left={surname}
        ></List.Item>
        <List.Item
          title="Email"
          description="This is the Email entered"
          left={email}
        ></List.Item>
        <List.Item
          title="Occupation"
          description="This is the Occupation entered"
          left={firstName}
        ></List.Item>
        <List.Item
          title="City"
          description="This is the city entered"
          left={firstName}
        ></List.Item>
        <List.Item
          title="Bio"
          description="This is the Bio entered"
          left={firstName}
        ></List.Item>
        <Button
          mode="contained"
          loading="true"
          onPress={this.back}
          style={styles.button}
        >
          Confirm & Continue
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
    margin: 56,
  },
};
