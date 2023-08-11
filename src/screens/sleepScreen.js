import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, StyleSheet, botText, TouchableOpacity, ImageBackground } from "react-native";
import Pulsing from "../components/Pulse";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import data from "../components/botConfig/info.json";

//import sleepNavigator from "../components/sleepnavigator";
import MainScreen from "./mainScreen";

const Stack = createStackNavigator();

const SleepScreen = ({navigation}) => {
  const [sleepText, setSleepText] = useState("...");
  const [shouldWakeUp, setShouldWakeUp] = useState(false);

  //const navigation = useNavigation(); // Get the navigation object

  const { container, BotWrapper, outputWrapper, botText, promptText } = styles;
  const isFocused = useIsFocused();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const activateApp = async () => {
    setSleepText("Oh hi there");
    await delay(1000);

    setSleepText("Time for me to wake up");
    await delay(1000);

    // Reset the text and wake-up state
    setSleepText("...");
    setShouldWakeUp(false);
  };

  useEffect(() => {
    if (shouldWakeUp) {
      activateApp();
    }
  }, [shouldWakeUp]);

  useEffect(() => {
    if (!isFocused) { // If the screen is not focused
      setSleepText("..."); // Reset the text
      setShouldWakeUp(false); // Reset the wake-up state
    }
  }, [isFocused]);


  return (
    <ImageBackground source={require("../components/botConfig/images/background-fog.jpg")} style={container}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => setShouldWakeUp(true)}
      >
        <View style={BotWrapper}>
          <Pulsing />
        </View>
        <View style={outputWrapper}>
          <Text style={[botText, { fontSize: data.FontSize * 1.5 }]}>{sleepText}</Text>
          <Text style={[promptText, { fontSize: data.FontSize }]}>
            {shouldWakeUp ? "   " : "Tap the screen to wake them up"}
          </Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  BotWrapper: {
    flex: 1,
  },
  outputWrapper: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },
  botText: {
    fontSize: 30,
  },
  promptText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default SleepScreen;
