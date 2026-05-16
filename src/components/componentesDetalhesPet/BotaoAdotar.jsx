import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoAdotar(props) {
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={styles.botao} onPress={props.onAdotar}>
        <Text style={styles.texto}>🐾 Quero Adotar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
  },
  botao: {
    backgroundColor: '#4A90D9',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
