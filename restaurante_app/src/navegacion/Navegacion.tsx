import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../pantallas/Inicio';
import RealizarPedido from '../pantallas/RealizarPedido';
import Eliminados from '../pantallas/Eliminados';

const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Inicio' component={Inicio} />
        <Tab.Screen name='Realizar Pedido' component={RealizarPedido} />
        <Tab.Screen name='Eliminados' component={Eliminados} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}