import type { Oportunidade } from "./Oportunidades";

// Cliente.ts
export interface Cliente {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  origem?: string;
  oportunidades?: Oportunidade[];
}
