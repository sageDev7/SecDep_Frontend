import { Component } from '@angular/core';
import { Alumno } from './alumno';
import { AlumnoService } from './alumno.service';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  errorMessage:string="";
  alumnos!:Alumno[];
  userLoginOn:boolean=false;
  editMode:boolean=false;

  constructor(private alumnoService:AlumnoService, private formBuilder:FormBuilder, private loginService:LoginService){ 
    this.alumnoService.getAll().subscribe({
      next: (alumnoData) => {
        this.alumnos=alumnoData
      },
      error: (errorData) => {
        this.errorMessage=errorData
      },
      complete: () => {
        console.info("Datos de alumnos OK");
      }
    }
    )
    this.loginService.userLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    })
  }
}
