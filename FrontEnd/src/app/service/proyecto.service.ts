import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private URL = 'https://portfolioap-2022.herokuapp.com/proyecto';

  constructor(private http: HttpClient) {}

  public lista(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.URL}/lista`);
  }

  public save(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.URL}/crear`, proyecto);
  }

  public listaPorId(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.URL}/traer/${id}`);
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
