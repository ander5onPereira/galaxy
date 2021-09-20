import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

interface ItData {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  pis: number;
}

const ItemList = ({ id, nome, sobrenome, pis, email }: ItData) => {
  const navigation = useNavigation();
  function editar() {
    //@ts-ignore
    return navigation.navigate("Novo", {
      id,
      nome,
      sobrenome,
      pis,
      email,
    });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={editar}>
      <View style={styles.containerHeader}>
        <View style={styles.containerRight}>
          <Text style={styles.secondaryText}>{nome}</Text>
          <Text style={styles.primeryText}>{sobrenome}</Text>
        </View>
        <View style={styles.containerLeft}>
          <Text style={styles.title}>Número NIS (PIS)</Text>
          <Text style={styles.primeryText}>{pis}</Text>
        </View>
      </View>

      <Text style={styles.email}> {email}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 15,
    paddingVertical: 10,
    marginVertical: 5,
  },
  containerHeader: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },
  containerRight: {
    width: "50%",
    paddingHorizontal: 10,
  },
  containerLeft: {
    alignItems: "center",
    width: "50%",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 12,
    marginVertical: 4,
  },
  primeryText: {
    fontSize: 12,
  },
  secondaryText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  email: {
    width: "90%",
    paddingLeft: 6,
  },
});

export default ItemList;
