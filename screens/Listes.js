import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Listes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Listes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default Listes;
