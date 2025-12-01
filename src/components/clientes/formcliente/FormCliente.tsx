import { useState, ChangeEvent, FormEvent } from "react";
import { ClipLoader } from "react-spinners";
import { cadastrar, atualizar } from "../../../services/Service";
import type { Cliente } from "../../../models/Cliente";

interface FormClienteProps {
  clienteInicial?: Cliente;
  onClose: () => void;
  onSuccess?: () => void;
}

function FormCliente({ clienteInicial, onClose, onSuccess }: FormClienteProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [cliente, setCliente] = useState<Cliente>(
    clienteInicial || { nome: "", email: "", telefone: "", origem: "" }
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
        const { id, ...novoCliente } = cliente as any;
        await cadastrar(`/clientes`, novoCliente, setCliente, {});
        alert("Cliente cadastrado com sucesso!");
      }
      if (onSuccess) onSuccess();
      onClose();
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

      {/* Botões iguais ao FormOportunidade */}
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
          className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded flex justify-center"
        >
          {isLoading ? <ClipLoader color="#fff" size={24} /> : clienteInicial ? "Atualizar" : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}

export default FormCliente;
