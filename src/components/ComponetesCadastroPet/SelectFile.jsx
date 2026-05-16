import { Image, Text, StyleSheet, View } from "react-native";

export default function SelectFile () {

    return (

        <View style={styles.conteiner}>

            <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3630/3630482.png' }} 
            style={{ width: 50, height: 50 }}
            />

            <View style={styles.div}>

                <Text style={styles.primario}>Adicionar Foto do Pet</Text>

                <Text style={styles.secundario}>Formatos suportados: JPG, PNG. Tamanho máximo 5MB.</Text>

            </View>

        </View>

    );

}


const styles = StyleSheet.create({
  conteiner: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "rgb(175, 175, 175)",
    borderRadius: 17,

    marginTop: 25,
    marginBottom: 25,
    padding: 20,
    gap: 10,

    alignItems: "center",

    backgroundColor: "white",

  },

  div: {
    alignItems: "center",
  },

  primario: {
    color: "#006ae2",
    fontWeight: 700,
  },

  secundario: {
    color: "#575757",
    fontWeight: 400,
    textAlign: "center"
  }
});