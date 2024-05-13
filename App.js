import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./appRoutes/stack";
import { SecurityContext } from "./context/securityContext";
import { Routes } from "./appRoutes";
export default function App() {
  return (
    <SecurityContext>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SecurityContext>
  );
}