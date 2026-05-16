import { View, StyleSheet } from "react-native";

import Nav from "../components/Nav";
import Headline from "../components/ComponetesCadastroPet/HeadLine";
import SelectFile from "../components/ComponetesCadastroPet/SelectFile";
import Input from "../components/ComponetesCadastroPet/Input";
import CustomButton from "../components/componentsLogin/CustomButton";


export default function CadastroPet () {

    return (
        <View>

            <Nav />

            <View style={styles.conteiner}>

                <Headline />

                <SelectFile />

                <Input text="Nome do Pet" />


                <View View style={styles.div}>
                    <Input text="Raça" style={{ width: 160 }} />
                    <Input text="Raça" style={{ width: 160 }} />
                </View>
                
                <Input text="Descrição" style={{ height: 140 }} />

                <CustomButton funcao="Cadastrar Pet"/>

            </View>

        </View>
    );

}

const styles = StyleSheet.create({

  conteiner: {
    padding: 25,
  },
  div: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});