import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const platos = [
  { id: '1', nombre: 'Lasaña', precio: '150.00' },
  { id: '2', nombre: 'Pasta Alfredo', precio: '120.50' },
  { id: '3', nombre: 'Risotto', precio: '180.00' },
  { id: '4', nombre: 'Gelato', precio: '110.00' },
  { id: '5', nombre: 'pizza', precio: '100.00' }
];

export default function Inicio() {
  return (
    <View>
      <Text>Lista de platos disponibles</Text>
      <FlatList
        data={platos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre} - ${item.precio}</Text>
            <Button title='Agregar Pedido' />
          </View>
        )}
      />
    </View>
  );
}