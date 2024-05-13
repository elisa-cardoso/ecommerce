import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Products } from "../screens/Products";
import { MembersGroup } from "../screens/Members";
import { AddProduct } from "../screens/AddProduct";
import { StyleSheet, TouchableOpacity } from "react-native";
import EditProduct from "../screens/EditProduct";

const tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <tab.Navigator>
      <tab.Screen
        name="Products" component={Products} options={{ headerShown: false }}/>
      <tab.Screen name="AddProducts" component={AddProduct} />
      <tab.Screen name="MembersGroup" component={MembersGroup} />
      <tab.Screen name="EditProduct" component={EditProduct} />
    </tab.Navigator>
  );
};

const styles = StyleSheet.create({
  btnSettings: {
    marginRight: 10,
  },
});
