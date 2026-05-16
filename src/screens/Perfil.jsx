import { View, StyleSheet } from "react-native";

import Foto from "../components/componentesPerfil/Foto";
import Texto from "../components/componentesPerfil/Textos";
import Nav from "../components/Nav";

export default function Pefil () {

    return (
        
        <View>

            <Nav></Nav>

            <Foto imagem="https://cdn-icons-png.flaticon.com/512/12225/12225881.png"/>

            <Texto nome="Karl Marx" email="karlmarxjesusmoraes@gmail.com" />

        </View>

    );

}

