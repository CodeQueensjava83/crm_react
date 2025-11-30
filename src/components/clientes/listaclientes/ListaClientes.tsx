import { useEffect, useState } from "react";
import { buscar, cadastrar } from "../../../services/Service";
import type { Cliente } from "../../../models/Cliente";
import CardCliente from "../cardcliente/CardCliente";

export default function ListaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [novoCliente, setNovoCliente] = useState<Partial<Cliente>>({});

  useEffect(() => {
    buscar("/clientes", setClientes, {});
  }, []);

  const handleCadastrar = async () => {
    await cadastrar("/clientes", novoCliente, (data: Cliente) => {
      setClientes([...clientes, data]); // adiciona cliente novo na lista
    }, {});
    setShowModal(false);
    setNovoCliente({});
  };

  return (
    <div>
      {/* Botão para abrir modal */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
      >
        Cadastrar Cliente
      </button>

      {/* Grid de clientes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {clientes.map((c) => (
          <CardCliente key={c.id} cliente={c} />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Cadastrar Cliente</h2>

            <input
              type="text"
              placeholder="Nome"
              value={novoCliente.nome || ""}
              onChange={(e) => setNovoCliente({ ...novoCliente, nome: e.target.value })}
              className="border rounded w-full p-2 mb-3"
            />

            <input
              type="email"
              placeholder="Email"
              value={novoCliente.email || ""}
              onChange={(e) => setNovoCliente({ ...novoCliente, email: e.target.value })}
              className="border rounded w-full p-2 mb-3"
            />

            <input
              type="text"
              placeholder="Telefone"
              value={novoCliente.telefone || ""}
              onChange={(e) => setNovoCliente({ ...novoCliente, telefone: e.target.value })}
              className="border rounded w-full p-2 mb-3"
            />

            <input
              type="text"
              placeholder="Origem"
              value={novoCliente.origem || ""}
              onChange={(e) => setNovoCliente({ ...novoCliente, origem: e.target.value })}
              className="border rounded w-full p-2 mb-3"
            />

            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleCadastrar}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
