import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const CustomButton = (props) => {
  return (
    <TouchableOpacity activeOpacit={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.btnText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  btnText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default CustomButton;