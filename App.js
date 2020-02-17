import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Helloworld from "./components/Helloworld";
import Styles from "./components/Styles";
import Layout from "./components/Layout";
import Charts from "./components/Charts";
import Inputs from "./components/Inputs";
import Images from "./components/Images";
import Http from "./components/Http";
import Maps from "./components/Maps";
import Geolocation from "./components/Geolocation";
import AutoComplete from "./components/AutoComplete";
//import AutoCompleteArray from "./components/AutoCompleteArray";
import UserForm from "./components/FormWizard/UserForm";
import AppBars from "./components/AppBars";
import Splash from "./components/Splash";
import CountDown from "./components/Countdown";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
  }

  render() {
    /* if (this.state.isLoading) {
      return (
        <View>
          <Text>Working</Text>
        </View>
      );
    } */

    return <Inputs />;
  }
}
