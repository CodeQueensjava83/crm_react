import { useEffect, useState } from "react";
import type { Oportunidade } from "../../../models/Oportunidades";
import CardOportunidade from "../cardoportunidade/CardOportunidade";


export default function ListaOportunidades() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);

  useEffect(() => {
    api.get("/oportunidades")
      .then((response) => setOportunidades(response.data))
      .catch((error) => console.error("Erro ao buscar oportunidades:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {oportunidades.map((o) => (
        <CardOportunidade key={o.id} oportunidade={o} />
      ))}
    </div>
  );
}
