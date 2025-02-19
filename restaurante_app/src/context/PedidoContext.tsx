import React, { createContext, useContext, useState, ReactNode } from "react";

type Plato = {
  id: string;
  nombre: string;
  precio: string;
};

type PedidoContextType = {
  pedidos: Plato[];
  eliminados: Plato[];
  agregarPedido: (plato: Plato) => void;
  eliminarPedido: (id: string) => void;
};

const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

export const PedidoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pedidos, setPedidos] = useState<Plato[]>([]);
  const [eliminados, setEliminados] = useState<Plato[]>([]);

  const agregarPedido = (plato: Plato) => {
    setPedidos((prevPedidos) => [...prevPedidos, plato]);
  };

  const eliminarPedido = (id: string) => {
    setPedidos((prevPedidos) => {
      const pedidoAEliminar = prevPedidos.find((pedido) => pedido.id === id);
      if (pedidoAEliminar) {
        setEliminados((prevEliminados) => [...prevEliminados, pedidoAEliminar]);
      }
      return prevPedidos.filter((pedido) => pedido.id !== id);
    });
  };

  return (
    <PedidoContext.Provider value={{ pedidos, eliminados, agregarPedido, eliminarPedido }}>
      {children}
    </PedidoContext.Provider>
  );
};

export const usePedidos = () => {
  const context = useContext(PedidoContext);
  if (!context) {
    throw new Error("usePedidos debe ser usado dentro de un PedidoProvider");
  }
  return context;
};
