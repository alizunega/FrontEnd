import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = "http://localhost:8080/proyecto"

  constructor(private http: HttpClient) { }
  
  public lista(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.URL}/lista`);
  }

  public save(experiencia: Proyecto): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, experiencia);
  }

  public listaPorId(id: number): Observable<any> {
    return this.http.get<Proyecto>(`${this.URL}/traer/${id}`);
  }

  public update(id: number, experiencia: Proyecto): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }

}
