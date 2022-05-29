import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {
  OnBoarding,
} from "./app/screens/";
import { useFonts } from 'expo-font';

// screen for stack & tabs
const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    "Roboto-Black" : require('./app/assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold" : require('./app/assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular" : require('./app/assets/fonts/Roboto-Regular.ttf'),
})
if(!loaded){
  return null;
}
  return (
    <NavigationContainer>
    <Stack.Navigator>
        {/* Onboarding screen */}
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
    </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
