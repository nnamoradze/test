import React, { cloneElement, Component, useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addition, subtraction } from "../store/action";

export default function Counter() {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const textColor = data >= 0 ? 'green' : 'red';

  return (
    <View style={styles.root}>
      <Text style={[styles.counter_text, {color:textColor}]}>{data}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(addition())}
      >
        <Text style={styles.text_button}>Click for increase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#ff0000" }]}
        onPress={() => dispatch(subtraction())}
      >
        <Text style={styles.text_button}>Click for decrease</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop:'50%',
    marginBottom:'50%',
    alignItems:"center"
  },
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
