import type { Oportunidade } from "../../../models/Oportunidades";

interface Props {
  oportunidade: Oportunidade;
}

export default function CardOportunidade({ oportunidade }: Props) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-lg font-semibold">{oportunidade.titulo}</h2>
      <p className="text-gray-600">Valor: R$ {oportunidade.valor}</p>
      <p className="text-gray-600">Status: {oportunidade.status}</p>
    </div>
  );
}
