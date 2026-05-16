import { TextInput, Text, View, StyleSheet } from "react-native";

export default function Input (props) {

    return (

        <View style={styles.conteiner}>

            <Text style={styles.text}>{props.text}</Text>

            <TextInput
            placeholder={props.placeholder}
            style={[styles.input, props.style]}
            />

        </View>

    );

}


const styles = StyleSheet.create({

  conteiner: {
    marginTop: 6,
    gap: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
  },

  text: {
    fontWeight: 700,
  }
});