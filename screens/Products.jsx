import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ListProducts from "../components/listProducts";

import CustomMenu, { MenuPopPup } from "../components/menuPopup";
import MyPopover from "../components/menuPopup";
import Popup from "../components/menuPopup";


export const Products = () => {
 

  return (
    <View style={styles.container}>
     <MenuPopPup />

      <View style={styles.containerProducts}>
       
        <ListProducts />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:'black'
  },
  containerProducts: {
    flex: 8,
  },

});
