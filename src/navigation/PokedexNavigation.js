import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pokedex from "../screen/Pokedex";
import Pokemon from "../screen/Pokemon";
const Stack = createNativeStackNavigator();
export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex}></Stack.Screen>
      <Stack.Screen name="Pokemon" component={Pokemon}></Stack.Screen>
    </Stack.Navigator>
  );
}
