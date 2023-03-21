import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../../utils/getColorByPokemonType";

export default function Header(props) {
  const { image, name, order, type } = props;
  const color = getColorByPokemonType(type);
  const bgStyle = [{ backgroundColor: color, ...styles.bg }];
  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image}></Image>
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
    paddingBottom: 20,
  },
});
