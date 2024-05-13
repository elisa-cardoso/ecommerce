import { View, Text, StyleSheet, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { CustonTextImput } from "../components/custonTextImput";
import { CustonButton } from "../components/custonButton";
import { useState, useContext } from "react";
import { login } from "../services/auth";
import { Context } from "../context/securityContext";

export const Signin = ({ navigation }) => {
  const { setIsLogged} = useContext(Context);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const checkAuthentication = async () => {
    try {
      const response = await login(email, password);
      if (response.registered === true) {
        setIsLogged();
      }
    } catch (err) {
      //console.log(err);
      showAlert();
    }
  };
  const showAlert = () => {
    Alert.alert("Erro de Login", "Usuário ou Senha Inválidos", [
      { text: "OK", onPress: () => {} },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.text}> Login</Text>
      </View>
      <Animatable.View
        animation="fadeInUp"
        delay={300}
        style={styles.containerBotton}
      >
        <CustonTextImput
          placeholder={" Email"}
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
        <CustonButton title={"Acessar"} onClick={() => checkAuthentication()} />

        <View style={styles.containerTextRow}>
          <Text> Possui cadastro? </Text>
          <Text
            onPress={() => {
              navigation.navigate("Signup");
            }}
            style={{ color: "gray" }}
          >
            Cadastre-se
          </Text>
        </View>
      </Animatable.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBotton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    gap: 30,
  },
  containerTextRow: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
});
