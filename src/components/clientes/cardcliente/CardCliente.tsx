import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { deletar } from "../../../services/Service";
import type { Cliente } from "../../../models/Cliente";
import FormCliente from "../formcliente/FormCliente";

interface CardClienteProps {
  cliente: Cliente;
  onSuccess?: () => void; // callback para atualizar lista
}

function CardCliente({ cliente, onSuccess }: CardClienteProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function confirmarDelete() {
    setIsDeleting(true);
    try {
      await deletar(`/clientes/${cliente.id}`, {});
      alert("Cliente deletado com sucesso!");
      if (onSuccess) onSuccess(); // atualiza lista
      setShowDeleteModal(false);
    } catch (error) {
      alert("Erro ao deletar cliente.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="border p-4 rounded shadow flex flex-col justify-between">
      {/* Dados do cliente */}
      <div>
        <h3 className="text-xl font-bold">{cliente.nome}</h3>
        <p>Email: {cliente.email}</p>
        <p>Telefone: {cliente.telefone}</p>
        <p>Origem: {cliente.origem}</p>
      </div>

      {/* Botões de ação */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setShowEditModal(true)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded w-full"
        >
          Editar
        </button>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
        >
          Deletar
        </button>
      </div>

      {/* Modal de edição */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-2xl mb-4">Editar Cliente</h2>
            <FormCliente
              clienteInicial={cliente}
              onClose={() => setShowEditModal(false)}
              onSuccess={onSuccess}
            />
          </div>
        </div>
      )}

      {/* Modal de deletar */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h2 className="text-2xl mb-4">Excluir Cliente</h2>
            <p className="mb-6">
              Tem certeza que deseja excluir o cliente <strong>{cliente.nome}</strong>?
            </p>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarDelete}
                disabled={isDeleting}
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded flex items-center justify-center min-w-[100px]"
              >
                {isDeleting ? <ClipLoader color="#fff" size={20} /> : "Confirmar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardCliente;
