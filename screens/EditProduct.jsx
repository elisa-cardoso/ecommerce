import {storeProducts, updateProduct } from "../services/appService";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { CustonButton } from "../components/custonButton";
import { CustonTextImput } from "../components/custonTextImput";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";


export default function EditProduct ({ route, navigation }) {
  const { item } = route.params;
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [amount, setAmount] = useState(item.amount);
  const [img, setImg] = useState(item.img);

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

  const editProduct = async () => {
    const updatedProductData = { name, description, price, amount, img };
    try {
      await updateProduct(item.id, updatedProductData); 
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao editar o produto:', error);
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
        <CustonButton title={"Atualizar"} onClick={() => editProduct()} />
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