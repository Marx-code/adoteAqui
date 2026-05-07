import { StyleSheet, View } from "react-native";

export default function ConteinerForm ({ children }) {

    return (
        <View style={styles.conteiner}>
            {children}
        </View>
    );

}

const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: "white",
    borderRadius: 25
  },
});