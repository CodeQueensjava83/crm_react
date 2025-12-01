import { useState } from "react";
import type { Cliente } from "../../../models/Cliente";

interface Props {
  cliente: Cliente;
  onUpdate?: (cliente: Cliente) => void;
  onDelete?: (cliente: Cliente) => void;
}

export default function CardCliente({ cliente, onUpdate, onDelete }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Cliente>(cliente);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate?.(formData);
    setIsOpen(false);
  };

  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{cliente.nome}</h2>
      <p className="text-gray-600"><span className="font-semibold">Email:</span> {cliente.email}</p>
      {cliente.telefone && (
        <p className="text-gray-600"><span className="font-semibold">Telefone:</span> {cliente.telefone}</p>
      )}
      <p className="text-gray-600"><span className="font-semibold">Origem:</span> {cliente.origem}</p>
      <p className="text-gray-600 mt-2"><span className="font-semibold">Oportunidades:</span> {cliente.oportunidades?.length ?? 0}</p>

      {/* Botões */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete?.(cliente)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Deletar
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Editar Cliente</h3>

            <div className="space-y-3">
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full border rounded p-2" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" />
              <input type="text" name="telefone" value={formData.telefone ?? ""} onChange={handleChange} className="w-full border rounded p-2" />
              <input type="text" name="origem" value={formData.origem} onChange={handleChange} className="w-full border rounded p-2" />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">Cancelar</button>
              <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
