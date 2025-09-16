// components/Display.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ erro, resultado }) => {
  return (
    <View style={styles.resultadoContainer}>
      {erro ? (
        <Text style={styles.textoErro}>{erro}</Text>
      ) : resultado !== null ? (
        <Text style={styles.resultadoTexto}>
          Resultado: {resultado.toLocaleString('pt-BR', { maximumFractionDigits: 4 })}
        </Text>
      ) : (
        <Text style={styles.placeholderResultado}>Digite os valores para calcular</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  resultadoContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 8,
    width: '90%',
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultadoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  textoErro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  placeholderResultado: {
    fontSize: 16,
    color: '#888',
  },
});

export default Display;