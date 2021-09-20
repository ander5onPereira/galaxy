import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";

interface ItButton extends TouchableOpacityProps {
  text: string;
}

export default function Button({ text, ...rest }: ItButton) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <LinearGradient
        style={styles.buttonColor}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0.3, 0.65]}
        colors={["#6A7583", "#0F181C"]}
      >
        <Text style={styles.textButton}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: "100%",
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 10,
  },
  buttonColor: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    borderRadius: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
