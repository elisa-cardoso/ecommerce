import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { getAllProducts, storeProducts } from "../services/appService";
import { useNavigation } from "@react-navigation/native";

export default function ListProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllProducts();
      setAllProducts(data);
    };
    fetch();
  }, [allProducts]);

  const navigation = useNavigation();

  const handleEditProduct = ( item ) => {

    navigation.navigate('EditProduct', { item });
  };


  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.text}>Delicious</Text>
        <Text style={styles.text}>Food for you</Text>
      </View>
      <FlatList
        data={allProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <TouchableOpacity style={styles.containerFlatList}>
            <View style={styles.itens}>
              <Image source={item.img ? { uri: item.img } : require('../assets/image-background.png')} style={styles.image} />
              <View>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Button title='Editar' onPress={() => handleEditProduct(item)}/>
              </View>
            </View>
          </TouchableOpacity>
        )}
        style={styles.flatList}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  containerTop: {
    flex: 1,
    justifyContent: "center",
  },

  containerFlatList: {
    fle: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    width: Dimensions.get("window").width - 85,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  flatList: {
    flex: 3,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25
  },
  itens: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60
  }

});
