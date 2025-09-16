// components/Botao.js
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const Botao = ({ onPress, title, style, textStyle }) => {
  return (
    <Pressable style={[styles.botaoBase, style]} onPress={onPress}>
      <Text style={[styles.textoBase, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  botaoBase: {
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  textoBase: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Botao;