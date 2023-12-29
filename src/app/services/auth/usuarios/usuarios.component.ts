import { Component } from '@angular/core';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../../usuario/usuario.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  errorMessage:string="";
  usuario!:Usuario;

}
