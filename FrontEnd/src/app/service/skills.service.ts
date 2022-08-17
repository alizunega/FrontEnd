import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = "http://localhost:8080/skills"

  constructor(private http: HttpClient) { }
  public lista(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.URL}/lista`);
  }

  public listaPorId(id: number): Observable<Skills> {
    return this.http.get<Skills>(`${this.URL}/traer/${id}`);
  }

  public save(educacion: Skills): Observable<any> {
    return this.http.post<any>(`${this.URL}/crear`, educacion);
  }

  public update(id: number, educacion: Skills): Observable<any> {
    return this.http.put<any>(`${this.URL}/editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }

}