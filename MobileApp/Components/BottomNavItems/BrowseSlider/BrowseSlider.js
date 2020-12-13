import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class BrowseSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require("./Screenshot_2020-12-13_17-04-28.png"),
        require("./Screenshot_2020-12-13_17-04-28.png"),
        require("./Screenshot_2020-12-13_17-04-28.png"),
        require("./Screenshot_2020-12-13_17-04-28.png"),
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
         autoplay={true}
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -5,
    zIndex:1
  }
});
