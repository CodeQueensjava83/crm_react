import { useState } from "react";
import type { Oportunidade } from "../ListaOportunidades/ListaOportunidades";

interface Props {
  oportunidade: Oportunidade;
  onUpdate?: (oportunidade: Oportunidade) => void;
  onDelete?: (oportunidade: Oportunidade) => void;
}

export default function CardOportunidade({ oportunidade, onUpdate, onDelete }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Oportunidade>(oportunidade);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate?.(formData);
    setIsOpen(false);
  };

  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{oportunidade.titulo}</h2>
      <p className="text-gray-600"><span className="font-semibold">Descrição:</span> {oportunidade.descricao}</p>
      <p className="text-gray-600"><span className="font-semibold">Valor:</span> R$ {oportunidade.valor}</p>
      <p className="text-gray-600"><span className="font-semibold">Status:</span> {oportunidade.status}</p>

      {/* Botões */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete?.(oportunidade)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Deletar
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Editar Oportunidade</h3>

            <div className="space-y-3">
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Título"
              />
              <input
                type="text"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Descrição"
              />
              <input
                type="number"
                name="valor"
                value={formData.valor}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Valor"
              />
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded p-2"
                placeholder="Status"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
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
