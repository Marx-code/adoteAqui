import { View ,Text, StyleSheet } from "react-native";

export default function Texto (props) {

    return (

        <View style={styles.container}>

            <Text style={styles.principal}>{props.nome}</Text>
            <Text style={styles.secundario}>{props.email}</Text>
            
        </View>

    );

}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flexDirection: 'column',
    gap: 18
  },
  principal: {
    fontSize: 28,
    fontWeight: 500,
  },
  secundario: {
    fontSize: 16,
  }
});