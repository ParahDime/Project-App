import React, { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";
import { useAppContext } from "../components/appProvider";

import Bot from "../components/botConfig/bot";
import info from "../components/botConfig/info.json";

const SettingScreen = () => {
  //const [selectedValue, setSelectedValue] = useState(data.textSizes[0]);
  const {
    container,
    botContainer,
    infoContainer,
    itemContainer,
    spacer,
    text,
    infoContainer2,
    spacer2,
    selectorContainer,
    selector,
  } = styles;

  const { state, dispatch } = useAppContext();
  const { textSize, bold, textColour, botCalled } = state;

  const handleUpdates = () => {
    // Update the global state
    dispatch({
      type: "UPDATE_SETTINGS",
      payload: {
        textSize: info.textSize,
        bold: info.FontWeight,
        textColour: info.textColour,
        botCalled: info.botName,

        
      },
      
    });
    console.log(textSize);
  };

  const handleUpdateTextColour = (newColour) => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: { textColour: newColour },
    });
  };

  const handleUpdateTextBold = (newWeight) => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: { bold: newWeight },
    });
  };

  //update the text size
  const handleUpdateTextSize = (newSize) => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      payload: { textSize: newSize },
    });
  };

  //const dropdownData = info.textSizes.map(size => ({ value: size }));
  return (
    <ImageBackground
      source={require("../components/botConfig/images/background-fog.jpg")}
      style={container}
    >
      <View style={botContainer}>
        <Bot />
      </View>
      <View style={infoContainer}>
        {/* Provides the user with information on their bot usage*/}
        <View style={itemContainer}>
          <Text style={[text, { fontSize: info.FontSize, fontWeight: info.FontWeight, color: info.FontColour }]}>Commands:</Text>
          <Text style={[text, { fontSize: info.FontSize, fontWeight: info.FontWeight, color: info.FontColour }]}>{info.Commands}</Text>
        </View>
        
        <View style={itemContainer}>
          <Text style={[text, { fontSize: info.FontSize, fontWeight: info.FontWeight, color: "black"}]}>Account Age:</Text>
          <Text style={[text, { fontSize: info.FontSize, fontWeight: info.FontWeight, color: "black" }]}>{info["Acc age"]} days</Text>
        </View>
      </View>
      <View style={infoContainer2}>
        {/* Provides the user with information on their bot usage*/}
        <View style={itemContainer}>
          <Text style={[text, { fontSize: info.FontSize, fontWeight: info.FontWeight, color: "black" }]}>Text Size</Text>
          <View style={styles.selectorContainer}>
            <Text
              onPress={() => handleUpdateTextSize("15")}
              style={[styles.selector, textSize === "15" && { backgroundColor: info.FontColour }]}
            >
              15
            </Text>
            <Text
              onPress={() => handleUpdateTextSize("20")}
              style={[styles.selector, textSize === "20" && { backgroundColor: info.FontColour }]}
            >
              20
            </Text>
            <Text
              onPress={() => handleUpdateTextSize("25")}
              style={[styles.selector, textSize === "25" && { backgroundColor: info.FontColour }]}
            >
              25
            </Text>
          </View>
        </View>
        <View style={itemContainer}>
          <Text style={[text, { fontSize: info.FontSize, fontWeight: info.FontWeight, color: "black" }]}>Boldness</Text>
          <View style={styles.selectorContainer}>
            <Text
              onPress={() => handleUpdateTextBold("normal")}
              style={[styles.selector, bold === "normal" && { backgroundColor: info.FontColour }]}
            >
              Normal
            </Text>
            <Text
              onPress={() => handleUpdateTextBold("bold")}
              style={[styles.selector, bold === "bold" && { backgroundColor: info.FontColour }]}
            >
              Weighted
            </Text>
          </View>
        </View>
        <View style={itemContainer}>
          <Text style={[text, { fontSize: info.FontSize, fontWeight: info.FontWeight, color: "black" }]}>Text Colour</Text>
          <View style={styles.selectorContainer}>
            <Text
              onPress={() => handleUpdateTextColour("black")}
              style={[styles.selector, textColour === "black" && { backgroundColor: "#000000" }]}
            >
              black
            </Text>
            <Text
              onPress={() => handleUpdateTextColour("green")}
              style={[styles.selector, textColour === "green" && { backgroundColor: info.FontColour }]}
            >
              green
            </Text>
            <Text
              onPress={() => handleUpdateTextColour("blue")}
              style={[styles.selector, textColour === "blue" && { backgroundColor: "#0000FF" }]}
            >
              normal
            </Text>
          </View>
        </View>
        <View style={spacer2}></View>
        <Button
          title="Update"
          onPress={handleUpdates}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  Backgroundcontainer: {
    flex: 1,
  },
  botContainer: {
    alignItems: "center",

    width: "95%",
    height: "35%",

    marginBottom: 10, // Center the Bot component horizontally
  },
  infoContainer: {
    flexDirection: "row", // Arrange items in a row
    justifyContent: "space-between", // Space items evenly along the row
  },
  infoContainer2: {},
  spacer: {
    width: "25%",
  },
  spacer2: {
    height: "20%",
  },
  itemContainer: {
    flexDirection: "row", // Arrange items in a row
    alignItems: "center", // Align items vertically
    marginBottom: 10,
    height: "8%",
  },
  text: {
    marginRight: 10,
  },
  widthSpacer: {},
  selectorContainer: {
    flexDirection: "row",
    width: "60%",
  },
  selector: {
    width: "20%",
    textAlign: "center",
    backgroundColor: "gainsboro",
    margin: 5,
    padding: 16,
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default SettingScreen;
