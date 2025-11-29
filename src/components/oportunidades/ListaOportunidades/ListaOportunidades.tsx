import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import type { Oportunidade } from "../../../models/Oportunidades";
import CardOportunidade from "../cardoportunidade/CardOportunidade";

export default function ListaOportunidades() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([]);

  useEffect(() => {
    buscar("/oportunidades", setOportunidades, {});
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {oportunidades.map((o) => (
        <CardOportunidade key={o.id} oportunidade={o} />
      ))}
    </div>
  );
}
