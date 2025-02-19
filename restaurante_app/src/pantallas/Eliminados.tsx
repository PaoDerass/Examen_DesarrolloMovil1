import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function Eliminados() {
  const [eliminados, setEliminados] = useState([
    { id: '1', nombre: 'Pasta con Atún', precio: '95.00' }
  ]);

  return (
    <View>
      <Text>Historial de Eliminados</Text>
      <FlatList
        data={eliminados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.nombre} - ${item.precio}</Text>}
      />
    </View>
  );
}