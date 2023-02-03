import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title.ios";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  const widthSize = height < 380 ? 150 : 300;
  const heightSize = height < 380 ? 150 : 300;

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View
          style={[
            { width: widthSize, height: heightSize },
            styles.imageContainer,
          ]}
        >
          <Image
            source={require("../assets/images/success.png")}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number
            <Text style={styles.highlight}> {userNumber} </Text>.
          </Text>
        </View>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: deviceWidth < 380 ? 18 : 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
