import { useState } from "react";
import CardOportunidade from "../cardoportunidade/CardOportunidade";

export interface Oportunidade {
  id: string;
  titulo: string;
  descricao: string;
  valor: number;
  status: "Aberta" | "Em andamento" | "Fechada";
}

type OportunidadeForm = Omit<Oportunidade, "id">;

export default function ListaOportunidades() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([
    {
      id: "op1",
      titulo: "Website institucional",
      descricao: "Criação de site para empresa",
      valor: 5000,
      status: "Aberta",
    },
    {
      id: "op2",
      titulo: "Consultoria de marketing",
      descricao: "Plano estratégico de marketing digital",
      valor: 3000,
      status: "Em andamento",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<OportunidadeForm>({
    titulo: "",
    descricao: "",
    valor: 0,
    status: "Aberta",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "valor" ? Number(value) : value,
    }));
  };

  const handleSave = () => {
    const novaOportunidade: Oportunidade = {
      id: crypto.randomUUID(),
      ...formData,
    };
    setOportunidades(prev => [...prev, novaOportunidade]);
    setIsOpen(false);
    setFormData({ titulo: "", descricao: "", valor: 0, status: "Aberta" });
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Nova Oportunidade
      </button>

      <div className="grid gap-4">
        {oportunidades.map(o => (
          <CardOportunidade
            key={o.id}
            oportunidade={o}
            onUpdate={oportunidadeAtualizada =>
              setOportunidades(prev =>
                prev.map(op => (op.id === oportunidadeAtualizada.id ? oportunidadeAtualizada : op))
              )
            }
            onDelete={oportunidade =>
              setOportunidades(prev => prev.filter(op => op.id !== oportunidade.id))
            }
          />
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Cadastrar Oportunidade</h3>

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
              {/* Campo para digitar o valor */}
              <input
                type="text"
                name="valor"
                value={formData.valor === 0 ? "" : formData.valor}
                onChange={(e) =>
                  setFormData(prev => ({ ...prev, valor: Number(e.target.value) || 0 }))
                }
                className="w-full border rounded p-2"
                placeholder="Valor"
              />

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="Aberta">Aberta</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Fechada">Fechada</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
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
