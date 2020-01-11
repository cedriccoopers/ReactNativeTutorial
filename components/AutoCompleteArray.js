import React, { useState, Component } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Button,
  TouchableOpacity
} from "react-native";

import AutoComplete from "react-native-autocomplete-input";

class CareProviderSequenceScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      query: ""
    };
  }

  render() {
    const query = this.state;

    //fix: incase doesnt work try below code snippet
    //const { query } = this.state;

    const services = [
      "Pick up my Prescription",
      "Pick up groceries",
      "Pick up dry cleaning",
      "Pick up my pet"
    ];

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          //data to show in suggestion
          data={
            services.length === 1 && comp(query, services[0].title)
              ? []
              : services
          }
          //default value if you want to set something in input
          defaultValue={query}
          /*onchange of the text changing the state of the query which will trigger
            the findFilm method to show the suggestions*/
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter your need"
          renderItem={({ item }) => (
            //you can change the view you want to show in suggestion from here
            <TouchableOpacity
              onPress={() => this.setState({ query: item.title })}
            >
              <Text style={styles.itemText}>
                {item.title} ({item.release_date})
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          {services.length > 0 ? (
            <Text style={styles.infoText}>{this.state.query}</Text>
          ) : (
            <Text style={styles.infoText}>Enter The Film Title</Text>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    padding: 16,
    marginTop: 40
  },
  autocompleteContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 0
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center"
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2
  },
  infoText: {
    textAlign: "center",
    fontSize: 16
  }
});

export default CareProviderSequenceScreen;
CareProviderSequenceScreen.navigationOptions = () => ({
  title: "Home & Personal Care",
  headerTintColor: "#9EBBD7",

  headerStyle: {
    height: 65,
    backgroundColor: "#1E5797",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2
  }
});
