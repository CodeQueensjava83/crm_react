import { useState, ChangeEvent, FormEvent } from "react";
import { ClipLoader } from "react-spinners";
import { cadastrar, atualizar } from "../../../services/Service";
import type { Cliente } from "../../../models/Cliente";

interface FormClienteProps {
  clienteInicial?: Cliente; // se vier preenchido, é edição; se não, é cadastro
  onClose: () => void;
}

function FormCliente({ clienteInicial, onClose }: FormClienteProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [cliente, setCliente] = useState<Cliente>(
    clienteInicial || { id: 0, nome: "", email: "", telefone: "", origem: "" }
  );

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (clienteInicial) {
        await atualizar(`/clientes`, cliente, setCliente, {});
        alert("Cliente atualizado com sucesso!");
      } else {
        await cadastrar(`/clientes`, cliente, setCliente, {});
        alert("Cliente cadastrado com sucesso!");
      }
      onClose(); // fecha modal depois de salvar
    } catch (error) {
      alert("Erro ao salvar cliente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={salvar}>
      {["nome", "email", "telefone", "origem"].map((campo) => (
        <div key={campo} className="flex flex-col">
          <label htmlFor={campo}>{campo.charAt(0).toUpperCase() + campo.slice(1)}</label>
          <input
            type="text"
            name={campo}
            value={(cliente as any)[campo]}
            onChange={atualizarEstado}
            required
            className="border p-2 rounded"
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 rounded flex justify-center"
      >
        {isLoading ? <ClipLoader color="#fff" size={24} /> : clienteInicial ? "Atualizar" : "Cadastrar"}
      </button>
    </form>
  );
}

export default FormCliente;
