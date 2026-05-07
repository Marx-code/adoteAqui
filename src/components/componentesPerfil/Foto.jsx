import { Image, View, Text, StyleSheet } from "react-native";

export default function Foto (props) {

    return (

        <View style={styles.container}>

            <Image 
                source={{ uri: props.imagem }} 
                style={styles.imagem}
            />

        </View>

    );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    gap: 10
  },
  imagem: {
  width: 160,
  height: 160,
  borderWidth: 4,
  borderColor: "#00fdbe",
  borderRadius: 100,
  margin: 0
  }
});