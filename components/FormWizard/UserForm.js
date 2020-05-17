import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import { StyleSheet, Text, View } from "react-native";

export default class UserForm extends React.Component {
  state = {
    step: 1,
    firstName: "",
    surname: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  //Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //Handle field change
  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
    console.log(event.target);
  };

  render() {
    const { step } = this.state;
    const { firstName, surname, email, occupation, city, bio } = this.state;
    const values = { firstName, surname, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <View>
            <Text>Success</Text>
          </View>
        );
    }
  }
}
