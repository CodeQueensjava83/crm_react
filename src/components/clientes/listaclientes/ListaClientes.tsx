import { useState } from "react";
import type { Cliente } from "../../../models/Cliente";
import CardCliente from "../cardcliente/CardCliente";

export default function ListaClientes() {
  // 👉 Inicializa com dados mockados
  const [clientes, setClientes] = useState<Cliente[]>([
    {
      id: "1",
      nome: "Maria Silva",
      email: "maria.silva@email.com",
      telefone: "11 99999-1111",
      origem: "Site",
      oportunidades: [{ id: "op1", titulo: "Website institucional" }],
    },
    {
      id: "2",
      nome: "João Souza",
      email: "joao.souza@email.com",
      telefone: "11 98888-2222",
      origem: "Indicação",
      oportunidades: [],
    },
    {
      id: "3",
      nome: "Ana Costa",
      email: "ana.costa@email.com",
      telefone: "11 97777-3333",
      origem: "Evento",
      oportunidades: [{ id: "op2", titulo: "Consultoria de marketing" }],
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Cliente>({
    id: "",
    nome: "",
    email: "",
    telefone: "",
    origem: "",
    oportunidades: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const novoCliente: Cliente = {
      ...formData,
      id: crypto.randomUUID(), // gera id único
      oportunidades: [],
    };
    setClientes(prev => [...prev, novoCliente]);
    setIsOpen(false);
    setFormData({ id: "", nome: "", email: "", telefone: "", origem: "", oportunidades: [] });
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Novo Cliente
      </button>

      {/* Lista de clientes mockados + novos */}
      <div className="grid gap-4">
        {clientes.map(c => (
          <CardCliente
            key={c.id}
            cliente={c}
            onUpdate={clienteAtualizado =>
              setClientes(prev =>
                prev.map(cl => (cl.id === clienteAtualizado.id ? clienteAtualizado : cl))
              )
            }
            onDelete={cliente =>
              setClientes(prev => prev.filter(cl => cl.id !== cliente.id))
            }
          />
        ))}
      </div>

      {/* Modal de cadastro */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h3 className="text-lg font-bold mb-4">Cadastrar Cliente</h3>

            <div className="space-y-3">
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full border rounded p-2" placeholder="Nome" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" placeholder="Email" />
              <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full border rounded p-2" placeholder="Telefone" />
              <input type="text" name="origem" value={formData.origem} onChange={handleChange} className="w-full border rounded p-2" placeholder="Origem" />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancelar</button>
              <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Salvar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
