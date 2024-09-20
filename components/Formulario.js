
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from "react-native";
import calculaImc from "./Imc";

// Define o componente Formulario
const Formulario = () => {
  // Define três estados utilizando useState para armazenar o nome, peso e altura
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  // Funções para capturar e atualizar o nome, peso e altura
  const capturaNome = (valor) => {
    setNome(valor);
  };
  const capturaPeso = (valor) => {
    setPeso(valor);
  };
  const capturaAltura = (valor) => {
    setAltura(valor);
  };

  // Função para calcular o IMC e exibir um Alert com base no resultado
  const calculaImcHandler = () => {
    // Verifica se os valores de peso e altura são válidos
    if (!peso || !altura) {
      Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
      return;
    }

    // Calcula o IMC utilizando a função importada
    const resultado = calculaImc(parseFloat(peso), parseFloat(altura));

    // Exibe um Alert com base no resultado do IMC
    if (resultado < 18.5) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado}. Sua situação é de magreza.`
      );
    } else if (resultado >= 18.5 && resultado <= 25) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado}. Sua situação é de normalidade.`
      );
    } else if (resultado > 25 && resultado < 30) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado}. Sua situação é de sobrepeso.`
      );
    } else if (resultado >= 30 && resultado < 40) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado}. Sua situação é de obesidade.`
      );
    } else if (resultado >= 40) {
      Alert.alert(
        `Olá ${nome}!`,
        `Seu IMC é de ${resultado}. Sua situação é de obesidade grave.`
      );
    }
  };

  // Retorna a estrutura do componente com os elementos de interface de usuário
  return (
    <View>
      <TextInput
        style={estilos.input}
        onChangeText={capturaNome}
        placeholder="Informe seu nome"
        keyboardType="default"
      />
      <View style={estilos.boxInput}>
        <TextInput
          style={estilos.inputDois}
          onChangeText={capturaPeso}
          placeholder="Peso (ex: 80)"
          keyboardType="numeric"
          value={peso}
        />
        <TextInput
          style={estilos.inputDois}
          onChangeText={capturaAltura}
          placeholder="Altura (ex: 1.73)"
          keyboardType="numeric"
          value={altura}
        />
      </View>
      <View style={estilos.boxBotao}>
        <Pressable style={estilos.botao} onPress={calculaImcHandler}>
          <Text>Calcular IMC</Text>
        </Pressable>
      </View>
    </View>
  );
};

// Estilos CSS para os elementos de interface
const estilos = StyleSheet.create({
  boxBotao: {
    flexDirection: "row",
    justifyContent: "center",
  },
  botao: {
    height: 45,
    width: "95%",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  boxInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputDois: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Formulario;
