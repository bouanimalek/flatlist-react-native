import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Portfolio = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
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
  btn: {
    padding: 12,
    color: "white",
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnText: {
    color: "white",
    fontSize: 19,
    paddingBottom: 9,
  },
});

export default Portfolio;
