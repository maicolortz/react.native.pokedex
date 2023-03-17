import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  console.log(props);
  const { pokemons } = props;
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item}></PokemonCard>}
      contentContainerStyle={StyleSheet.FlatListContentContainer}
    ></FlatList>
  );
}
const styles = StyleSheet.create({
  FlatListContentContainer: {
    paddingHorizontal: 5,
  },
});
