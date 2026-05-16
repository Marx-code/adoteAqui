import { View, Text, StyleSheet } from 'react-native';

export default function AtributosPet(props) {
  return (
    <View style={styles.conteiner}>
      <View style={styles.card}>
        <Text style={styles.label}>Porte</Text>
        <Text style={styles.valor}>{props.porte}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Sexo</Text>
        <Text style={styles.valor}>{props.sexo}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Energia</Text>
        <Text style={styles.valor}>⚡ {props.energia}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  valor: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
  },
});
