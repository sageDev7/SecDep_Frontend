// Importa las clases necesarias y define las enumeraciones y clases relacionadas
import { Alumno } from '../alumnos/alumno';
import { Disciplina } from '../disciplinas/disciplina';
import { Inscripcion } from '../inscripciones/inscripcion';
import { Pago } from '../pagos/pago';
import { ClaveCuota } from './claveCuota';

// Define la clase CuotaMensual
export class CuotaMensual {
  claveCuota!: ClaveCuota;
  alumno!: Alumno;
  disciplina!: Disciplina;
  inscripcion!: Inscripcion;
  pdc!: Pago;
  pnum!: number;
}
