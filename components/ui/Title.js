import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children} </Text>;
}

export default Title;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 18 : 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: deviceWidth < 380 ? 250 : 300,
  },
});
