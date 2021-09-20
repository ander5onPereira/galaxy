import { openDatabase } from "./connection";

const db = openDatabase();

interface ItData {
  id?: number;
  nome: string;
  sobrenome: string;
  email: string;
  pis: string;
}
export const add = (
  { nome, sobrenome, email, pis }: ItData,
  setError: React.Dispatch<React.SetStateAction<any>>
) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        "insert into items (nome, sobrenome,email,pis) values (?, ?,?,?)",
        [nome, sobrenome, email, pis]
      );
    },
    () => {
      setError("Erro inserir novo registro");
    }
  );
};

export const list = (
  setData: React.Dispatch<React.SetStateAction<any[]>>,
  setError: React.Dispatch<React.SetStateAction<any>>
) => {
  db.transaction(
    (tx) => {
      tx.executeSql("select * from items", [], (_, { rows }) => {
        // @ts-ignore
        setData(rows._array);
      });
    },
    () => {
      setError("Erro inserir novo registro");
    }
  );
};

export const update = (
  { id, nome, sobrenome, email, pis }: ItData,
  setError: React.Dispatch<React.SetStateAction<any>>
) => {
  db.transaction(
    (tx) => {
      tx.executeSql(
        `update items set nome = ?,sobrenome=?,email=?,pis=? where id = ?;`,
        [nome, sobrenome, email, pis, id]
      );
    },
    () => {
      setError("Não foi possível atualizar");
    }
  );
};

export const del = (
  id: number,
  setError: React.Dispatch<React.SetStateAction<any>>
) => {
  db.transaction(
    (tx) => {
      tx.executeSql(`delete from items where id = ?;`, [id]);
    },
    () => {
      setError("Não foi possível apagar registro");
    }
  );
};
