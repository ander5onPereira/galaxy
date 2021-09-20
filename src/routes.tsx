import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cadastro from "./pages/cadastro";
import Lista from "./pages/lista";
import Home from "./pages/home";
import Icon from "./img/Icon/icon.png";
import { Image } from "react-native";

const Stack = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Funcionarios"
          component={Lista}
          options={{
            headerShown: true,
            title: "Funcionarios",
            headerStyle: {
              backgroundColor: "#0F181C",
            },
            headerTitleStyle: {
              color: "#FF6729",
              alignItems: "center",
              justifyContent: "center",
            },
            headerTitleAlign: "center",
            headerTintColor: "#FF6729",
            headerTitle: () => (
              <Image
                source={Icon}
                style={{ resizeMode: "contain", width: 40 }}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Novo"
          component={Cadastro}
          options={{
            headerShown: true,
            title: "Adicionar",
            headerStyle: {
              backgroundColor: "#0F181C",
            },
            headerTitleStyle: {
              color: "#FF6729",
              alignItems: "center",
              justifyContent: "center",
            },
            headerTitleAlign: "center",
            headerTintColor: "#FF6729",
            headerTitle: () => (
              <Image
                source={Icon}
                style={{ resizeMode: "contain", width: 40 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
