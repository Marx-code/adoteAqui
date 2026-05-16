import { Text, StyleSheet, View } from "react-native";

export default function Headline () {


    return (

        <View style={styles.conteiner}>

            <Text style={styles.principal}>Cadastrar Pet</Text>

            <Text style={styles.secundario}>Ajude um animal a encontrar um novo lar. Preencha os detalhes abaixo.</Text>

        </View>

    );

}

const styles = StyleSheet.create({
  conteiner: {
    gap: 6
  },
  principal: {
    fontSize: 24,
    fontWeight: 700
  },
  secundario: {
    color: "#636363",
    fontWeight: 600
  }
});