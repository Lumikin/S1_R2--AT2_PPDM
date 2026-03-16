import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [email, setEmail] = useState("");
  const [nome, setnome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [Data, setData] = useState("");
  const realizarLogin = () => {
    if (email === "" || nome === "" || telefone === "" || Data === "") {
      Alert.alert("Atenção, preencha todos os campos");
    } else {
      Alert.alert("Registro salvo com sucesso", "Bem vindo " + nome);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <KeyboardAvoidingView
        style={styles.safeArea}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        KeyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}> Cadastro de usuário </Text>

          <Text>Nome</Text>
          <TextInput
            placeholder="nome"
            onChangeText={setnome}
            style={styles.textInput}
          ></TextInput>
          <Text>Email</Text>
          <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            style={styles.textInput}
          ></TextInput>
          <Text>Telefone</Text>
          <TextInput
            placeholder="Telefone"
            onChangeText={setTelefone}
            keyboardType="number-pad"
            style={styles.textInput}
          ></TextInput>
          <Text>Data de nascimento</Text>
          <TextInput
            onChangeText={setData}
            placeholder="Data de nascimento"
            keyboardType="number-pad"
            style={styles.textInput}
          ></TextInput>
          <Pressable onPress={realizarLogin}>
            <Text style={styles.textoBotao}> Salvar </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#46af11",
    height: "98%",
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    paddingTop: 10,
    gap: 4,
  },
  safeArea: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#fff",
    width: "95%",
    borderRadius: 10,
    fontSize: 17,
  },
  textoBotao: {
    backgroundColor: "#fff",
    borderRadius: 6,
    width: "95%",
  },
});
