import { View, Text, StyleSheet, Alert } from "react-native";
import {
  ButtonTextImput,
  CustonTextImput,
} from "../components/custonTextImput";
import { CustonButton } from "../components/custonButton";
import { useState } from "react";
import { createUser } from "../services/auth";

export const Signup = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const createAuthentication = async () => {
    try {
      const response = await createUser(email, password);

      if (response.email == email) {
        navigation.goBack();
      }
    } catch (err) {
      showAlert();
    }
  };
  const showAlert = () => {
    Alert.alert("Atenção", "Corrija os dados!", [
      { text: "OK", onPress: () => {} },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.text}> Cadastro</Text>
      </View>

      <View style={styles.containerBotton}>
        <CustonTextImput
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          type={"email-address"}
        />
        <CustonTextImput
          placeholder={"Senha"}
          value={password}
          onChangeText={(text) => setPassword(text)}
          type={"numeric"}
        />

        <CustonButton
          title={"Cadastrar"}
          onClick={() => createAuthentication()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBotton: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    gap: 30,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
});
