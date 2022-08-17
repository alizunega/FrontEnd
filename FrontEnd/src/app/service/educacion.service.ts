import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  URL = 'http://localhost:8080/educacion';

  constructor(private http: HttpClient) {}

  public lista(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.URL}/lista`);
  }

  public listaPorId(id: number): Observable<Educacion> {
    return this.http.get<Educacion>(`${this.URL}/traer/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
