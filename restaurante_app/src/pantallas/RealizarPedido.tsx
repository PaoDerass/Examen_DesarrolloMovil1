import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert } from 'react-native';

export default function RealizarPedido() {
  const [nombre, setNombre] = useState('');
  const [pedido, setPedido] = useState([
    { id: '1', nombre: 'Lasaña', precio: '150.00' }
  ]);

  return (
    <View>
      <Text>Confirmar Pedido</Text>
      <TextInput placeholder='Ingrese su nombre' value={nombre} onChangeText={setNombre} />
      <FlatList
        data={pedido}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre} - ${item.precio}</Text>
            <Button title='Eliminar' />
          </View>
        )}
      />
      <Button title='Confirmar Compra' onPress={() => Alert.alert('Compra realizada', `Pedido confirmado por ${nombre}`)} />
    </View>
  );
}