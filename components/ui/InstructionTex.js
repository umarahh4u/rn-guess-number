import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionTex({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionTex;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
