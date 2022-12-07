import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class SExperienciaService {
  private URL = 'https://backend-alizunega.koyeb.app/experiencia';

  constructor(private http: HttpClient) {}

  public lista(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.URL}/lista`);
  }

  public save(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.URL}/crear`, experiencia);
  }

  public listaPorId(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(`${this.URL}/traer/${id}`);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
