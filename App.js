import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Exemple from "./Exemple";

export default function App() {
  return (
    <View style={styles.container}>
      <Exemple />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
