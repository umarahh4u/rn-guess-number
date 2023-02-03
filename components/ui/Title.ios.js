import React from "react";
import { StyleSheet, Text, Dimensions, Platform } from "react-native";

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
    // borderWidth: Platform.OS === "android" ? 0 : 2,
    // borderWidth: Platform.select({ android: 2, ios: 1 }),
    borderWidth: 1,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: deviceWidth < 380 ? 250 : 300,
  },
});
