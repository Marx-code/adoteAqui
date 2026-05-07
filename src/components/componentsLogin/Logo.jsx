import { Image, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.container}>

            <Image 
                source={{ uri: 'https://images.vexels.com/media/users/3/235658/isolated/preview/ab14b963565a4c5ab27169d90c341994-animais-silhueta-21.png' }} 
                style={{ width: 70, height: 70 }}
            />

            <Text style={styles.textLogo}>PawAdopt</Text>
            <Text style={styles.text}>Bem Vindo! Conheça o seu novo melhor amigo.</Text>


        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  textLogo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2d3e7c"
  },
  text: {
    fontSize: 17,
    textAlign: "center",
    maxWidth: 400,
    color: "#818181",
    fontWeight: "500"
  }
});



