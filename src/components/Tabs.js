import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Feather, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { getHeaderTitle } from "@react-navigation/elements";


import MainScreen from "../screens/mainScreen";
import SleepScreen from "../screens/sleepScreen";
import SettingScreen from "../screens/settingScreen";
//import SettingScreen from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          style={styles.tabBar}
          name={" "}
          component={SleepScreen}
          color={"green"}
          options={{
            tabBarLabel: "Sleeping",
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"droplet"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
         
        <Tab.Screen
          style={styles.tabBar}
          name={"Talk"}
          component={MainScreen}
          options={{
            tabBarLabel: "home",
            tabBarIcon: ({ focused }) => (
              <SimpleLineIcons
                name={"speech"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
       <Tab.Screen
          style={styles.tabBar}
          name={"Settings"}
          component={SettingScreen}
          options={{
            tabBarLabel: "settings",
            tabBarIcon: ({ focused }) => (
              <SimpleLineIcons
                name={"speech"}
                size={25}
                color={focused ? "tomato" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    textAlign: "center",
  },
});
