import { useState } from "react";
import type { Cliente } from "../../../models/Cliente";
import CardCliente from "../cardcliente/CardCliente";

export default function ListaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([
    { id: 1, nome: "Maria", email: "maria@email.com", telefone: "123", origem: "Site", oportunidades: [] },
    { id: 2, nome: "João", email: "joao@email.com", telefone: "456", origem: "Indicação", oportunidades: [] },
  ]);

  const handleUpdate = (clienteAtualizado: Cliente) => {
    setClientes(prev =>
      prev.map(c => (c.id === clienteAtualizado.id ? clienteAtualizado : c))
    );
  };

  const handleDelete = (cliente: Cliente) => {
    setClientes(prev => prev.filter(c => c.id !== cliente.id));
  };

  return (
    <div className="grid gap-4">
      {clientes.map(c => (
        <CardCliente
          key={c.id}
          cliente={c}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
