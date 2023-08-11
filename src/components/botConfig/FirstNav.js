import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SleepScreen" component={SleepScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      
    </Stack.Navigator>
  );
};
