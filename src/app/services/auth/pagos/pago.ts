// Importa las clases necesarias y define las clases relacionadas
import { CuotaMensual } from "../cuotas-mensuales/cuotaMensual";
import { Usuario } from "../usuarios/usuario";

// Define la clase PagoDeCuota
export class Pago {
  nroPago!: number;
  fecha!: Date;
  hora=""; // Nota: Time no es un tipo estándar en TypeScript, uso string para mostrarla.
  importe!: number;
  cuotaMensual!: CuotaMensual;
  usuario!: Usuario;
}