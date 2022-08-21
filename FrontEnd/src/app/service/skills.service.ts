import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  URL = 'http://localhost:8080/skills';

  constructor(private http: HttpClient) {}

  public lista(): Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.URL}/lista`);
  }

  public listaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/traer/${id}`);
  }

  public save(skills: Skills): Observable<Skills> {
    return this.http.post<Skills>(`${this.URL}/crear`, skills);
  }

  public update(id: number, skills: Skills): Observable<Skills> {
    return this.http.put<Skills>(`${this.URL}/editar/${id}`, skills);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/borrar/${id}`);
  }
}
