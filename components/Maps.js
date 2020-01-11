import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default class Maps extends React.Component {
  render() {
    return (
      /*<MapView
        style={{ flex: 1 }}
        region={{
          latitude: -26.107567,
          longitude: 28.056702,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      />*/
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: -26.107567,
          longitude: 28.056702,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <MapView.Circle
          center={{ latitude: -26.107567, longitude: 28.056702 }}
          radius={650}
          strokeColor="red"
          fillcolor={"rgba(230,238,255,0.5)"}
          geodesic="true"
        />
        <MapView.Marker
          coordinate={{ latitude: -26.107567, longitude: 28.056702 }}
          title="Hotspot"
          description="Hotspot"
        />
      </MapView>
    );
  }
}
