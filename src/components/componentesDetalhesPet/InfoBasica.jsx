import { View, Text, StyleSheet } from 'react-native';

export default function InfoBasica(props) {
  return (
    <View>
      <View style={styles.cabecalho}>
        <View>
          <Text style={styles.nome}>{props.nome}</Text>
          <Text style={styles.raca}>{props.raca}</Text>
        </View>
        <View style={styles.badgeIdade}>
          <Text style={styles.idadeNumero}>{props.idade}</Text>
          <Text style={styles.idadeTexto}>Anos</Text>
        </View>
      </View>

      <View style={styles.tags}>
        {props.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagTexto}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  nome: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  raca: {
    fontSize: 15,
    color: '#777',
    marginTop: 2,
  },
  badgeIdade: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: 'center',
  },
  idadeNumero: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  idadeTexto: {
    fontSize: 11,
    color: 'white',
    fontWeight: '500',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#E8F5EE',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  tagTexto: {
    color: '#27AE60',
    fontSize: 13,
    fontWeight: '600',
  },
});
