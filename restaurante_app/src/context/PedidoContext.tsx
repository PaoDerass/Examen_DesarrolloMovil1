import React, { createContext, useState } from 'react';

export const PedidoContext = createContext({
  pedidos: [],
  eliminados: [],
  agregarPedido: () => {},
  eliminarPedido: () => {},
});

export function PedidoProvider({ children }) {
  const [pedidos, setPedidos] = useState([]);
  const [eliminados, setEliminados] = useState([]);

  const agregarPedido = (plato) => {
    if (!pedidos.find((p) => p.id === plato.id)) {
      setPedidos((prevPedidos) => [...prevPedidos, plato]);
    }
  };

  const eliminarPedido = (id) => {
    setPedidos((prevPedidos) => prevPedidos.filter((p) => p.id !== id));
    const pedidoAEliminar = pedidos.find((p) => p.id === id);
    if (pedidoAEliminar) {
      setEliminados((prevEliminados) => [...prevEliminados, pedidoAEliminar]);
    }
  };

  return (
    <PedidoContext.Provider value={{ pedidos, agregarPedido, eliminarPedido, eliminados }}>
      {children}
    </PedidoContext.Provider>
  );
}
