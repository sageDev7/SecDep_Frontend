// Importa las clases necesarias y define las enumeraciones y clases relacionadas
import { Inscripcion } from '../inscripciones/inscripcion';
import { CuotaMensual } from '../cuotas-mensuales/cuotaMensual';
import { Profesor } from '../profesores/profesor';

// Define la clase Disciplina
export class Disciplina {
  id_d!: number;
  nombre="";
  importe!: number;
  importeCuota!: number;
  inscripciones!: Inscripcion[];
  cuotasMensuales!: CuotaMensual[];
  profesores!: Profesor[];
}