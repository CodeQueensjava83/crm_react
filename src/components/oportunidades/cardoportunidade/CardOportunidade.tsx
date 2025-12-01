import { useState } from "react";
import type { Oportunidade } from "../../../models/Oportunidades";
import FormOportunidade from "../formoportunidade/FormOportunidade";

interface Props {
  oportunidade: Oportunidade;
  onSuccess?: (oportunidadeAtualizada: Oportunidade) => void;
  onDelete?: (id: number) => void;
}

export default function CardOportunidade({ oportunidade, onSuccess, onDelete }: Props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition flex flex-col justify-between">
      {/* 👉 Título da oportunidade */}
      <h2 className="text-lg font-semibold mb-2">{oportunidade.titulo}</h2>

      {/* Valor */}
      <p className="text-gray-600">
        <span className="font-semibold">Valor:</span> R$ {oportunidade.valor}
      </p>

      {/* Status */}
      <p className="text-gray-600">
        <span className="font-semibold">Status:</span> {oportunidade.status}
      </p>

      {/* Cliente ID */}
      <p className="text-gray-600">
        <span className="font-semibold">Cliente ID:</span> {oportunidade.clienteId}
      </p>

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
              Tem certeza que deseja excluir <strong>{oportunidade.titulo}</strong>?
            </p>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  if (onDelete) onDelete(oportunidade.id);
                  setShowDeleteModal(false);
                }}
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
