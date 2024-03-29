import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorite from "../screen/Favorite";
import Pokemon from "../screen/Pokemon";
const Stack = createNativeStackNavigator();
const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={Favorite} />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
