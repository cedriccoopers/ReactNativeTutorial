import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default class AppBars extends React.Component {
  _goBack = () => console.log("Went back");

  _handleSearch = () => console.log("Searching");

  _handleMore = () => console.log("Shown more");

  render() {
    return (
      <React.Fragment>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Cedric" />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
        <TextInput label="Name" />
        <TextInput label="Surname" />
      </React.Fragment>
    );
  }
}
