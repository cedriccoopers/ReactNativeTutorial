import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Appbar } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";

export default class FormUserDetails extends React.Component {
  continue = (e) => {
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
          <Appbar.Content title="User Details - Step 1 of 3" />
          <Appbar.Action icon="magnify" onPress={this._handleSearch} />
          <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
        </Appbar.Header>
        <TextInput
          label="Enter your First Name"
          mode="outlined"
          onChange={handleChange("firstName")}
          value={values.firstName}
        />
        <TextInput
          label="Enter your Surname"
          mode="outlined"
          onChange={handleChange("surname")}
          defaultValue={values.surname}
        />
        <TextInput
          label="Enter your email"
          mode="outlined"
          onChange={handleChange("email")}
          defaultValue={values.email}
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
    margin: 76,
  },
};
