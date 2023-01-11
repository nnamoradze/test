import { cloneElement, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={[styles.counter_text,{color:count <= 0 ?'red' : 'green'}]}
      >
        {count}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.text_button}>click for increase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#d13a3a" }]}
        onPress={() => setCount(count - 1)}
      >
        <Text style={styles.text_button}>click for decrease</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "45%",
    height: 55,
    backgroundColor: "#23bf53",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
  text_button: {
    color: "white",
    fontWeight: "bold",
  },
  counter_text: {
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 100,
  },
});
