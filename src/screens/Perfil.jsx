import { View, StyleSheet } from "react-native";

import Foto from "../components/componentesPerfil/Foto";
import Texto from "../components/componentesPerfil/Textos";

export default function Pefil () {

    return (
        
        <View>

            <Foto imagem="https://images.vexels.com/media/users/3/235658/isolated/preview/ab14b963565a4c5ab27169d90c341994-animais-silhueta-21.png"/>

            <Texto nome="Karl Marx" email="karlmarxjesusmoraes@gmail.com" />

        </View>

    );

}

