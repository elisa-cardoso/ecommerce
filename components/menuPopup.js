import React, { useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Modal } from "react-native";
import { SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Context } from "../context/securityContext";

export const MenuPopPup = () => {
  const [visible, setVisible] = useState(false);
  const { setNotLogged, logged } = useContext(Context);

  return (
    <>
      <TouchableOpacity
        style={styles.containerSettings}
        onPress={() => setVisible(true)}
      >
        <FontAwesome name="reorder" size={30} color="#FA4A0C" />
      </TouchableOpacity>
      <Modal transparent visible={visible}>
        <SafeAreaView
          style={{ flex: 1, marginTop: 10 }}
          onTouchStart={()=>{ setTimeout(() => setVisible(false), 100);}}
        >
          <View style={styles.popPup}>
            <TouchableOpacity onPress={() => setNotLogged()}>
              <Text style={{ fontWeight: "bold" }}>LogOff</Text>
              <Entypo name="log-out" size={24} color="black" />
            </TouchableOpacity>

            <View></View>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  containerSettings: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
  },
  popPup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    position: "absolute",
    top: 50,
    right: 0,
    width: 100,
    height: 100,
    borderRadius: 10,
    padding: 15,
  },
});
