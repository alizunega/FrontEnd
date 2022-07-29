import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL='http://localhost:8080/persona/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `traer/perfil`);
  }
  
  public update(id:number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

}
