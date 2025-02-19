import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function RealizarPedido() {
  return (
    <View>
      <Text>Confirmar Pedido</Text>
      <TextInput placeholder='Ingrese su nombre' />
      <Button title='Confirmar Compra' />
    </View>
  );
}