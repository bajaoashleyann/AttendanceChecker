import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  const onNextScreenPressed = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <TouchableOpacity onPress={onNextScreenPressed} style={styles.startButton}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
    backgroundColor: "lightcyan",
  },
  logo: {
    width: 250,
    height: 250,
  },
  startButton: {
    width: 250,
    height: 60,
    borderRadius: 28,
    backgroundColor: "#34d9c3",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
    fontFamily: "Courier New",
  },
});

export default Welcome;
