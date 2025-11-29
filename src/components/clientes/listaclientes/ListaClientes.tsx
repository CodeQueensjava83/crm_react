import { useEffect, useState } from "react";
import type { Cliente } from "../../../models/Cliente";
import { buscar } from "../../../services/Service";

export default function ListaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    buscar("/clientes", setClientes, {});
  }, []);

  return (
    <div>
      {clientes.map((c) => (
        <div key={c.id}>{c.nome}</div>
      ))}
    </div>
  );
}
