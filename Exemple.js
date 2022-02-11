import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exemple = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        <Text>Text 1</Text>
        <Text>Text 1</Text>
      </Text>
      <Text style={styles.textParent2}>
        <View>
          <Text style={styles.textParent4}>
            Text
            <Text style={styles.textParent3}>Toto</Text>
          </Text>
          <Text>Text 2</Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: 300,
    width: "75%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    color: "red",
  },
  text: {
    color: "red",
  },
  text2: {
    flexDirection: "column",
  },
  textParent2: {
    color: "green",
  },
  textParent3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textParent4: {
    color: "green",
  },
});

export default Exemple;
