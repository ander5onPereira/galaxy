import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { Routes } from "./src/routes";

import { CreateDataBase } from "./src/database/createDataBase";

export default function App() {
  useCallback(() => {
    CreateDataBase();
  }, []);

  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
