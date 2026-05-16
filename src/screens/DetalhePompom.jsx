import { View, ScrollView, StyleSheet } from 'react-native';

import FotoPet from '../components/componentesDetalhesPet/FotoPet';
import InfoBasica from '../components/componentesDetalhesPet/InfoBasica';
import AtributosPet from '../components/componentesDetalhesPet/AtributosPet';
import SobreMim from '../components/componentesDetalhesPet/SobreMim';
import LocalizacaoPet from '../components/componentesDetalhesPet/LocalizacaoPet';
import BotaoAdotar from '../components/componentesDetalhesPet/BotaoAdotar';

const pet = {
  id: '1',
  name: 'Pompom',
  breed: 'Golden Retriever',
  age: '2 anos',
  image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80&w=800',
  location: 'São Paulo, SP',
  tags: ['✔ Vacinado', '👶 Bem com Crianças', '✔ Dócil'],
  porte: 'Médio',
  sexo: 'Macho',
  energia: 'Alta',
  descricao: 'Olá! Eu sou o Pompom. Adoro brincar e receber carinho.',
};

export default function DetalhePompom({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FotoPet imagem={pet.image} onVoltar={() => navigation.goBack()} />

        <View style={styles.conteudo}>
          <InfoBasica nome={pet.name} raca={pet.breed} idade={2} tags={pet.tags} />

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
