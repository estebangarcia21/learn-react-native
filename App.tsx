import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey club!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Press Here: {count}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  text: {
    fontSize: 34,
    fontWeight: "600",
    marginBottom: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    width: "100%",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500"
  }
});
