import { useState } from "react";
import type { Cliente } from "../../../models/Cliente";
import FormCliente from "../formcliente/FormCliente";

interface CardClienteProps {
  cliente: Cliente;
}

function CardCliente({ cliente }: CardClienteProps) {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="border p-4 rounded shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">{cliente.nome}</h3>
        <p>Email: {cliente.email}</p>
        <p>Telefone: {cliente.telefone}</p>
        <p>Origem: {cliente.origem}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setShowEditModal(true)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded w-full"
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
        >
          Deletar
        </button>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-2xl mb-4">Editar Cliente</h2>
            <FormCliente clienteInicial={cliente} onClose={() => setShowEditModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CardCliente;
