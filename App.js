import React, { cloneElement, Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Counter from "./counter_page/Counter";
import { Provider } from "react-redux";
import { store } from "./store/store";
const App = (props) => {
  return (
    <View>
      <Provider store={store}>
        <Counter />
      </Provider>
    </View>
  );
};


export default App;
