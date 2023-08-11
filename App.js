import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeAppEventEmitter } from 'react-native'
import AppProvider from './src/components/appProvider'

//screens
import MainScreen from './src/screens/mainScreen'
import SleepScreen from './src/screens/sleepScreen'

import Tabs from './src/components/Tabs'
//const Stack = createStackNavigator();
//import Tabs when setup

const App = () => {
  //used to see if the app/sleeping screen is shown
  var vision=false;

  return (
    <AppProvider>
    <Tabs />
    </AppProvider>

  )
}

export default App