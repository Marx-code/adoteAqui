import { Text, Image, StyleSheet, View } from "react-native";

export default function Nav () {

    return (

        <View style={styles.container}>

            <View style={styles.div}>

                <Image 
                source={{ uri: 'https://images.vexels.com/media/users/3/235658/isolated/preview/ab14b963565a4c5ab27169d90c341994-animais-silhueta-21.png' }} 
                style={{ width: 40, height: 40 }}
                />

                <Text style={styles.texto}>PawAdopt</Text>              

            </View>
            
            <Image 
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/12225/12225881.png' }} 
                style={{ width: 35, height: 35 }}
                />  

        </View>

    );

}


const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#ebebeb",
    shadowColor: "#a0a0a0",
    shadowOffset: {
    width: 0,
    height: 2,
  },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  div: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4
  },

  texto: {
    fontSize: 18,
    fontWeight: 600,
    color: "#2d3e7c"
  }
});