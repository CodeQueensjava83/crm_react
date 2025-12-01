import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { buscar } from "../../../services/Service";
import CardCliente from "../cardcliente/CardCliente";
import FormCliente from "../formcliente/FormCliente";
import type { Cliente } from "../../../models/Cliente";

function ListaClientes() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    buscarClientes();
  }, []);

  async function buscarClientes() {
    try {
      setIsLoading(true);
      await buscar("/clientes", setClientes, {});
    } catch (error: any) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Botão para abrir modal de cadastro */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          Novo Cliente
        </button>
      </div>

      {/* Modal de cadastro */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-2xl mb-4">Cadastrar Cliente</h2>
            <FormCliente
              onClose={() => setShowCreateModal(false)}
              onSuccess={buscarClientes}
            />
          </div>
        </div>
      )}

      {/* Loader */}
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#2563EB" size={32} />
        </div>
      )}

      {/* Lista de clientes */}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && clientes.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum Cliente foi encontrado!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientes.map((cliente) => (
              <CardCliente
                key={cliente.id}
                cliente={cliente}
                onSuccess={buscarClientes}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaClientes;
