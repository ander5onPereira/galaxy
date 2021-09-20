import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import successCheck from "../img/Success/success-check.png";
import faillCheck from "../img/Faill/faill-check.png";

export function Message({ type, setAction, text, functionCallback }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {type === "SUCCESS" ? (
          <>
            <Image source={successCheck} style={styles.icon} />
            <Text style={styles.message}>{text}</Text>
          </>
        ) : (
          <>
            <Image source={faillCheck} style={styles.icon} />
            <Text style={styles.message}>{text}</Text>
          </>
        )}
        <TouchableOpacity
          onPress={() => {
            setAction("");
            functionCallback();
          }}
          style={styles.button}
        >
          <Text>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: "70%",
    height: "50%",
    borderRadius: 10,
    alignItems: "center",
  },
  icon: {
    marginVertical: 20,
  },
  message: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    width: "90%",
    position: "absolute",
    bottom: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },
});
