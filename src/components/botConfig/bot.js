import * as React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
import * as data from './bot.json';
import * as user from './info.json';

//bot configuration
const Bot = () => {

  const { botWrapper, imageDisplay, textDisplay } = styles;


  return (
    <View style={botWrapper}>
      <Image
        source={require('./images/matt.jpg')}
        alt={"Profile pic"}
        style={imageDisplay}
      />
      <Text style={textDisplay}>{data.Name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  botWrapper: {
    flex: 1, 
    alignItems: "center"
    
  },
  imageDisplay: {
    height: 200,
    width: 200,
    borderRadius: 400
  },
  textDisplay: {
    fontWeight: "bold",
    fontSize: 20
  },
});

export default Bot;