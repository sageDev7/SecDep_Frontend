// Importa las clases necesarias y define las enumeraciones y clases relacionadas
import { Alumno } from '../alumnos/alumno';
import { Disciplina } from '../disciplinas/disciplina';
import { Usuario } from '../usuarios/usuario';
import { CuotaMensual } from '../cuotas-mensuales/cuotaMensual';
import { TipoInscripcion } from '../tipos/TipoInscripcion';

// Define la clase Inscripcion
export class Inscripcion {
  icod!: number;
  fecInsc!: Date;
  fecVenc!: Date;
  importeUnico!: number;
  tipoInscr!: TipoInscripcion;
  alumno!:Alumno;
  disciplina!: Disciplina;
  usuario!: Usuario;
  cuotasMensuales!: CuotaMensual[];
}