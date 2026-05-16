import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';

import Logo from "../components/componentsLogin/Logo";
import Inputs from '../components/componentsLogin/Inputs';
import ConteinerForm from '../components/componentsLogin/ConteinerForm';
import CustomButton from '../components/componentsLogin/CustomButton';

export default function Login ({ onLogin }) {
    return (
        <View style={styles.container}>
            <Logo style={styles.child}/>

            <ConteinerForm>

              <View style={styles.div}>
              <Inputs nameInput = "Email" placeholder="Email@gmail.com" />
                <Inputs nameInput = "Senha" placeholder="********"/>


                <View>
                  <Text style={styles.password}>Esqueceu seu senha?</Text>
                </View>

                <CustomButton funcao="Entrar" onPress={onLogin} />
              </View>

            </ConteinerForm>
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10
  },
  child: {
    margin: 0,
    backgroundColor: "gray",
  },
  div: {
    margin: 25,
  },
  password: {
    fontWeight: 500,
    marginTop: 10,
    color: "#0062a8",
    textAlign: "right",
    fontSize: 13
  }
});