import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { deletar } from "../../../services/Service";
import type { Oportunidade } from "../../../models/Oportunidade";
import FormOportunidade from "../formoportunidade/FormOportunidade";

interface CardOportunidadeProps {
  oportunidade: Oportunidade;
  onSuccess?: () => void;
}

function CardOportunidade({ oportunidade, onSuccess }: CardOportunidadeProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  async function confirmarDelete() {
    setIsDeleting(true);
    try {
      await deletar(`/oportunidades/${oportunidade.id}`, {});
      alert("Oportunidade deletada com sucesso!");
      if (onSuccess) onSuccess();
      setShowDeleteModal(false);
    } catch (error) {
      alert("Erro ao deletar oportunidade.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div className="border p-4 rounded shadow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold">{oportunidade.descricao}</h3>
        <p>Valor: R$ {oportunidade.valor}</p>
        <p>Status: {oportunidade.status}</p>
        <p>Cliente: {oportunidade.cliente}</p>
        <p>Telefone: {oportunidade.telefone}</p>
        <p>Origem: {oportunidade.origem}</p>
      </div>

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
            <h2 className="text-2xl mb-4">Editar Oportunidade</h2>
            <FormOportunidade
              oportunidadeInicial={oportunidade}
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
            <h2 className="text-2xl mb-4">Excluir Oportunidade</h2>
            <p className="mb-6">
              Tem certeza que deseja excluir <strong>{oportunidade.descricao}</strong>?
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
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded flex justify-center"
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

export default CardOportunidade;
