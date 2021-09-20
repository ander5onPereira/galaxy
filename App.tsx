import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Routes } from "./src/routes";
import * as Updates from "expo-updates";
import { IS_PRODUCTION } from "./config";

export default function App() {
  async function UpdateApp() {
    try {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    IS_PRODUCTION ? UpdateApp() : null;
  }, []);
  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}
