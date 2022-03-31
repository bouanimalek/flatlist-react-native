import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const Portfolio = ({ navigation, route }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={{ padding: 9 }}
              onPress={() => setCount((prevCount) => prevCount + 1)}
            >
              <Text style={styles.btnText}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ padding: 9 }}
              onPress={() => setCount((prevCount) => prevCount - 1)}
            >
              <Text style={styles.btnText}>-1</Text>
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [navigation]);
  const handlePress = () => {
    navigation.pop();
  };

  const myData = route.params;
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Portfolio</Text>
      <Text style={styles.text}>Nom: {myData.name}</Text>
      <Text style={styles.text}>Age: {myData.age}</Text> */}
      <Text style={styles.text}>Count: {count}</Text>
      <Button onPress={handlePress} title="Vers Home" />
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
