import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Helloworld from "./components/Helloworld";
import Styles from "./components/Styles";
import Layout from "./components/Layout";
import Charts from "./components/Charts";
import Inputs from "./components/Inputs";
import Http from "./components/Http";
import Maps from "./components/Maps";
import Geolocation from "./components/Geolocation";
import AutoComplete from "./components/AutoComplete";
//import AutoCompleteArray from "./components/AutoCompleteArray";
import UserForm from "./components/FormWizard/UserForm";

export default class App extends React.Component {
  render() {
    return <UserForm />;
  }
}
