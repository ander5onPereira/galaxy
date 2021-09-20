import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../img/Logo/Logo.png";
import Funcionarios from "../../img/Funcionarios/funcionarios.png";
import Funcionario from "../../img/Funcionario/funcionario.png";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();
  function handlerNew() {
    //@ts-ignore
    navigation.navigate("Novo", { page: "Novo" });
  }
  function handlerList() {
    //@ts-ignore
    navigation.navigate("Funcionarios", { page: "Funcionarios" });
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradienteBackground}
        locations={[0.5, 0.8]}
        colors={["#0F181C", "#6A7583"]}
      >
        <Image source={Logo} style={styles.logo} />
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={handlerNew}>
            <LinearGradient
              style={styles.gradienteButton}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              locations={[0.0, 0.65]}
              colors={["#6A7583", "#0F181C"]}
            >
              <Image source={Funcionario} style={styles.icon} />
              <Text style={styles.textButton}>Novo</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlerList}>
            <LinearGradient
              style={styles.gradienteButton}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              locations={[0.0, 0.65]}
              colors={["#6A7583", "#0F181C"]}
            >
              <Image source={Funcionarios} style={styles.icon} />
              <Text style={styles.textButton}>Funcionários</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F181C",
  },

  logo: {
    width: "80%",
    resizeMode: "contain",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    backgroundColor: "#555",
    borderRadius: 10,
    borderColor: "#0F181C",
    borderStyle: "solid",
    borderWidth: 1,
    elevation: 2,
  },
  icon: {
    height: 30,
    resizeMode: "contain",
  },
  gradienteBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  containerButton: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  gradienteButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
