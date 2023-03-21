import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize, map } from "lodash";

export default function Stats(props) {
  const { stats } = props;
  const barStyles = (num) => {
    const color = num > 49 ? "green" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View key={index} style={styles.blockTitle}>
            <Text style={styles.statName}> {capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}> {item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: { width: "30%" },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "20%",
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "80%",
    height: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  bar: {
    height: 5,
  },
});
