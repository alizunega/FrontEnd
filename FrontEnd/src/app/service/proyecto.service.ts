import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  URL = 'http://localhost:8080/proyecto';

  constructor(private http: HttpClient) {}

  public lista(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.URL}/lista`);
  }

  public save(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.URL}/crear`, proyecto);
  }

  public listaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/traer/${id}`);
  }

  public update(id: number, proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.URL}/editar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
