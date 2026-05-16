import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FotoPet(props) {
  return (
    <View style={styles.conteiner}>
      <Image source={{ uri: props.imagem }} style={styles.imagem} />
      <TouchableOpacity style={styles.botaoVoltar} onPress={props.onVoltar}>
        <Text style={styles.seta}>←</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    width: '100%',
    height: 280,
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 40,
    left: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  seta: {
    fontSize: 18,
    color: '#28335B',
    fontWeight: 'bold',
  },
});
