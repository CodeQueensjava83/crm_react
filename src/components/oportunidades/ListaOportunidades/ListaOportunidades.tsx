import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { buscar } from "../../../services/Service";
import CardOportunidade from "../cardoportunidade/CardOportunidade";
import FormOportunidade from "../formoportunidade/FormOportunidade";
import type { Oportunidade } from "../../../models/Oportunidade";

function ListaOportunidades() {
  const [isLoading, setIsLoading] = useState(false);
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    buscarOportunidades();
  }, []);

  async function buscarOportunidades() {
    try {
      setIsLoading(true);
      await buscar("/oportunidades", setOportunidades, {});
    } catch (error) {
      console.error("Erro ao buscar oportunidades:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Botão de cadastro */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded"
        >
          Nova Oportunidade
        </button>
      </div>

      {/* Modal de cadastro */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-2xl mb-4">Cadastrar Oportunidade</h2>
            <FormOportunidade
              onClose={() => setShowCreateModal(false)}
              onSuccess={buscarOportunidades}
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

      {/* Lista de cards */}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && oportunidades.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Oportunidade foi encontrada!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oportunidades.map((oportunidade) => (
              <CardOportunidade
                key={oportunidade.id}
                oportunidade={oportunidade}
                onSuccess={buscarOportunidades}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaOportunidades;
