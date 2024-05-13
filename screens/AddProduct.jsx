import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { CustonButton } from "../components/custonButton";
import { CustonTextImput } from "../components/custonTextImput";
import { useState } from "react";
import { storeProducts } from "../services/appService";
import * as ImagePicker from "expo-image-picker";



export const AddProduct = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [amount, setAmount] = useState(null);
  const [img, setImg] = useState("");
  const dataProducts = { name, description, price, amount, img };
  const creatProdutc = async () => {
    try {
      const responde = await storeProducts(dataProducts);
      navigation.goBack();
    } catch (erro) {}
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.containerTop}>
        {img ? (
          <Image source={{ uri: img }} style={styles.image} />
        ) : (
          <Image source={require("../assets/image-background.png")} />
        )}
      </TouchableOpacity>

      <View style={styles.containerBottom}>
        <CustonTextImput
          placeholder={"Nome do produto"}
          value={name}
          onChangeText={(text) => setName(text)}
          type={"email-address"}
        />
        <CustonTextImput
          placeholder={"Descrição do produto"}
          value={description}
          onChangeText={(text) => setDescription(text)}
          type={"email-address"}
        />
        <CustonTextImput
          placeholder={"Preço do produto"}
          value={price}
          onChangeText={(text) => setPrice(text)}
          type={"numeric"}
        />
        <CustonTextImput
          placeholder={"Quantidade do produto em estoque"}
          value={amount}
          onChangeText={(text) => setAmount(text)}
          type={"numeric"}
        />
        <CustonButton title={"Cadastrar"} onClick={() => creatProdutc()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    flex: .5,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:25
  },
});
