import React, { createContext, useContext, useState, ReactNode } from "react";

type Pedido = {
  id: number;
  plato: string;
};

type PedidoContextType = {
  pedidos: Pedido[];
  eliminados: Pedido[];
  agregarPedido: (plato: string) => void;
  eliminarPedido: (id: number) => void;
};

const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

export const PedidoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [eliminados, setEliminados] = useState<Pedido[]>([]);

  const agregarPedido = (plato: string) => {
    const nuevoPedido: Pedido = { id: Date.now(), plato };
    setPedidos((prevPedidos) => [...prevPedidos, nuevoPedido]);
  };

  const eliminarPedido = (id: number) => {
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