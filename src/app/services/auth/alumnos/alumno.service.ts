import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from './alumno';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) { }

  //Ver alumnos
  getAll():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(environment.urlApi+'alumnos/ver',{withCredentials:true});
  }

  create(alumno:Alumno):Observable<Alumno>{
    return this.http.post<Alumno>(environment.urlApi+'alumnos/crear',alumno);
  }

  get(id:number):Observable<Alumno>{
    return this.http.get<Alumno>(environment.urlApi+'alumnos/verId/'+id);
  }

  delete(id:number):Observable<Alumno>{
    return this.http.delete<Alumno>(environment.urlApi+'alumnos/eliminar/'+id);
  }

  /*
  update(alumno:Alumno):Observable<Alumno>{
    return this.http.put<Alumno>(this.url+'/modificar',alumno);
  }
  */
}
