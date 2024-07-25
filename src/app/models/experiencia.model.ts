export interface Experiencia {
  id: number;
  empresa: string;
  img: string
  puesto: string;
  ubicacion: string;
  fechaInicio: string;
  fechaFin: string;
  proyecto?: string;
  descripcion?: string;
  responsabilidades: string[];
}
