import { Button, View, StyleSheet } from "react-native";

export default function CustomButton(props) {
  return (
    <View style={styles.conteiner}>
      <Button
        title={props.funcao}
        onPress={props.onPress ?? (() => {})}
        color="#28335B"
      />
    </View>
  );
}



const styles = StyleSheet.create({
  conteiner: {
    marginBottom: 20,
    marginTop: 20,
  }
});
