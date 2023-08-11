import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View, Button, StyleSheet, TextInput, ImageBackground } from "react-native";
import Bot from '../components/botConfig/bot'
import data from '../components/botConfig/info.json'
import { useIsFocused } from '@react-navigation/native';
import { OpenAIApi } from "openai";
import { useAppContext } from "../components/appProvider";

const MainScreen = () => {
  const { container, botWrapper, outputWrapper, viewWrapper, buttonWrapper, textInput, spacer, viewWrapper2, viewWrapper3, textOutput } = styles;

  const [botString, setBotString] = useState('Ask me a question');
  const [value, onChangeText] = useState('');
  const [sentValue, setSentValue] = useState('');
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();
const [result, setResult] = useState('');

  const handleSendButton = () => {
    if (value) {
      setBotString(value); // Update botString with the value from TextInput
      setSentValue(value);
      onChangeText(''); // Clear the TextInput after sending
      onSubmit();
    }
  };

  useEffect(() => {
    if (!isFocused) { // If the screen is not focused
      setBotString("Ask me a question"); // Reset the text
      onChangeText('');
      setLoading(false);
      setSentValue('');
    }
  }, [isFocused]);

  //submit the answer to the bot
  const onSubmit = async () => {
    if (loading) {
      return botString = '..... Matt is thinking';
    }
    setLoading(true);
    setResult('');
    try {
      const response = await fetch(`${API_URL}/generate-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (e) {
      setBotString("He appears to be busy...");
    } finally {
      setLoading(false);
    }
  };


  const onTryAgain = () => {
    setResult('');
  };
  
  if (result) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Here are some great Christmas gift ideas 🎁 💡
        </Text>
        <Text style={styles.result}>{result}</Text>
        <Pressable onPress={onTryAgain} style={styles.button}>
          <Text style={styles.buttonText}>Try again</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <ImageBackground source={require("../components/botConfig/images/background-fog.jpg")} style={container}>
      <View style={[botWrapper, viewWrapper2]}>
        <Bot />
      </View>
      <View style={spacer}></View>
      <View style={[viewWrapper, { flex: 2 }]}>
        <View style={outputWrapper}>
          {/* Dialogue inside of the box (scrollable?) */}
          <Text style={[textOutput, { fontSize: data.FontSize, fontWeight: data.FontWeight, color: data.FontColour }]}>
            {botString}
          </Text>
        </View>
      </View>

      <View style={viewWrapper3}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={50}
          value={value}
          onChangeText={text => onChangeText(text)}
          style={[textInput, { borderColor: 'black', fontSize: data.FontSize, fontWeight: data.FontWeight, color: data.FontColour }]} // Apply styles
        />
        <View style={buttonWrapper}>
          <Button
            title="Say it!"
            onPress={handleSendButton} // Call the function to update botString
          />
        </View>
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    //margin: 20,
  },
  viewWrapper: {
    alignItems: "center",
    width: '100%',
    height: '33%',
  },
  viewWrapper2: {
    alignItems: "center",
    
    width: '95%',
    height: '33%', // Adjusted to under 1/3 of the screen
  },
  viewWrapper3: {
    alignItems: "center",
    borderWidth: 2,
    width: '100%',
    height: '33%',
    backgroundColor: 'black'
  },
  spacer: {
    height: '10%'
  },
  textInput: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '90%',
    alignItems: 'center',
    height: '70%',
    backgroundColor: 'white',
  },
  textOutput: {
    alignItems: 'center',
    alignContent: 'center'
  },
  outputWrapper: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 10,
    padding: 5,
    alignItems: 'center',
    width: '80%', 
    height: '90%', 
    backgroundColor: 'white'
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  botWrapper: {
    flex: 2, // Takes up 2/3 of the screen
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default MainScreen;