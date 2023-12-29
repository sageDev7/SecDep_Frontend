import { Disciplina } from "../disciplinas/disciplina";

export class Profesor{
    nomyApe ="";
    dni!: number;
    domicilio="";
    localidad="";
    provincia="";
    tel="";
    fecNac!: Date;
    sexo="";
    observaciones="";
    id_p!:number;
    fecIng!: Date;
    disciplinas!: Disciplina[];
}