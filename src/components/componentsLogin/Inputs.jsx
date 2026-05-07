import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Inputs (props) {

    return (
        <View style={styles.conteiner}>
            <Text style={styles.textInput}>{props.nameInput}</Text>

            <TextInput
            placeholder={props.placeholder}
            style={styles.input}/>

        </View>
    );
}

const styles = StyleSheet.create({
  conteiner: {
    gap: 5,
    marginBottom: 10
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "#cacaca",
    fontSize: 15,
    backgroundColor: "#ececec",
    color: "#575757",
    fontWeight: 500
  },
  textInput: {
    fontSize: 16,
    fontWeight: 600
  }
});