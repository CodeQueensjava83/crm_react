import { useState } from "react";
import CardOportunidade from "../cardoportunidade/CardOportunidade";

export interface Oportunidade {
  id: number;
  titulo: string;
  descricao: string;
  valor: number;
  status: string;
}

export default function ListaOportunidades() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([
    { id: 1, titulo: "Website novo", descricao: "Criação de site institucional", valor: 5000, status: "Aberta" },
    { id: 2, titulo: "Consultoria", descricao: "Consultoria em marketing digital", valor: 3000, status: "Fechada" },
  ]);

  const handleUpdate = (oportunidadeAtualizada: Oportunidade) => {
    setOportunidades(prev =>
      prev.map(o => (o.id === oportunidadeAtualizada.id ? oportunidadeAtualizada : o))
    );
  };

  const handleDelete = (oportunidade: Oportunidade) => {
    setOportunidades(prev => prev.filter(o => o.id !== oportunidade.id));
  };

  return (
    <div className="grid gap-4">
      {oportunidades.map(o => (
        <CardOportunidade
          key={o.id}
          oportunidade={o}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
