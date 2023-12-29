// Importa las clases necesarias y define las clases relacionadas
import { Pago } from '../pagos/pago';
import { Inscripcion } from '../inscripciones/inscripcion';
import { Rol } from './rol'; // Ajusta la ruta según tu estructura de carpetas

// Define la clase Usuario
export class Usuario {
  id_u!: number;
  password="";
  username="";
  pagos!: Pago[];
  inscripciones!: Inscripcion[];
  roles!: Rol[];
}