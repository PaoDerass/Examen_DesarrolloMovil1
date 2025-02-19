import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';
import { usePedidos } from '../context/PedidoContext';

export default function RealizarPedido() {
  const [nombre, setNombre] = useState('');
  const { pedidos, eliminarPedido } = usePedidos();

  const total = pedidos.reduce((sum, item) => sum + parseFloat(item.precio), 0).toFixed(2);

  const confirmarCompra = () => {
    if (!nombre.trim()) {
      Alert.alert("Error", "Ingrese su nombre antes de confirmar la compra.");
      return;
    }
    Alert.alert("Compra realizada", `Pedido confirmado por ${nombre}\nTotal: $${total}`);
  };

  return (
    <View>
      <Text>Confirmar Pedido</Text>
      <TextInput placeholder='Ingrese su nombre' value={nombre} onChangeText={setNombre} />
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre} - ${item.precio}</Text>
            <Button title='Eliminar' onPress={() => eliminarPedido(item.id)} />
          </View>
        )}
      />
      <Text>Total a pagar: ${total}</Text>
      <Button title='Confirmar Compra' onPress={confirmarCompra} />
    </View>
  );
}
