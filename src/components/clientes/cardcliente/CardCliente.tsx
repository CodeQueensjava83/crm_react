import { Cliente } from "../../models/Cliente";

interface Props {
  cliente: Cliente;
}

export default function CardCliente({ cliente }: Props) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition">
      {/* Nome */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">{cliente.nome}</h2>

      {/* Email */}
      <p className="text-gray-600">
        <span className="font-semibold">Email:</span> {cliente.email}
      </p>

      {/* Telefone */}
      {cliente.telefone && (
        <p className="text-gray-600">
          <span className="font-semibold">Telefone:</span> {cliente.telefone}
        </p>
      )}

      {/* Origem */}
      <p className="text-gray-600">
        <span className="font-semibold">Origem:</span> {cliente.origem}
      </p>

      {/* Quantidade de oportunidades */}
      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Oportunidades:</span>{" "}
        {cliente.oportunidades ? cliente.oportunidades.length : 0}
      </p>
    </div>
  );
}
