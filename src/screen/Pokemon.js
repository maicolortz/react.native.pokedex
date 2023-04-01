import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonDetailsApi } from "../api/pokemonApi";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Pokemon(props) {
  const [pokemon, setPokemon] = useState(null);

  const {
    route: {
      params: { id },
    },
    navigation,
  } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color={"#fff"}
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          {" "}
        </Icon>
      ),
    });
  }, [navigation, id]);
  useEffect(() => {
    (async () => {
      try {
        setPokemon(await getPokemonDetailsApi(id));
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [id]);
  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      ></Header>
      <Type types={pokemon.types}></Type>
      <Stats stats={pokemon.stats}></Stats>
    </ScrollView>
  );
}
