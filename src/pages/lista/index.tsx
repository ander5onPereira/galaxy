import React, { useMemo, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemList from "../../components/ItemList";
import Loading from "../../components/Loading";

import { list } from "../../database/database";

export default function Lista({ route }) {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useMemo(() => {
    list(setRepositories, setError);
    setLoading(false);
  }, [repositories]);

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
