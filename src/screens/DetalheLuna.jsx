import { View, ScrollView, StyleSheet } from 'react-native';

import FotoPet from '../components/componentesDetalhesPet/FotoPet';
import InfoBasica from '../components/componentesDetalhesPet/InfoBasica';
import AtributosPet from '../components/componentesDetalhesPet/AtributosPet';
import SobreMim from '../components/componentesDetalhesPet/SobreMim';
import LocalizacaoPet from '../components/componentesDetalhesPet/LocalizacaoPet';
import BotaoAdotar from '../components/componentesDetalhesPet/BotaoAdotar';

const pet = {
  id: '2',
  name: 'Luna',
  breed: 'SRD',
  age: '8 meses',
  image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
  location: 'Campinas, SP',
  tags: ['✔ Vacinado', '✔ Castrado'],
  porte: 'Pequeno',
  sexo: 'Fêmea',
  energia: 'Média',
  descricao: 'Oi, eu sou a Luna. Adoro colo e brincadeiras suaves.',
};

export default function DetalheLuna({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FotoPet imagem={pet.image} onVoltar={() => navigation.goBack()} />

        <View style={styles.conteudo}>
          <InfoBasica nome={pet.name} raca={pet.breed} idade={0} tags={pet.tags} />

          <AtributosPet porte={pet.porte} sexo={pet.sexo} energia={pet.energia} />

          <SobreMim descricao={pet.descricao} />

          <LocalizacaoPet local={pet.location} />
        </View>
      </ScrollView>

      <BotaoAdotar onAdotar={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  conteudo: { padding: 20 },
});
