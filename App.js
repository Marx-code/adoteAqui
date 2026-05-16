import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/screens/Login";
import Pefil from "./src/screens/Perfil"
import CadastroPet from "./src/screens/CadastroPet";
import Home from "./src/screens/Home";
import DetalhePompom from "./src/screens/DetalhePompom";
import DetalheLuna from "./src/screens/DetalheLuna";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={() => (
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cadastro" component={CadastroPet} />
            <Tab.Screen name="Perfil" component={Pefil} />
          </Tab.Navigator>
        )} />

        <Stack.Screen name="DetalhePompom" component={DetalhePompom} />
        <Stack.Screen name="DetalheLuna" component={DetalheLuna} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
