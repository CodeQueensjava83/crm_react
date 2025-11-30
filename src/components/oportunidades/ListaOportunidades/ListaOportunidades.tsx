import { useEffect, useState } from "react";
import CardOportunidade from "../cardoportunidade/CardOportunidade";
import { buscar, cadastrar } from "../../../services/Service";
import type { Oportunidade } from "../../../models/Oportunidades";
import type { Cliente } from "../../../models/Cliente";
import axios from "axios";

export default function ListaOportunidades() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [novaOportunidade, setNovaOportunidade] = useState<Partial<Oportunidade>>({});
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    buscar("/oportunidades", setOportunidades, {});
    buscar("/clientes", setClientes, {});
  }, []);

  const handleCadastrar = async () => {
  if (
    !novaOportunidade.titulo ||
    !novaOportunidade.valor ||
    !novaOportunidade.status ||
    !novaOportunidade.clienteId
  ) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  try {
        await cadastrar("/oportunidades", novaOportunidade, (data: Oportunidade) => {
            setOportunidades([...oportunidades, data]);
        }, {});

        setShowModal(false);
        setNovaOportunidade({});
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const serverErrorMessage = error.response.data || 'Erro desconhecido do servidor';
            alert(`Falha ao cadastrar. Detalhes: ${JSON.stringify(serverErrorMessage)}`);
        } else {
            alert("Ocorreu um erro inesperado.");
        }
    }

  setShowModal(false);
  setNovaOportunidade({});
};


  return (
    <div>
      {/* Botão para abrir modal */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
      >
        Cadastrar Oportunidade
      </button>

      {/* Lista de cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {oportunidades.map((o) => (
          <CardOportunidade key={o.id} oportunidade={o} />
        ))}
      </div>

      {/* Modal de cadastro */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Cadastrar Oportunidade</h2>

            <input
              type="text"
              placeholder="Título"
              value={novaOportunidade.titulo || ""}
              onChange={(e) => setNovaOportunidade({ ...novaOportunidade, titulo: e.target.value })}
              className="border rounded w-full p-2 mb-3"
            />

            <input
              type="number"
              placeholder="Valor"
              value={novaOportunidade.valor || ""}
              onChange={(e) => setNovaOportunidade({ ...novaOportunidade, valor: Number(e.target.value) })}
              className="border rounded w-full p-2 mb-3"
            />

            <select
              value={novaOportunidade.status || ""}
              onChange={(e) => setNovaOportunidade({ ...novaOportunidade, status: e.target.value })}
              className="border rounded w-full p-2 mb-3"
            >
              <option value="">Selecione o status</option>
              <option value="Em negociação">Em negociação</option>
              <option value="Fechada">Fechada</option>
              <option value="Perdida">Perdida</option>
            </select>

            <select
              value={novaOportunidade.clienteId || ""}
              onChange={(e) =>
                setNovaOportunidade({ ...novaOportunidade, clienteId: Number(e.target.value) })
              }
              className="border rounded w-full p-2 mb-3"
            >
              <option value="">Selecione o cliente</option>
              {clientes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.id}
                </option>
              ))}
            </select>


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
