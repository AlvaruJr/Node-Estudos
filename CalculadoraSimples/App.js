// App.js
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Botao from './components/Botao';
import Display from './components/Display';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const limparFeedback = () => {
    setErro('');
    setResultado(null);
  };

  const calcular = (operador) => {
    limparFeedback();
    const num1 = parseFloat(numero1.replace(',', '.'));
    const num2 = parseFloat(numero2.replace(',', '.'));

    if (isNaN(num1) || isNaN(num2)) {
      setErro("Por favor, insira números válidos.");
      return;
    }

    let calculoFinal;
    switch (operador) {
      case '+': calculoFinal = num1 + num2; break;
      case '-': calculoFinal = num1 - num2; break;
      case '*': calculoFinal = num1 * num2; break;
      case '/':
        if (num2 === 0) {
          setErro("Não é possível dividir por zero.");
          return;
        }
        calculoFinal = num1 / num2;
        break;
    }
    setResultado(calculoFinal);
  };

  const limparTudo = () => {
    setNumero1('');
    setNumero2('');
    limparFeedback();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.titulo}>Calculadora Simples</Text>

      <TextInput
        style={styles.input}
        placeholder="Primeiro número"
        placeholderTextColor="#999"
        keyboardType="decimal-pad"
        value={numero1}
        onChangeText={setNumero1}
        onFocus={limparFeedback}
      />
      <TextInput
        style={styles.input}
        placeholder="Segundo número"
        placeholderTextColor="#999"
        keyboardType="decimal-pad"
        value={numero2}
        onChangeText={setNumero2}
        onFocus={limparFeedback}
      />

      <View style={styles.botoesContainer}>
        <Botao title="+" onPress={() => calcular('+')} style={styles.botaoOperacao} />
        <Botao title="-" onPress={() => calcular('-')} style={styles.botaoOperacao} />
        <Botao title="×" onPress={() => calcular('*')} style={styles.botaoOperacao} />
        <Botao title="÷" onPress={() => calcular('/')} style={styles.botaoOperacao} />
      </View>

      <Botao title="Limpar" onPress={limparTudo} style={styles.botaoLimpar} />
      
      <Display erro={erro} resultado={resultado} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FFFFFF',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#333',
    color: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#444',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  botaoOperacao: {
    flex: 1,
    backgroundColor: '#FF9500',
    marginHorizontal: 5,
  },
  botaoLimpar: {
    width: '90%',
    backgroundColor: '#D32F2F',
  },
});