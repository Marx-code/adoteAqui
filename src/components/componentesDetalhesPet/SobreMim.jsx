import { View, Text, StyleSheet } from 'react-native';

export default function SobreMim(props) {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.titulo}>Sobre mim</Text>
      <Text style={styles.descricao}>{props.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    marginTop: 20,
    gap: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  descricao: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
});
