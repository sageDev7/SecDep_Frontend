import { TipoAlumno } from '../tipos/TipoAlumno'; // Importa los tipos necesarios
import { TipoSeguro } from '../tipos/TipoSeguro'; // Importa los tipos necesarios
import { CuotaMensual } from '../cuotas-mensuales/cuotaMensual';
import { Inscripcion } from '../inscripciones/inscripcion';

export class Alumno {
    nomyApe ="";
    dni!: number;
    domicilio="";
    localidad="";
    provincia="";
    tel="";
    fecNac!: Date;
    sexo="";
    observaciones="";
    tipoAlumno!: TipoAlumno; // Asegúrate de tener una definición para TipoAlumno
    tipoSeguro!: TipoSeguro; // Asegúrate de tener una definición para TipoSeguro
    cuotasMensuales!: CuotaMensual[]; // Asegúrate de tener una definición para CuotaMensual
    inscripciones!: Inscripcion[]; // Asegúrate de tener una definición para Inscripcion
    id_a!: number;
}


