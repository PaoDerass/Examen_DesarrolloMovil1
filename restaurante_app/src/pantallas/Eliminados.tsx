import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { usePedidos } from '../context/PedidoContext';

export default function Eliminados() {
  const { eliminados } = usePedidos();

  return (
    <View>
      <Text>Historial de Eliminados</Text>
      <FlatList
        data={eliminados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.nombre} - ${item.precio}</Text>}
      />
      <Text>Total eliminados: {eliminados.length}</Text>
    </View>
  );
}
