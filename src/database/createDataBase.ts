import { openDatabase } from "../database/connection";

const db = openDatabase();

export async function CreateDataBase() {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists items (id integer primary key not null, nome text, sobrenome text,email text,pis text);"
    );
  });
  this.fetchData();
}
