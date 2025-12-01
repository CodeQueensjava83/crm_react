import { useState } from "react";
import CardOportunidade from "../cardoportunidade/CardOportunidade";
import type { Oportunidade } from "../../../models/Oportunidades";
import FormOportunidade from "../formoportunidade/FormOportunidade";

function ListaOportunidades() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([
    { id: 1, titulo: "Venda de software ERP", valor: 12000, status: "Aberta", clienteId: 1 },
    { id: 2, titulo: "Consultoria em marketing digital", valor: 8000, status: "Em negociação", clienteId: 2 },
    { id: 3, titulo: "Treinamento corporativo", valor: 15000, status: "Fechada", clienteId: 3 },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);

  function adicionarOuAtualizarOportunidade(novaOportunidade: Oportunidade) {
    setOportunidades((prev) => {
      const existe = prev.find((o) => o.id === novaOportunidade.id);
      if (existe) {
        return prev.map((o) => (o.id === novaOportunidade.id ? novaOportunidade : o));
      }
      return [...prev, novaOportunidade];
    });
  }

  function deletarOportunidade(id: number) {
    setOportunidades((prev) => prev.filter((o) => o.id !== id));
  }

  return (
    <>
      <div className="flex justify-center my-4">
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          Nova Oportunidade
        </button>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-2xl mb-4">Cadastrar Oportunidade</h2>
            <FormOportunidade
              onClose={() => setShowCreateModal(false)}
              onSuccess={adicionarOuAtualizarOportunidade}
            />
          </div>
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {oportunidades.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Oportunidade foi encontrada!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oportunidades.map((oportunidade) => (
              <CardOportunidade
                key={oportunidade.id}
                oportunidade={oportunidade}
                onSuccess={adicionarOuAtualizarOportunidade}
                onDelete={deletarOportunidade}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaOportunidades;
