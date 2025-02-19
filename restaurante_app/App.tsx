import React from 'react';
import { StatusBar } from 'react-native';
import Navegacion from './src/navegacion/Navegacion';
import { PedidoProvider } from './src/context/PedidoContext';

export default function App() {
  return (
    <PedidoProvider>
      <StatusBar barStyle="dark-content" />
      <Navegacion />
    </PedidoProvider>
  );
}