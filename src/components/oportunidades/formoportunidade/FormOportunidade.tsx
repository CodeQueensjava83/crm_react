import { useState, ChangeEvent, FormEvent } from "react";
import { ClipLoader } from "react-spinners";
import { cadastrar, atualizar } from "../../../services/Service";
import type { Oportunidade } from "../../../models/Oportunidades";

interface FormOportunidadeProps {
  oportunidadeInicial?: Oportunidade;
  onClose: () => void;
  onSuccess?: () => void;
}

function FormOportunidade({ oportunidadeInicial, onClose, onSuccess }: FormOportunidadeProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [oportunidade, setOportunidade] = useState<Oportunidade>(
    oportunidadeInicial || { descricao: "", valor: 0, status: "", cliente: "", telefone: "", origem: "" }
  );

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setOportunidade({
      ...oportunidade,
      [e.target.name]: e.target.value
    });
  }

  async function salvar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (oportunidadeInicial) {
        await atualizar(`/oportunidades`, oportunidade, setOportunidade, {});
        alert("Oportunidade atualizada com sucesso!");
      } else {
        const { id, ...novaOportunidade } = oportunidade as any;
        await cadastrar(`/oportunidades`, novaOportunidade, setOportunidade, {});
        alert("Oportunidade cadastrada com sucesso!");
      }
      if (onSuccess) onSuccess();
      onClose();
    } catch (error) {
      alert("Erro ao salvar oportunidade.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={salvar}>
      {["descricao", "valor", "status", "cliente", "telefone", "origem"].map((campo) => (
        <div key={campo} className="flex flex-col">
          <label htmlFor={campo}>{campo.charAt(0).toUpperCase() + campo.slice(1)}</label>
          <input
            type={campo === "valor" ? "number" : "text"}
            name={campo}
            value={(oportunidade as any)[campo]}
            onChange={atualizarEstado}
            required
            className="border p-2 rounded"
          />
        </div>
      ))}

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
          {isLoading ? <ClipLoader color="#fff" size={24} /> : oportunidadeInicial ? "Atualizar" : "Cadastrar"}
        </button>
      </div>
    </form>
  );
}

export default FormOportunidade;
