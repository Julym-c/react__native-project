import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'

import CoinsStack from './src/components/coins/CoinsStack'

export default function App() {
  return (
    /*ayuda a tener todo el estado de la navegación en general tanto tabs como stacks*/
    <NavigationContainer> 
      <CoinsStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
