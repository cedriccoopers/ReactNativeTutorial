import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

export default class GetGlossary extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Source Listing",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { textAlign: "center", flex: 1 },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }

  /* componentDidMount() {
    console.log("Calling API");
    fetch("https://localhost:5001/api/Glossary/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          dataSource: responseJson,
        });
        console.log("Done calling api");
        console.log(responseJson);
      })
      .catch((error) => console.log(error));
  } */

  getDataUsingGet() {
    console.log("Get");
    //GET request
    fetch("https://localhost:5001/api/Glossary/", {
      method: "GET",
      //Request Type
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  getDataUsingPost() {
    //POST json
    var dataToSend = { title: "foo", body: "bar", userId: 1 };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    //POST request
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />
    );
  };
  renderItem = (data) => (
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>{data.item.term}</Text>
      <Text style={styles.lightText}>{data.item.definition}</Text>
    </TouchableOpacity>
  );

  render() {
    /* if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
        </View>
      );
    } else { */
    return (
      <View style={styles.MainContainer}>
        {/*Running GET Request*/}
        <Button title="Get Data Using GET" onPress={this.getDataUsingGet} />
        {/*Running POST Request*/}
        <Button title="Get Data Using POST" onPress={this.getDataUsingPost} />
      </View>
    );
    //} //end else
  } //end render
} //end class

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
