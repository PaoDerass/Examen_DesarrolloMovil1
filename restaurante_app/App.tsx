import React from 'react';
import { StatusBar } from 'react-native';
import Navegacion from './src/navegacion/Navegacion';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navegacion />
    </>
  );
}
