import { useState, ChangeEvent, FormEvent } from "react";
import type { Oportunidade } from "../../../models/Oportunidades";

interface FormOportunidadeProps {
  oportunidadeInicial?: Oportunidade;
  onClose: () => void;
  onSuccess?: (novaOportunidade: Oportunidade) => void;
}

export default function FormOportunidade({ oportunidadeInicial, onClose, onSuccess }: FormOportunidadeProps) {
  const [oportunidade, setOportunidade] = useState<Oportunidade>(
    oportunidadeInicial || {
      id: 0,
      titulo: "",
      valor: 0,
      status: "Aberta",
      clienteId: 0,
    }
  );

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setOportunidade({
      ...oportunidade,
      [e.target.name]: e.target.value,
    });
  }

  function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const novaOportunidade = oportunidadeInicial
      ? { ...oportunidadeInicial, ...oportunidade }
      : { ...oportunidade, id: Math.floor(Math.random() * 10000) };

    if (onSuccess) onSuccess(novaOportunidade);
    onClose();
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={salvar}>
      <div className="flex flex-col">
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          name="titulo"
          value={oportunidade.titulo}
          onChange={atualizarEstado}
          required
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="valor">Valor</label>
        <input
          type="number"
          name="valor"
          value={oportunidade.valor}
          onChange={atualizarEstado}
          required
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="status">Status</label>
        <select
          name="status"
          value={oportunidade.status}
          onChange={atualizarEstado}
          className="border p-2 rounded"
        >
          <option value="Aberta">Aberta</option>
          <option value="Em negociação">Em negociação</option>
          <option value="Fechada">Fechada</option>
          <option value="Perdida">Perdida</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="clienteId">Cliente ID</label>
        <input
          type="number"
          name="clienteId"
          value={oportunidade.clienteId}
          onChange={atualizarEstado}
          required
          className="border p-2 rounded"
        />
      </div>

      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold px-4 py-2 rounded"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded"
        >
          {oportunidadeInicial ? "Atualizar" : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}
