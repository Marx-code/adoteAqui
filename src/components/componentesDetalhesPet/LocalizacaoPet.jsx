import { View, Text, StyleSheet } from 'react-native';

export default function LocalizacaoPet(props) {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.icone}>📍</Text>
      <View>
        <Text style={styles.label}>Localização:</Text>
        <Text style={styles.local}>{props.local}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 14,
    marginTop: 20,
  },
  icone: {
    fontSize: 22,
  },
  label: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  local: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginTop: 2,
  },
});
