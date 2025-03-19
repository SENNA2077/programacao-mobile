import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

function RegistrarConta() {
  return (
    <View style={{ flex: 1, paddingTop: 40, padding: 16 }}>
      <ScrollView>
        <View style={styles.appBar}>
          <Text style={styles.appTitle}>Registrar Conta</Text>
        </View>
        <View style={styles.container}>
          <Text>Nome</Text>
          <TextInput style={styles.input} multiline placeholder="Nome" />
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Email"
          />
          <Text>Senha</Text>
          <TextInput style={styles.input} secureTextEntry placeholder="Senha" />
          <Text>Confirma Senha</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            secureTextEntry
            placeholder=""
          />
          <Button style={styles.buttonText} title="Registrar" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "blue",
    padding: 16,
    justifyContent: "center",
    marginBottom: 8,
    elevation: 3,
  },

  appTitle: {
    Color: "white",
    fontSize: 24,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 64,
  },
  input: {
    backgroundColor: "lightblue",
    padding: 16,
    borderBottomWidth: 1,
    borderBlockColor: "blue",
    marginBottom: 16,
  },

  buttonText: {
    color: "white", // Cor do texto
    fontSize: 18, // Tamanho da fonte
    fontWeight: "bold", // Deixa o texto em negrito
  },
});

export default RegistrarConta;
