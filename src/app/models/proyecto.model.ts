export interface Proyecto {
  id: number;
  nombre: string;
  img: string;
  descripcion: string;
  botonVideo: {
    activo: boolean;
    video?: string;
  }
  botonDemo: {
    activo: boolean;
    url?: string;
  }
  botonCodigo: {
    activo: boolean;
    url?: string;
  }
}
