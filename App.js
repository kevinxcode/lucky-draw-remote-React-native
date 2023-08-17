import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from './components/SplashScreen';
import Loginscreen from './components/Loginscreen';
import Homescreen from './components/Homescreen';

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
      initialRouteName="SPLASH">
        
         <Stack.Screen name="SPLASH" component={SplashScreen} 
        options={{
          headerShown: false,
        }} />

        <Stack.Screen name="LOGIN" component={Loginscreen} 
         options={{
          title: 'HOST',
        }} />

     <Stack.Screen name="HOME" component={Homescreen} 
         options={{
          headerShown: false,
        }} />
        
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
