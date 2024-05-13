import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

export const CustonButton = ({ title, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        onClick();
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   width:Dimensions.get('screen').width -60,
    height: 70,
    backgroundColor: "gray",
    borderRadius: 10,
    padding:10,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: "black",
    fontWeight:'bold',
    fontSize:24
  },
});
