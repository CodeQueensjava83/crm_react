import { useEffect, useState } from "react";
import { Cliente } from "../../models/Cliente";
import CardCliente from "./CardCliente";
import api from "../../services/Service";

export default function ListaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    api.get("/clientes")
      .then((response) => setClientes(response.data))
      .catch((error) => console.error("Erro ao buscar clientes:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clientes.map((c) => (
        <CardCliente key={c.id} cliente={c} />
      ))}
    </div>
  );
}
