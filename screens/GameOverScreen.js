import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import CustomButton from "../components/CustomButton";

import Colors from "../constants/colors";
import DefaultStyles from "../constants/default-styles";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.titleText}>The Game Is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg",
          // }}
          resizeMode="cover"
        />
      </View>
      <Text style={[DefaultStyles.bodyText, styles.textContainer]}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </Text>
      <Text style={DefaultStyles.bodyText}>Number was: {props.userNumber}</Text>
      <CustomButton onPress={props.onRestart}>New Game</CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginHorizontal: 50,
    marginVertical: 10,
    fontSize: 20,
    textAlign: "center",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
