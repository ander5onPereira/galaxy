import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, AsyncStorage } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemList from "../../components/ItemList";
import Loading from "../../components/Loading";

export default function Lista({ route }) {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregar();
  }, [repositories]);

  async function carregar() {
    const jsonValue = await AsyncStorage.getItem("@galaxy");
    setRepositories(JSON.parse(jsonValue));
    setLoading(false);
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={repositories}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ItemList
            id={item.id}
            nome={item.nome}
            sobrenome={item.sobrenome}
            pis={item.pis}
            email={item.email}
          />
        )}
        keyExtractor={(item, index) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
